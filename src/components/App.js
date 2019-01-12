import React, { Component } from 'react';
import * as BooksAPI from '../utils/BooksAPI';
import BooksMain from '../components/BooksMain';
import '../styles/App.css';

class App extends Component {

  state = {
    books: [],
    booksQueried: [],
    searchValue: '',
    isBookOnArray: false,
  }

  /**
   * when the App component is mounted, this lyfecycle method calls all the books 
   * on the shelves through the BooksAPI
   */
  componentDidMount() {
    this.getBooksFromApi(this.props.books)
  }

  /**
  * This calls all the books on the shelves through the BooksAPI
  */
  getBooksFromApi = () => {
    BooksAPI.getAll().then(books => {
      this.setState({
        books: books
      })
    })
  }

  /**
   * To change the book from one shelf to another, we pass as an argument the book itself
   * and the selected shelf
   */
  changeShelfBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(this.getBooksFromApi);
  }

  /**
   * This method is used for querying new books. If the query is true, we call BookAPI to do the search. 
   * This method is also used to get the status of the shelf correctly from a given book. 
   * If the book consulted in the component is already on a specific shelf, 
   * this will be revealed in the options of the searched books
   */
  querySearch = (query) => {
    let booksFromQuery = [];
    query
      ? BooksAPI.search(query)
        .then(books => {
          books.error || !books
            ? this.setState({ booksQueried: [] })
            : booksFromQuery = books.map(b => {
              this.state.books.forEach(eachB => {
                if (eachB.id === b.id) b.shelf = eachB.shelf;
              })
              return b;
            })
          this.setState({ booksQueried: booksFromQuery, isBookOnArray: true })
        })
      : this.setState({ booksQueried: [], isBookOnArray: false })
  }

  /**
    * Catch the new value from the input. This is used to check the result 
    * is a empty array and the value isn't. If that so, we can presume that no results
    * returned from the query searched. That will display a message about failed query.
    * This method also avoid the maintance of the no book message in case the user
    * leaves the search page and return again
    */
  updateInputState = (value) => {
    this.setState({ searchValue: value })
  }

  /**
   * This clean up the books queried of the last book search
   */
  cleanSearch = () => {
    this.setState({ booksQueried: [] })
  }

  render() {
    return (
      <div>
        <BooksMain
          books={this.state.books}
          booksQueried={this.state.booksQueried}
          isBookOnArray={this.state.isBookOnArray}
          changeShelfBook={this.changeShelfBook}
          querySearch={this.querySearch}
          updateInputState={this.updateInputState}
          searchValue={this.state.searchValue}
          cleanSearch={this.cleanSearch}
        />
      </div>
    );
  }
}

export default App;
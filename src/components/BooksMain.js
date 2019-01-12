import React, { Component } from 'react';
import BookShelves from './BookShelves';
import BookSearch from './BookSearch';
import BookDetails from './BookDetails';
import { Route } from 'react-router-dom';
import '../styles/App.css';

class BooksMain extends Component {

  render() {

    const { books, booksQueried, isBookOnArray, changeShelfBook, querySearch, updateInputState, searchValue, cleanSearch } = this.props

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookShelves
            books={books}
            changeShelfBook={changeShelfBook}
          />
        )} />
        <Route path='/search' render={({ history }) => (
          <BookSearch
            books={booksQueried}
            isBookOnArray={isBookOnArray}
            changeShelfBook={(book, shelf) => {
              changeShelfBook(book, shelf);
              history.push('/');
            }}
            querySearch={querySearch}
            updateInputState={updateInputState}
            searchValue={searchValue}
            cleanSearch={cleanSearch}
          />
        )} />
        <Route exact path='/details' component={BookDetails} />
      </div>
    )
  }
}

export default BooksMain;
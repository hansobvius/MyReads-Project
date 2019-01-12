import React, { Component } from 'react';
import Books from './Books';
import { Link } from 'react-router-dom';
import '../styles/App.css';

class BookSearch extends Component {

    /**
     * When the user back to shelves component, it is called the handleData 
     * method to clean the previously searched books also the input value.
     */
    handleData = () => {
        this.props.cleanSearch();
        this.props.updateInputState('');
    }

    render() {
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/" onClick={this.handleData} className="close-search" />
                        <div className="search-books-input-wrapper">
                            <input
                                type="text"
                                placeholder="Search by title or author"
                                value={this.props.searchValue ? this.props.searchValue : ''}
                                onChange={e => {
                                    this.props.querySearch(e.target.value);
                                    this.props.updateInputState(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="search-books-results">
                        {(this.props.books.length !== 0) && (
                            <Books books={this.props.books} changeShelfBook={this.props.changeShelfBook} />
                        )}
                        {((this.props.isBookOnArray) && (this.props.books.length === 0) && (this.props.searchValue !== '')) && (
                            <h1 className="no-search-result">No Books Founded</h1>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default BookSearch;
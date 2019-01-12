import React, { Component } from 'react';
import Books from './Books';
import { Link } from 'react-router-dom';
import '../styles/App.css';

class BookShelves extends Component {

    state = {
        shelves: [
            { shelfName: 'Currently Reading', shelfCamelCaseName: 'currentlyReading' },
            { shelfName: 'Want to Read', shelfCamelCaseName: 'wantToRead' },
            { shelfName: 'Read', shelfCamelCaseName: 'read' }
        ],
    }

    /**
     * This checks if the argument isn't empty. If It is, 
     * we assignment the props as a array to not crash the app
     */
    isBookOnShelf = (b) => {
        const book = b
            ? b
            : []
        return book
    }

    render() {
        const isShelf = true;
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            {this.state.shelves.map(shelf => (
                                <div key={shelf.shelfCamelCaseName} className="bookshelf">
                                    <h2 className="bookshelf-title">{shelf.shelfName}</h2>
                                    <div className="bookshelf-books">
                                        <Books
                                            books={this.isBookOnShelf(this.props.books).filter(book => book.shelf === shelf.shelfCamelCaseName)}
                                            changeShelfBook={this.props.changeShelfBook}
                                            fromShelves={isShelf}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="open-search">
                        <Link to="/search">Add a book</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookShelves;
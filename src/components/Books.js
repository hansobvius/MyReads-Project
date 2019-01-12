import React, { Component } from 'react';
import BookOptions from './BookOptions';
import BookCover from './BookCover';
import BookInfo from './BookInfo';
import { Link } from 'react-router-dom';
import '../styles/App.css';

class Books extends Component {
    render() {
        return (
            <div>
                <ol className="books-grid">
                    {this.props.books.map(book => (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <BookCover book={book} />
                                    <BookOptions
                                        book={book}
                                        changeShelfBook={this.props.changeShelfBook}
                                    />
                                </div>
                                <Link
                                    className='link-details'
                                    to={
                                        {
                                            pathname: '/details',
                                            state: {
                                                bookUnit: book,
                                                fromShelves: this.props.fromShelves
                                            }
                                        }
                                    }>Go to Details...
                                </Link>
                                <BookInfo book={book} />                               
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

export default Books;
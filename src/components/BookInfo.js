import React from 'react';
import '../styles/App.css';

export default class BookInfo extends React.Component {
    render() {
        const { book, fromDetails } = this.props;
        return (
            <div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
                {fromDetails && (
                    <div>
                    <div className="book-date">{`Release Date: ${book.publishedDate}`}</div>
                    <div className="book-description">{book.description}</div>
                    </div>
                )}
            </div>
        )
    }
}
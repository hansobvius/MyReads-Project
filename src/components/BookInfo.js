import React from 'react';
import '../styles/App.css';

export default class BookInfo extends React.Component {
    render() {       
        const { book, fromDetails } = this.props;
        return (
            <div>
                <div className={book.title
                    ? 'book-title'
                    : 'book-title-found'}>
                    {book.title
                        ? book.title
                        : 'no title found...'}
                </div>
                <div className={book.authors
                    ? 'book-authors'
                    : 'book-authors-found'}>
                    {book.authors 
                        ? book.authors 
                        : 'no author found...'}
                </div>
                {fromDetails && (
                    <div>
                        <div className={book.publishedDate
                            ? 'book-publishedDate'
                            : 'book-publishedDate-found'}>
                        {book.publishedDate
                                ? `Release Date: ${book.publishedDate}`
                                : 'no release date found...'}
                        </div>
                        <div className={book.description
                            ? 'book-description'
                            : 'book-description-found'}>
                            {book.description 
                                ? book.description 
                                : 'no description found...'}
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

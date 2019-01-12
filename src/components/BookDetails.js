import React from 'react';
import BookCover from './BookCover';
import BookInfo from './BookInfo';
import { Link } from 'react-router-dom';
import '../styles/App.css';

export default class BookDetails extends React.Component {
    render() {
        const { bookUnit, fromShelves } = this.props.location.state;
        const fromDetails = true;
        return (
            <div className="book-detail-container">
                <Link to={fromShelves ? '/' : '/search'} className="close-search" />
                <div className="book-detail">
                    <BookCover book={bookUnit} fromDetails={fromDetails}/>
                    {bookUnit && (
                        <div>
                            <BookInfo book={bookUnit} fromDetails={fromDetails} />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

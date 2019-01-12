import React from 'react';
import '../styles/App.css';

export default class BookCover extends React.Component {

    /**
     * This checks if the book in particular really has a image link in your properties. 
     * If not, we pass a string, to alert user about the missing image
     */
    imageLoaded = (book) => {
        let image;
        if (book.imageLinks) {
            image = book.imageLinks.thumbnail 
                ? book.imageLinks.thumbnail 
                : book.imageLinks.smallThumbnail;
        } else {
            image = '';
        }
        return image;
    }

    render() {
        return (
            <div>
                {this.props.book.imageLinks
                    ? <div className={this.props.fromDetails ? 'book-cover-details' : 'book-cover'}
                        style={{
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundImage: `url("${this.imageLoaded(this.props.book)}")`
                        }}>
                    </div>
                    : <div className="no-image-found">
                        <p>image not avaliable</p>
                    </div>}
            </div>
        )
    }
}
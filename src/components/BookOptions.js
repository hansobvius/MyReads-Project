import React, { Component } from 'react';
import '../styles/App.css';

export default class BookOptions extends Component {

    state = {
        value: 'none',
        opt: [
            { camelCase: 'currentlyReading', title: 'Currently Reading' },
            { camelCase: 'wantToRead', title: 'Want to Read' },
            { camelCase: 'read', title: 'Read' },
            { camelCase: 'none', title: 'None' }
        ]
    }

    /**
     * When this component is mounted, the lifeCycle query 
     * passes the shelf value corresponding to the book
     */
    componentWillMount() {
        this.updateShelfValue();
    }

    /**
     * set and updates the book shelf value that is used to define the shelf from a book on the 
     * search component
     */
    updateShelfValue = (value) => {
        this.props.book.shelf && (
            this.setState({ value: this.props.book.shelf })
        )
        value && (
            this.setState({ value: value })
        )
    }

    render() {
        return (
            <div>
                <div className="book-shelf-changer">
                    <select
                        value={this.state.value}
                        name={this.props.book.title}
                        onChange={e => {
                            this.props.changeShelfBook(this.props.book, e.target.value);
                            this.updateShelfValue(e.target.value);
                        }}
                    >
                        <option disabled>Move to...</option>
                        {this.state.opt.map(o => (
                            <option key={o.camelCase} value={o.camelCase}>{o.title}</option>
                        ))}
                    </select>
                </div>
            </div>
        )
    }
}

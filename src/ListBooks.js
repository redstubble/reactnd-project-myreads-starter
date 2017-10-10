import React from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class ListBooks extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        bookStatus: PropTypes.string.isRequired
    }

    render() {
        const { books, bookStatus } = this.props
        return (
             <div className="bookshelf">
                <h2 className="bookshelf-title">{bookStatus
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, function(str){ return str.toUpperCase(); })}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid"> {
                      books.map((m, i) => <Book key={i} book={m} /> )
                      }
                  </ol>
                </div>
              </div>
        )
    }
}
export default ListBooks
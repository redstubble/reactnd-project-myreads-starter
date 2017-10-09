import React from 'react';
//import PropTypes from 'prop-types'


class ListBooks extends React.Component {
    state = {
        books: []
      }

    render() {
        const { books } = this.props
        return (
            <div>
                {books.map((book) => (
                book.title
              ))}
                
                </div>



        )
    }


}    
export default ListBooks
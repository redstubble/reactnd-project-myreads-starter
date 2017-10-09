import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {

  state = {
    books:[],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
              this.setState({books: books})
            })
  }

  render() {
    return (
      <div className="app">
        {/* Hello
         {this.state.books.map((book) => (
                "hjhj app"
              ))}
                  <script>
                  console.log("hj" + {this.state.books})
                  </script> */}
                  <ListBooks books={this.state.books} />
      </div>
    )
  }
}

export default BooksApp

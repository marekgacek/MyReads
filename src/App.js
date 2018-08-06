import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from "./BookList";
import {Route, Link} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
     books: [],
     query: '',
     showingBooks: []
   }

   // get all the books before loading the component
     componentDidMount() {
       BooksAPI.getAll().then((books) => {
         this.setState({books})
       })
     }
     // managing the input state
  updateQuery = (query) => {
    this.setState({query: query})
    let showingBooks = []
    if (query) {
      BooksAPI.search(query).then(response => {
        if (response.length) {
          showingBooks = response.map(book => {
            const index = this.state.books.findIndex(c => c.id === book.id)
            if( index >= 0 ) {
              return this.state.books[index]
            } else {
              return book
            }
          })
        }
        this.setState({showingBooks})
      })
    }
    else {
      this.setState({showingBooks})
    }
  }
  render() {
    const {query} = this.state
    return (
      <div className="app">
      <Route exact path="/search" render={() => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.state.showingBooks.map((book, i) => (
                    <li key={i}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{
                            width: 128,
                            height: 192,
                            backgroundImage: book.imageLinks ?
                              `url(${book.imageLinks.thumbnail})` : ''
                          }}></div>
                          <div className="book-shelf-changer">
                            <select onChange={this.changeBookShelf} value={this.state.shelf}>
                              <option value="move" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors ? book.authors.toString() : ' '}</div>
                      </div>
                    </li>
                  ))}
                </ol>

            </div>
          </div>
        )} />
           <Route exact path="/" render={() => (
             <BookList/>
           )}/>

     </div>
   )
   }
   }

   export default BooksApp

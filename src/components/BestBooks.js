import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

const SERVER = process.env.REACT_APP_BACKEND;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      index: 0,
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {
    let apiUrl = `${SERVER}/books`;

    try {
      const response = await axios.get(apiUrl);
      this.setState({ books: response.data });
    } catch (err) {
      console.error(err)
    }

  };

  componentDidMount() {
    this.getBooks();
  }

  handleSelect = (selectedIdx, e) => {
    e.preventDefault()
    this.setState({
      index: selectedIdx
    })
  }

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ? (
          <>
            <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
              {this.state.books.map(book => {
                return (<Carousel.Item>
                  <h3>{book.title}</h3>
                  <p>{book.description}</p>
                  <p>{book.status ? 'Have Read' : 'Have not Read'}</p>
                </Carousel.Item>);
              })}
            </Carousel>
          </>) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;

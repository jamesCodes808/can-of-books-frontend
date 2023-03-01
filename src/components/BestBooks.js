import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import AddBook from './AddBook';
import Button from 'react-bootstrap/Button';

const SERVER = process.env.REACT_APP_BACKEND;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      index: 0,
      showCreate: false
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

  postBook = async (data) => {
    let apiUrl = `${SERVER}/books`;

    try {
      let newBook = await axios.post(apiUrl, data);
      console.log(newBook);
      this.getBooks();
      this.setState({ index: this.state.books.length - 1 })
    } catch (err) {
      console.error(err);
    }

    console.log('added', data.title);
  }

  deleteBook = async (id) => {
    let apiUrl = `${SERVER}/books/${id}`;

    try {
      if (this.state.index) {
        this.handleSelect(this.state.index - 1);
      } else {
        this.handleSelect(0);
      }
      this.setState({ index: 0 })
      await axios.delete(apiUrl);
      this.getBooks();
    } catch (err) {
      console.error(err);
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  handleSelect = (selectedIdx) => {
    this.setState({
      index: selectedIdx
    })
  }

  toggleCreate = () => {
    this.setState({ showCreate: !this.state.showCreate });
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
                return (
                  <Carousel.Item key={book._id}>
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                    <p>{book.status ? 'Have Read' : 'Have not Read'}</p>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </>) : (
          <h3>No Books Found :(</h3>
        )
        }
        <Button onClick={() => this.deleteBook(this.state.books[this.state.index]._id)} > Delete Book</Button>
        <Button onClick={() => this.toggleCreate()} >Create Book</Button>
        <AddBook show={this.state.showCreate} toggle={this.toggleCreate} postBook={this.postBook} />
      </>
    )
  }
}

export default BestBooks;

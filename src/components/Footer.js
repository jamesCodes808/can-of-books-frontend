import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>&copy; James Ian Solima, Ethan Albers</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;

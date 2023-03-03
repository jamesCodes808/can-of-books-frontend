import React from 'react';
import { Navbar, NavItem, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import Logout from '../Auth/Logout';
import Login from '../Auth/Login';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>My Favorite Books</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
              {/* PLACEHOLDER: render a navigation link to the about page */}
              <NavItem><Link to="/about" className="nav-link">About</Link></NavItem>
              {this.props.auth0.isAuthenticated ?
                <NavItem>
                  <Logout />
                </NavItem> : <NavItem>
                  <Login />
                </NavItem>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default withAuth0(Header);

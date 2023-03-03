import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import BestBooks from './components/BestBooks';
import Welcome from './components/Welcome';
import { withAuth0 } from '@auth0/auth0-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    console.log(this.props.auth0)
    return (
      <>
        <Router>
          <Header />
          <Routes>

            <Route
              exact path="/"
              element={this.props.auth0.isAuthenticated ? <BestBooks /> : <Welcome />}
            >
            </Route>

            <Route
              exact path="/about"
              element={<About />}>



            </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);

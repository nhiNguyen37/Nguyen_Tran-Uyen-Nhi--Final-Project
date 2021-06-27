import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-slideshow-image/dist/styles.css';
import  './App.css'
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Users from './Users';
import Listing from './Listing';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import PrivateRoute from './components/PrivateRoute'
import New from './New'

export default function App() {
  return (
        <Router>
          <div>
            <Navigation>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
                <li>
                  <Link to="/New">New</Link>
                </li>
                <li>
                  <Link to="/entries">Listings</Link>
                </li>
              </ul>
            </Navigation>

            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <PrivateRoute path="/entries">
                   <Listing />
              </PrivateRoute>
              <Route path="/">
                <Home />
              </Route>
              </Switch>
              <Footer />
        </div>
      </Router>
  );
}
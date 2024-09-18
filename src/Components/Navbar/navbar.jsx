import React from 'react'; // No need to import Component separately
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './navbar.css'; 

export class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="innovate">
          <Link to="/">
            <div className="navbar-logo">
              <h3>
                <span style={{ color: 'blue' }}>i</span>
                <span  style={{ color: 'black' }}>nnovate</span>
              </h3>
            </div>
          </Link>
        </div>

        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/">Home</Link> 
          </li>
          <li className="navbar-item">
            <Link to="/who-are-we">Who Are We</Link> 
          </li>
          <li className="navbar-item">
            <Link to="/what-we-do">What We Do</Link>
          </li>
          <li className="navbar-item">
            <Link to="/life-at-innovate">Life at Innovate</Link>
          </li>
        </ul>

        <Link to="/get-started">
          <button className="navbar-button">Get in Touch</button>
        </Link>
      </nav>
    );
  }
}

export default Navbar;

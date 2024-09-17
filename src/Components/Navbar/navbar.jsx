import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './navbar.css'; 

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <span>Innovate</span>
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
        <button className="navbar-button">Get in Touch</button>
      </nav>
    );
  }
}

export default Navbar;

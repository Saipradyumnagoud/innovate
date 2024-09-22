import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Add/Remove class to body to restrict scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  // Close the menu when clicking outside
  useEffect(() => {
    const closeMenuOnClickOutside = (e) => {
      if (!e.target.closest('.navbar')) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('click', closeMenuOnClickOutside);
    }
    return () => {
      document.removeEventListener('click', closeMenuOnClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="innovate">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <div className="navbar-logo">
            <h3>
              <span style={{ color: 'blue' }}>N</span>
              <span style={{ color: 'black' }}>imble</span>
            </h3>
          </div>
        </Link>
      </div>

      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li className="navbar-item">
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/who-are-we" onClick={toggleMenu}>Who Are We</Link>
        </li>
        <li className="navbar-item">
          <Link to="/what-we-do" onClick={toggleMenu}>What We Do</Link>
        </li>
        <li className="navbar-item">
          <Link to="/life-at-innovate" onClick={toggleMenu}>Life at Nimble</Link>
        </li>
      </ul>

      <Link to="/get-started" className="navbar-button-link">
        <button className="navbar-button">Get in Touch</button>
      </Link>

      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;

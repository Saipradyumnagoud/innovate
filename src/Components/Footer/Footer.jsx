import React from 'react';
import { Link } from 'react-router-dom'; 
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Site Map Section */}
      <div className="footer-section">
        <h3 className="footer-title">Site Map</h3>
        <ul className="footer-links">
        <li >
            <Link to="/">Home</Link> 
          </li>
          <li >
            <Link to="/who-are-we">Who Are We</Link> 
          </li>
          <li >
            <Link to="/what-we-do">What We Do</Link>
          </li>
          <li >
            <Link to="/life-at-innovate">Life at Innovate</Link>
          </li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="footer-section">
        <h3 className="footer-title">Contact Us</h3>
        <p className="footer-contact">Email: infoatinnovate@gmail.com</p>
        <p className="footer-contact">Phone: +123 456 7890</p>
        <p className="footer-contact">Address: 123 Main Street, City, Country</p>
      </div>

      {/* Newsletter Subscription Section */}
      <div className="footer-section">
        <h3 className="footer-title">Subscribe to Newsletter</h3>
        <p>Stay updated with the latest news and offers.</p>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            className="footer-input"
          />
          <button className="footer-button">Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

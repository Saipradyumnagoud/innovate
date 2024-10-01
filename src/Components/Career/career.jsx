import React from 'react';
import './career.css';

const Career = () => {
  return (
    <div className="career-container">
      <div className="career-left">
        <h1>Join Our Team</h1>
        <p>We're always on the lookout for passionate individuals eager to innovate and grow with us.</p>
      </div>
      <div className="career-right">
        <form className="career-form" action="https://formsubmit.co/careersatnine@gmail.com" method="POST">
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
          </label>
          <label>
            LinkedIn Profile (optional):
            <input
              type="url"
              name="linkedin"
              placeholder="LinkedIn profile URL"
            />
          </label>
          <label>
            Tell Us About Yourself:
            <textarea
              name="about"
              placeholder="Share your experience, skills, and why you want to join us"
              required
            />
          </label>
          <button type="submit">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default Career;

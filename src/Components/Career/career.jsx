import React from 'react';
import './career.css';

const Career = () => {
  return (
    <div className="career-container">
      <div className="career-left">
        <h1>Join Our Team</h1>
        <p>We are always on the lookout for passionate individuals who are eager to innovate and grow with us.</p>
      </div>
      <div className="career-right">
        <form className="career-form" action="https://formsubmit.co/careersatnine@gmail.com" method="POST">
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
          </label>
          <label>
            Phone number:
            <input
              type="tel"
              name="phone"
              placeholder="Your phone number"
              required
            />
          </label>
          <label>
            LinkedIn Profile (optional):
            <input
              type="url"
              name="linkedin"
              placeholder="Your LinkedIn profile link"
            />
          </label>
          <label>
            Tell us about yourself:
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

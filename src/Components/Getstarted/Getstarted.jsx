import React from 'react';
import './started.css';

const GetStarted = () => {
  return (
    <div className="started-container">
      <div className="started-left">
        <h1>Let us build a project together</h1>
      </div>
      <div className="started-right">
        <form className="started-form" action="https://formsubmit.co/Carrersatnine@gmail.com" method="POST">
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
            Project Idea:
            <textarea
              name="project"
              placeholder="Your project idea"
              required
            />
          </label>
          <button type="submit">Get Started</button>
        </form>
      </div>
    </div>
  );
};

export default GetStarted;

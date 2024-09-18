import React from 'react';
import './started.css';

const GetStarted = () => {
  return (
    <div className="started-container">
      <div className="started-left">
        <h1>Let us build a project together</h1>
      </div>
      <div className="started-right">
        <form className="started-form">
          <label>
            Name:
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" placeholder="Your email" />
          </label>
          <label>
            Phone number:
            <input type="tel" name="phone" placeholder="Your phone number" />
          </label>
          <label>
            Project Idea:
            <textarea name="project"  />
          </label>
          <button type="submit">Get Started</button>
        </form>
      </div>
    </div>
  );
}

export default GetStarted;

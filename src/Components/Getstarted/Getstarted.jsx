import React, { useState } from 'react';
import './started.css';

const GetStarted = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Email sent successfully');
      } else {
        alert('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending email');
    }
  };

  return (
    <div className="started-container">
      <div className="started-left">
        <h1>Let us build a project together</h1>
      </div>
      <div className="started-right">
        <form className="started-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone number:
            <input
              type="tel"
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Project Idea:
            <textarea
              name="project"
              placeholder="Your project idea"
              value={formData.project}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Get Started</button>
        </form>
      </div>
    </div>
  );
}

export default GetStarted;

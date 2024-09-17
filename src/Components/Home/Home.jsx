import React from 'react';
import './home.css';
import test1 from './image.png'
const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">We Build Your Dreams Into Reality</h1>
          <p className="hero-description">
            Let us craft modern, beautiful, and fully functional websites and Apps that help bring your ideas to life.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2 className="section-title">Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Custom Web And App Development</h3>
            <p>Tailored websites and apps for your unique business needs.</p>
          </div>
          <div className="service-item">
            <h3>Responsive Design</h3>
            <p>Optimized for all devices, providing the best user experience.</p>
          </div>
          <div className="service-item">
            <h3>SEO Optimization</h3>
            <p>Helping your site rank higher on search engines and attract traffic.</p>
          </div>
          <div className="service-item">
            <h3>Continuous Integration</h3>
            <p>Automate the process of integrating code changes into a shared repository multiple times a day, ensuring that the codebase is always in a deployable state.</p>
          </div>
          <div className="service-item">
            <h3>Continuous Deployment</h3>
            <p>Automatically deploy code changes to production as soon as they pass automated tests, enabling faster and more reliable releases.</p>
          </div>
          <div className="service-item">
            <h3>Continuous Delivery</h3>
            <p>Ensure that code changes are always in a deployable state and can be released to production at any time, with the deployment process being automated and streamlined.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-list">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="{test1}" alt="Avatar"  />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>"We appreciate the ongoing support and maintenance provided. Their expertise has been invaluable in keeping our website running smoothly."</p>
                
                <span>Founder, Example Company</span>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="./image.png" alt="Avatar" style={{ width: '300px', height: '300px' }} />
              </div>
              <div className="flip-card-back">
                <h1>John Smith</h1>
                <p>"Excellent service! The project was completed on time and within budget. Highly recommended for anyone looking for quality web development."</p>
                <span>Founder, Another Example</span>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="./image.png" alt="Avatar" style={{ width: '300px', height: '300px' }} />
              </div>
              <div className="flip-card-back">
                <h1>Johnson</h1>
                <p>"Their team’s creativity and attention to detail ensured our project was a success. We are very pleased with their work and the final product."</p>
                <span>Founder, Creative Ventures</span>
              </div>
            </div>
          </div>
          {/* Add more flip cards as needed */}
        </div>
      </section>
    </div>
  );
};

export default Home;

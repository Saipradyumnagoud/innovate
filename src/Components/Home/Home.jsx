import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">We Build Your Dreams Into Reality</h1>
          <p className="hero-description">
            Let us craft modern, beautiful, and fully functional websites that help bring your ideas to life.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2 className="section-title">Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Custom Web Development</h3>
            <p>Tailored websites for your unique business needs.</p>
          </div>
          <div className="service-item">
            <h3>Responsive Design</h3>
            <p>Optimized for all devices, providing the best user experience.</p>
          </div>
          <div className="service-item">
            <h3>SEO Optimization</h3>
            <p>Helping your site rank higher on search engines and attract traffic.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2 className="cta-title">Ready to build your dream website?</h2>
        <button className="cta-button">Contact Us</button>
      </section>
    </div>
  );
};

export default Home;

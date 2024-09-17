import React from 'react';
import './whoarewe.css';

const WhoAreWe = () => {
  return (
    <>
    
    
    <div className="whoarewe">
      {/* Introduction Section */}
      <section className="intro">
        <h1 className="section-title">Who Are We?</h1>
        <p className="intro-description">
          We are a company dedicated to building cutting-edge solutions for startups and businesses. With years of experience, we turn ideas into successful ventures.
        </p>
      </section>

      {/* Achievements Section */}
      <section className="achievements">
        <div className="achievement">
          <h2>8Y</h2>
          <p>In Business</p>
        </div>
        <div className="achievement">
          <h2>25+</h2>
          <p>Products</p>
        </div>
        <div className="achievement">
          <h2>20</h2>
          <p>Clients</p>
        </div>
        <div className="achievement">
          <h2>105+</h2>
          <p>Experts</p>
        </div>
        <div className="achievement">
          <h2>400M</h2>
          <p>Market Value</p>
        </div>
      </section>

      {/* Founder and Director Section */}
      <section className="leadership">
        <h2>Founder and Director</h2>
        <p>Our founder and director, [Founder Name], has been at the forefront of innovation, guiding our company towards unparalleled success in the industry.</p>
      </section>

      {/* Board of Advisors Section */}
      <section className="advisors">
        <h2>Board of Advisors</h2>
        <p>We are supported by a strong board of advisors, who bring expertise from diverse sectors and help shape our company's vision and strategy.</p>
      </section>
    </div>
    </>
  );
};

export default WhoAreWe;

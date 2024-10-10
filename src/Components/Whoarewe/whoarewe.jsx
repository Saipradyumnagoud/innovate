import React from 'react';
import './whoarewe.css';
import founder1 from './CEO.jpg'
import { AiFillLinkedin } from "react-icons/ai";
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
        {/* <section className="achievements">
          <div className="achievement">
            <h2>XY</h2>
            <p>In Business</p>
          </div>
          <div className="achievement">
            <h2>XY+</h2>
            <p>Products</p>
          </div>
          <div className="achievement">
            <h2>XY</h2>
            <p>Clients</p>
          </div>
          <div className="achievement">
            <h2>XYZ+</h2>
            <p>Experts</p>
          </div>
          <div className="achievement">
            <h2>XYZM</h2>
            <p>Market Value</p>
          </div>
        </section> */}

        {/* Founder and Director Section */}
        <section className="leadership">
          <h2>Founder and Director</h2>
          <div className="leadership-cards">
            <div className="leadership-card">
            <img src={founder1} alt="Founder 1" />
              <h3>Sai Pradyumna Chiragoni</h3>
              <p>Founder & CEO <a href="https://www.linkedin.com/in/saipradyumnagoudch/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
              </a></p>
              
              
            </div>
            {/* <div className="leadership-card">
              <img src="founder2.jpg" alt="Founder 2" />
              <h3>Jane Smith</h3>
              <p>Co-Founder & CTO</p>
            </div> */}
          </div>
        </section>

        {/* Board of Advisors Section */}
        {/* <section className="advisors">
          <h2>Board of Advisors</h2>
          <p></p>
        </section> */}
      </div>
    </>
  );
};

export default WhoAreWe;

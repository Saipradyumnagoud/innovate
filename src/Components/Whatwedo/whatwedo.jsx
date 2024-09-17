import React from 'react';
import { FaLightbulb, FaRocket, FaLaptopCode } from 'react-icons/fa'; // Importing icons
import './whatwedo.css'
const WhatWeDo = () => {
  const services = [
    {
      icon: <FaLightbulb />,
      title: 'Innovative Ideas',
      description: 'We bring fresh and creative solutions tailored to your business needs.'
    },
    {
      icon: <FaRocket />,
      title: 'Fast Execution',
      description: 'We turn ideas into reality quickly, delivering high-quality results.'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Technical Excellence',
      description: 'We provide cutting-edge development services, ensuring the latest tech stack is used.'
    }
  ];

  return (
    <div className="what-we-do-container" >
      <h1 className="section-title">What We Do</h1>
      <p className="section-description">We provide innovative solutions to businesses and startups.</p>

      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;

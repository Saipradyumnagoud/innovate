import React from 'react';
import './lifeatinnovate.css';

const LifeAtInnovate = () => {
  return (
    <div className="lifeatinnovate-container">
      {/* Company Culture Section */}
      <section className="company-culture">
        <h2>Our Culture</h2>
        <p>At Innovate, we foster a collaborative and inclusive work environment where creativity and innovation thrive. Our mission is to empower employees to grow both personally and professionally.</p>
      </section>

      {/* Employee Testimonials Section */}
      {/* <section className="employee-testimonials">
        <h2>Employee Testimonials</h2>
        <div className="testimonial">
          <p>"Working at Innovate has been a fantastic journey. The mentorship and career growth opportunities have really shaped my career."</p>
          <span>- John Doe, Software Engineer</span>
        </div>
        <div className="testimonial">
          <p>"The work-life balance here is unparalleled. I enjoy the flexibility and the team's support in balancing personal and professional life."</p>
          <span>- Jane Smith, Product Manager</span>
        </div>
      </section> */}

      {/* Benefits and Perks Section */}
      <section className="benefits-perks">
        <h2>Benefits & Perks</h2>
        <ul>
          <li>Flexible working hours</li>
          <li>Opportunities for professional development</li>
          <li>Comprehensive health and wellness benefits</li>
          <li>Team-building activities and company outings</li>
        </ul>
      </section>

      {/* Diversity and Inclusion Section */}
      <section className="diversity-inclusion">
        <h2>Diversity & Inclusion</h2>
        <p>We are committed to building a diverse and inclusive workforce, where every employee feels valued and empowered to contribute their best.</p>
      </section>

      {/* Team Activities Section */}
      <section className="team-activities">
        <h2>Team Activities</h2>
        <p>From company-wide retreats to monthly social events, we ensure our employees have opportunities to connect, collaborate, and have fun.</p>
      </section>

      {/* Office Tour Section */}
      <section className="office-tour">
        <h2>Our Office</h2>
        <p>Take a tour of our vibrant office space, designed for collaboration and creativity. Our open floor plan encourages interaction, while dedicated quiet zones support focused work.</p>
        {/* You could embed a video or image gallery here */}
      </section>

      {/* Call to Action */}
      <section className="work-with-us">
        <h2>Work with Us</h2>
        <p>If you’re passionate about innovation and growth, we’d love to hear from you. <a href="/careers">Check out our current openings</a> and join our team!</p>
      </section>
    </div>
  );
};

export default LifeAtInnovate;

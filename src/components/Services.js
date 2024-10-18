// src/components/Services.js
import React from 'react';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="service-item">
        <h3>Service 1</h3>
        <p>Brief description of Service 1.</p>
      </div>
      <div className="service-item">
        <h3>Service 2</h3>
        <p>Brief description of Service 2.</p>
      </div>
      <div className="service-item">
        <h3>Service 3</h3>
        <p>Brief description of Service 3.</p>
      </div>
      <button>View All Services</button> {/* Call to action for services */}
    </section>
  );
};

export default Services;

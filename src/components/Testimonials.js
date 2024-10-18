// src/components/Testimonials.js
import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-item">
        <p>"Great service! Highly recommend."</p>
        <p>- Client Name</p>
      </div>
      <div className="testimonial-item">
        <p>"Amazing experience from start to finish!"</p>
        <p>- Client Name</p>
      </div>
      <button>See More Reviews</button>
    </section>
  );
};

export default Testimonials;

import React, { useState } from "react";
import "./Testimonials.css";

const testimonialsData = [
  { name: "John Doe", feedback: "This service is amazing! It really helped me achieve my goals." },
  { name: "Jane Smith", feedback: "I have never experienced such excellent customer service!" },
  { name: "Michael Johnson", feedback: "Highly recommend to anyone looking for quality and commitment." },
  { name: "Alice Brown", feedback: "A great experience from start to finish." },
  { name: "Bob Green", feedback: "Exceptional service and support!" },
  { name: "Sarah White", feedback: "Loved working with this team." },
  { name: "Tom Black", feedback: "The results exceeded my expectations." },
  { name: "Nancy Blue", feedback: "Professional and efficient." },
  { name: "Chris Yellow", feedback: "I will definitely use this service again." },
  { name: "Daisy Orange", feedback: "It was an incredible journey with them." },
];

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const handleClick = (index) => {
    setSelectedTestimonial(index);
  };

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-header">What Our Clients Say</h2>
      <div className="testimonials-slider">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial ${selectedTestimonial === index ? "selected" : ""}`}
            onClick={() => handleClick(index)}
          >
            <h3>{testimonial.name}</h3>
            <p>"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

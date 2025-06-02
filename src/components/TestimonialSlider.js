import React from 'react';
import './TestimonialSlider.css';

const TestimonialSlider = () => {
  return (
    <div className="testimonial-slider-container py-5">
      <h2 className="text-center mb-4 testimonials-heading">
        What People Think <span className="highlight">About Us</span>
      </h2>
      <p className="text-center mb-5">
        Discover what our clients have to say about their experience with ZeeTech.
      </p>

      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="testimonial-card">
              <div className="testimonial-img-wrapper">
                <img src="emily.webp" className="testimonial-img" alt="Emily" />
              </div>
              <div className="testimonial-content">
                <h4>Seamless Website Development with ZeeTech</h4>
                <p>
                  ZeeTech’s team made the entire website development process a breeze.
                  They took the time to understand my goals and delivered a site
                  that’s not only visually stunning but also highly functional.
                </p>
                <h6>Emily</h6>
                <div className="stars">⭐⭐⭐</div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="testimonial-card">
              <div className="testimonial-img-wrapper">
                <img src="john.webp" className="testimonial-img" alt="John" />
              </div>
              <div className="testimonial-content">
                <h4>Outstanding Support and Performance</h4>
                <p>
                  Working with ZeeTech has been an excellent experience. Their
                  support is top-notch, and their web systems are rock solid.
                </p>
                <h6>John</h6>
                <div className="stars">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;

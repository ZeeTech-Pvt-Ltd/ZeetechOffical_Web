import React from 'react';
import { Link } from 'react-router-dom';
import './Journey.css';

const Journey = () => {
  return (
    <section className="journey-section py-5">
      <div className="container">
        <div className="row align-items-center gy-5">

          {/* Text Column */}
          <div className="col-lg-6">
            <div className="journey-text">
              <p className="section-label">About Us</p>
              <h2 className="section-title-journey">Empowering Your Vision Through Digital Excellence</h2>
              <p className="section-description">
                At Zee Tech, we blend innovation with expertise to deliver transformative web, mobile, and software solutions tailored to your goals. Whether you're a startup or an enterprise, our end-to-end services are designed to elevate your digital presence and drive real-world results.
              </p>
              <p className="section-subtext">
                A transformational journey towards bringing hope and compassion to the world.
              </p>
              <Link to="/about-us" className='d-flex justify-content-start'>
              <button className="btn hero-btn filled">Read More</button>
              </Link>
            </div>
          </div>

          {/* Masonry Image Column */}
          <div className="col-lg-6">
            <div className="masonry-grid">
              <img src="futurism-perspective-digital-nom.webp" alt="Team" className="masonry-img" />
              <img src="information-technology-coding-co.webp" alt="Code" className="masonry-img" />
              <img src="mixed-programers-team-working-gr.webp" alt="Workspace" className="masonry-img" />
              <img src="team-working-animation-project_2 (1).webp" alt="Programming" className="masonry-img" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Journey;

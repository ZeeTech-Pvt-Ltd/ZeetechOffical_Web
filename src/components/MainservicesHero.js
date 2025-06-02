import React from 'react';
import { Link } from 'react-router-dom';
import './MainservicesHero.css';

const MainServicesHero = () => {
  return (
    <section className="main-services-hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Empowering Change, One Step at a Time</h1>
          <p className="hero-subtitle">
            Every small act of kindness creates a ripple of positive change.
            Join us in making a meaningful impact—together.
          </p>
          <div className="hero-buttons">
            <Link to="/about-us">
              <button className="hero-btn filled">About Us</button>
            </Link>
            <Link to="/contact">
              <button className="hero-btn outline">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainServicesHero;

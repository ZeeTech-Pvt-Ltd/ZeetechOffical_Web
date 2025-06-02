import React from 'react';
import './AppHero.css';


const AppHero = () => {
  return (
    <section className="appdev-section">
      <div className="appdev-container">
        {/* Left: Text Content */}
        <div className="appdev-content">
          <h2>
          Transform Your Businesses with Our 
          <span> Creative Mobile App Services!</span>
          </h2>
          <p>
          We offer visionary digital solutions of mobile applications to help businesses grow with the latest mobile app services. Users can access your site by using the mobile application on the go. Our team aims to deliver high-quality mobile app services using the latest technology. It builds scalable, innovative mobile apps that are designed to transform your business.

          </p>
          
        </div>

        {/* Right: Illustration */}
        <div className="appdev-image">
          <img src="Transform_Your_Businesses_with_O.webp" alt="Developer Illustration" />
        </div>
      </div>
    </section>
  );
};

export default AppHero;

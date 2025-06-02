import React from 'react';
import './DevopsCompony.css';

const DevopsCompony = () => {
  return (
    <section className="devops-compony-section1">
      <div className="devops-compony-container">
        
        {/* Left Side Image */}
        <div className="devops-compony-image">
          <img 
            src="/flat-design-devops-illustration.webp" 
            alt="API Integration" 
          />
        </div>

        {/* Right Side Text and Services */}
        <div className="devops-compony-content">
          <h2>How We are the Best DevOps Services Company</h2>
          <p>
          As a proficient DevOps development company, we deliver speed, scalability, and effective team collaboration. We help businesses launch software faster with fewer errors. Our team automates processes, manages cloud systems, and simplifies software updates. We also offer expert advice to keep your projects running efficiently from start to finish.
          </p>         
        </div>
        
      </div>
    </section>
  );
};

export default DevopsCompony;

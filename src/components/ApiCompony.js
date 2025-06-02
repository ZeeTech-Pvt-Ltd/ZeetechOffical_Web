import React from 'react';
import './ApiCompony.css';

const ApiCompony = () => {
  return (
    <section className="api-compony-section1">
      <div className="api-compony-container">
        
        {/* Left Side Image */}
        <div className="api-compony-image">
          <img 
            src="app development.webp" 
            alt="API Integration" 
          />
        </div>

        {/* Right Side Text and Services */}
        <div className="api-compony-content">
          <h2>How are We A Top API Integration Company?</h2>
          <p>
          Our API integration services reduce costs as well as generate more useful data. We integrate apps or platforms with other services to ensure that businesses operate well. This improves your workflow and better meets the needs of your customers. We ensure improved performance, scalability, and security. This enables your business to stay ahead in the digital landscape.
          </p>         
        </div>
        
      </div>
    </section>
  );
};

export default ApiCompony;

import React from 'react';
import './ApiApproach.css';

const ApiApproach = () => {
  return (
    <section className="api-approach-section">
      <div className="api-approach-container">
        {/* Right Side Text and Services */}
        <div className="api-approach-content">
          <h2>What Approach Do We Follow for API Integration?</h2>
          <p>
          We follow an organized and efficient approach for API integration. We ensure that users get enhanced connectivity and improved productivity. Our process begins with complete requirement analysis. We understand business needs and existing systems. Then, we develop a secure layer to enable smooth data exchange between applications. We create a custom user interface for easy monitoring and management if required. Quality testing processes ensure flawless performance along with security and compliance. Finally, we deploy and offer post-deployment support.
          </p>
        </div>
        {/* Left Side Image */}
        <div className="api-approach-image">
          <img 
            src="/flat-design-application-programm-removebg-preview.webp" 
            alt="Api Integration" 
          />
        </div>       
      </div>
    </section>
  );
};

export default ApiApproach;

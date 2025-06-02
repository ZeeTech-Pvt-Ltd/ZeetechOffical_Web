import React from 'react';
import './ApiHero.css';


const ApiHero = () => {
  return (
    <section className="api-section">
      <div className="api-container">
        {/* Left: Text Content */}
        <div className="api-content">
          <h2>
          Simplify Your Processes with Our 
          <span> API Integration Services!</span>
          </h2>
          <p>
          You can connect different devices to communicate and share information with simple steps. We offer a wide range of API services that provide seamless integration. Connect your apps, sync data, and let your systems work better together to drive efficiency. You can connect different devices to communicate and share information with simple steps. We offer a wide range of API services that provide seamless integration. Connect your apps, sync data, and let your systems work better together to drive efficiency.


          </p>
          
        </div>

        {/* Right: Illustration */}
        <div className="api-image">
          <img src="desktop-smartphone-app-developme-removebg-preview.webp" alt="API Intgration" />
        </div>
      </div>
    </section>
  );
};

export default ApiHero;

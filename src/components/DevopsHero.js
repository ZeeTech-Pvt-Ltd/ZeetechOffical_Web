import React from 'react';
import './DevopsHero.css';


const DevopsHero = () => {
  return (
    <section className="devops-section">
      <div className="devops-container">
        {/* Left: Text Content */}
        <div className="devops-content">
          <h2>
          Best Devops Services for  
          <span> Agile Software Development</span>
          </h2>
          <p>
          As an experienced DevOps development company, we help businesses achieve swift and reliable software deployment. We automate software testing and simplify maintenance to help you act quickly to your audience's needs. You can release new features promptly, fix bugs, reduce workload, and simplify your IT operations.

          </p>
          
        </div>

        {/* Right: Illustration */}
        <div className="devops-image">
          <img src="/data-chart-infinity-sign-concept-removebg-preview.webp" alt="DevOps" />
        </div>
      </div>
    </section>
  );
};

export default DevopsHero;

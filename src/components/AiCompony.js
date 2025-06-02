import React from 'react';
import './AiCompony.css';

const AiCompony = () => {
  return (
    <section className="ai-compony-section1">
      <div className="ai-compony-container">
        
        {/* Left Side Image */}
        <div className="ai-compony-image">
          <img 
            src="/ai-content-creation-generated-ar.webp" 
            alt="AI Integration" 
          />
        </div>

        {/* Right Side Text and Services */}
        <div className="ai-compony-content">
          <h2>How are We the Top Leading AI Integration Company?</h2>
          <p>
          We, at Zeetech, customize AI models to fit the business’s needs. Let our AI and ML services and solutions be the game-changer for your businesses. We use innovative technology and cloud solutions. They boost agility, make data-driven decisions, and add intelligent automation to your processes. Our expert team crafts these ideas and integrates features to help businesses grow. Also, we provide our clients with ongoing support to keep everything running well.
          </p>         
        </div>
        
      </div>
    </section>
  );
};

export default AiCompony;

import React from 'react';
import './DmarketingHero.css';


const DmarketingHero = () => {
  return (
    <section className="dm-section">
      <div className="dm-container">
        {/* Left: Text Content */}
        <div className="dm-content">
          <h2>
          Empower Your Brand with Tailored 
          <span> Digital Marketing Services</span>
          </h2>
          <p>
          Grow your business with our tested, revenue-focused digital marketing services. We specialize in helping businesses build a strong online presence. We provide the best internet marketing services, PPC campaigns, email marketing, and more. Our digital marketing experts combine creativity with innovation for great results. Let’s unite to unlock your business’s full potential to make a long-lasting impact!
          </p>
          
        </div>

        {/* Right: Illustration */}
        <div className="dm-image">
          <img src="\Empower_Your_Brand_with_Tailored.webp" alt="Digital Marketing" />
        </div>
      </div>
    </section>
  );
};

export default DmarketingHero;

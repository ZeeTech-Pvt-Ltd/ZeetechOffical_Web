import React from 'react';
import './EnterpriseHero.css';


const EnterpriseHero = () => {
  return (
    <section className="enterprise-seo-section">
      <div className="enterprise-seo-container">
        {/* Left: Text Content */}
        <div className="enterprise-seo-content">
          <h2>
          Empower Your Brand with Scalable 
  
          <span> Enterprise SEO Solutions</span>
          </h2>
          <p>
          We help large businesses grow their online presence with powerful enterprise SEO solutions. Our team excels at simplifying complex SEO for large websites, making them rank higher on search engines. We craft smart SEO strategies to help your website fetch organic traffic and stay competitive. Let’s handle your website to help scale your business and unlock new opportunities in the digital world.
          </p>
          
        </div>

        {/* Right: Illustration */}
        <div className="enterprise-seo-image">
          <img src="Empower_Your_Brand_with_Scalable.webp" alt="Developer Illustration" />
        </div>
      </div>
    </section>
  );
};

export default EnterpriseHero;

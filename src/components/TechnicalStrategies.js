import React from 'react';
import './TechnicalStrategies.css';

const TechnicalStrategies = () => {
  return (
    <section className="technical-seo-strategies">
      <div className="technical-strategies-container">
        
        {/* Left Side Image */}
        <div className="technical-strategies-image">
          <img 
            src="seo-design_24877-35745-removebg.webp" 
            alt="Search Engine Optimization" 
          />
        </div>

        {/* Right Side Text and Services */}
        <div className="technical-strategies-content">
          <h2>What do Our Smartly Curated Technical SEO Strategies do?</h2>
          <p>
          We make your website faster so users stay longer. Since most people search on phones, we ensure your site works well on all devices. We fix issues that stop search engines from reading your content properly. By adding schema markup, we help search engines show extra info like star ratings and prices. We also secure your site with HTTPS to build trust and improve rankings. If your site has been hit with a penalty, we help you recover quickly and get back on track.
          </p>

        </div>
        
      </div>
    </section>
  );
};

export default TechnicalStrategies;

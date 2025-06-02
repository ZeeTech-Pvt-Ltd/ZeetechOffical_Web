import React from 'react';
import './EcommerceHero.css';


const EcommerceHero = () => {
  return (
    <section className="ecommerce-seo-section">
      <div className="ecommerce-seo-container">
        {/* Left: Text Content */}
        <div className="ecommerce-seo-content">
          <h2>
          Boost Your Local Presence with the Best  
          <span> Local SEO Services</span>
          </h2>
          <p>
          Local SEO aims to help your business thrive locally. It helps your business grow by enabling nearby people to find you when they search for your business’s related services or products. Our local SEO strategies help you optimize your website for a better ranking in local search results. Attract your targeted audience smartly with the best local SEO agency!
          </p>
          
        </div>

        {/* Right: Illustration */}
        <div className="ecommerce-seo-image">
          <img src="shopping-online-concept-with-lap.webp" alt="Ecommerce SEO" />
        </div>
      </div>
    </section>
  );
};

export default EcommerceHero;

import React from 'react';
import './LocalSeoHero.css';


const LocalSeoHero = () => {
  return (
    <section className="local-seo-section">
      <div className="local-seo-container">
        {/* Left: Text Content */}
        <div className="local-seo-content">
          <h2>
          Boost Your Local Presence with the Best  
          <span> Local SEO Services</span>
          </h2>
          <p>
          Local SEO aims to help your business thrive locally. It helps your business grow by enabling nearby people to find you when they search for your business’s related services or products. Our local SEO strategies help you optimize your website for a better ranking in local search results. Attract your targeted audience smartly with the best local SEO agency!
          </p>
          
        </div>

        {/* Right: Illustration */}
        <div className="local-seo-image">
          <img src="Boost_Your_Local_Presence_with_t.webp" alt="Developer Illustration" />
        </div>
      </div>
    </section>
  );
};

export default LocalSeoHero;

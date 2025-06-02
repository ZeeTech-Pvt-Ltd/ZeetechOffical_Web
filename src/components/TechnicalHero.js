import React from 'react';
import './TechnicalHero.css';


const TechnicalHero = () => {
  return (
    <section className="technical-seo-section">
      <div className="technical-seo-container">
        {/* Left: Text Content */}
        <div className="technical-seo-content">
          <h2>
          Improve Web Performance & Ranking with Our 
          <span> Technical SEO Services </span>
          </h2>
          <p>
          Your website’s prolonged loading time increases the bounce rate and lowers its search engine rankings. Enhance your website speed and performance with our expert technical SEO services agency. We help you build your website’s credibility for search engines and captivate quality leads.
          </p>
          
        </div>

        {/* Right: Illustration */}
        <div className="technical-seo-image">
          <img src="professional-search-engine-optim.webp" alt="Developer Illustration" />
        </div>
      </div>
    </section>
  );
};

export default TechnicalHero;

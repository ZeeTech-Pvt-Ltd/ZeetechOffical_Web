import React from 'react';
import './SeoHero.css';


const SeoHero = () => {
  return (
    <section className="seo-section">
      <div className="seo-container">
        {/* Left: Text Content */}
        <div className="seo-content">
          <h2>
          Promote Your Brand with Our Expert 
          <span> SEO Agency & Consultancy</span>
          </h2>
          <p>
          Boost your website’s traffic and conversion rates with our advanced search engine optimization services. As a trusted SEO company, Zeetech optimizes your website to help it gain traction. Being the best SEO company, we offer custom strategies for businesses that want real results. Don’t wait! Rank higher on search engines by partnering with the best SEO agency today.
          </p>
          
        </div>

        {/* Right: Illustration */}
        <div className="seo-image">
          <img src="abstract-illustration-online-mar.webp" alt="Developer Illustration" />
        </div>
      </div>
    </section>
  );
};

export default SeoHero;

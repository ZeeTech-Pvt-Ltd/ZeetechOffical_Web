import React from 'react';
import './OnpageHero.css';


const OnpageHero = () => {
  return (
    <section className="onpage-seo-section">
      <div className="onpage-seo-container">
        {/* Left: Text Content */}
        <div className="onpage-seo-content">
          <h2>
          <span>On Page SEO Services </span>That Drive Rankings & Revenue
          
          </h2>
          <p>
          Make your website a search engine’s priority and draw more traffic with our highly proficient on-page SEO Agency. We excel at optimising your web pages to enhance your search rankings and attract relevant audiences. We offer comprehensive on-page SEO services including keyword optimization, content enhancement, and strong internal linking to help you climb up those difficult search engine rankings.
          </p>
          
        </div>

        {/* Right: Illustration */}
        <div className="onpage-seo-image">
          <img src="On-Page-SEO-Services-That-Drive (1).webp" alt="On Page Seo" />
        </div>
      </div>
    </section>
  );
};

export default OnpageHero;

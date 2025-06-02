import React from 'react';
import './EnterpriseLevel.css';

const services = [
  "Draw Organic Traffic",
  "Higher Conversion Rates",
  "Competitive Benefit",
  "Long-term Growth",
];

const EnterpriseLevel = () => {
  return (
    <section className="seo-level-section">
      <div className="seo-level-container">
        
        {/* Left Side Image */}
        <div className="seo-level-image">
          <img 
            src="grab-this-amazing-isometric-illu.webp" 
            alt="Search Engine Optimization" 
          />
        </div>

        {/* Right Side Text and Services */}
        <div className="seo-level-content">
          <h2>Why Your Business Needs Enterprise-Level SEO</h2>
          <p>
          Enterprise SEO optimization services are of great significance for large businesses. These services use different strategies to boost your website’s search rankings. This helps your big business stand out in search results. Our enterprise SEO experts work to bring consistent traffic and help your business with long-term growth. We attract active users to your site with quality content and improved technical elements instead of ads-driven traffic. Outrank your competitors with our latest enterprise SEO trends to help enhance your site’s content and technical aspects!
          Here is how our Enterprise SEO services exclusively help your large business:
          </p>

          <div className="seo-level-services">
            {services.map((service, index) => (
              <div className="service-box" key={index}>
                <span className="icon">👍</span> {service}
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default EnterpriseLevel;
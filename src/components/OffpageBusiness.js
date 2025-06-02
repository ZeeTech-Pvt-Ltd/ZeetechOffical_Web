import React from 'react';
import './OffpageBusiness.css';

const services = [
    "Trusted backlinks and brand mentions",
    "Boosts visibility through external platforms",
    "Builds trust and authority online",
    "Improves ranking and traffic",
  ];

const OffpageBusiness = () => {
  return (
    <section className="seo-Offpage-section p-3">
      <div className="seo-off-container">
        
        {/* Left Side Image */}
        <div className="onpage-off-image">
          <img 
            src="seo-data-analytics-optimization (1).webp" 
            alt="Search Engine Optimization" 
          />
        </div>

        {/* Right Side Text and Services */}
        <div className="onpage-off-content">
          <h2>How We Help Your Business Succeed Online</h2>
          <p>
          Impacting the crowded online market requires more than a great website. You need to use smart off-page SEO services to make this possible. We work on building your brand’s reputation outside of your site by earning strong backlinks and brand mentions. Various search engines use these off-page signals to determine whether your website is trustworthy, authoritative, and relevant. Collaborate with our experienced off-page SEO agency to improve your search rankings and drive more traffic to your site.
          An effective off page SEO service can make your brand renowned in the following ways:
          </p>

          <div className="seo-best-services">
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

export default OffpageBusiness;

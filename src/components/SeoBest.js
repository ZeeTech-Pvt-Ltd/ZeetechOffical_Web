import React from 'react';
import './SeoBest.css';

const services = [
  "Get more traffic to your website",
  "Rank higher on Google",
  "Attract the right audience",
  "Boost sales and leads",
];

const SeoBest = () => {
  return (
    <section className="seo-best-section">
      <div className="seo-best-container">
        
        {/* Left Side Image */}
        <div className="seo-best-image">
          <img 
            src="seo-concept-illustration_24908-6.webp" 
            alt="Search Engine Optimization" 
          />
        </div>

        {/* Right Side Text and Services */}
        <div className="seo-best-content">
          <h2>What Makes Us the Best Search Engine Optimization Agency?</h2>
          <p>
          We don’t just randomly make content and try to fit it to all types of businesses. Instead, we work closely with businesses to understand their market position and needs and formulate the best possible solutions that can actually help them stand tall in the online business market. That‘s what makes us the best search engine optimization company, as we do not compromise on providing quality SEO services to our esteemed clients. No matter where you are right now, we have something to help you skyrocket your business.
          Our search engine optimization services are designed to help you:
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

export default SeoBest;

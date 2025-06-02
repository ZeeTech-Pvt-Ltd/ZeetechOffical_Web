import React from 'react';
import './LocalSeoStrategies.css';

const services = [
  "Show up in local searches",
  "Attract nearby customers",
  "Improve Google profile visibility",
  "Build trust in your community",
];

const LocalSeoStrategies = () => {
  return (
    <section className="local-seo-strategies">
      <div className="local-seo-strategies-container">
        
        {/* Left Side Image */}
        <div className="local-seo-strategies-image">
          <img 
            src="location-based-advertisement-gps.webp" 
            alt="Local Seo Strategies" 
          />
        </div>

        {/* Right Side Text and Services */}
        <div className="local-seo-strategies-content">
          <h2>How Our Local SEO Strategies Help Your Business Grow</h2>
          <p>
          We increase your visibility in local search results so local customers can reach you when they need your products or services. We improve your Google My Business profile, making it simple for customers to see your location, hours, and contact details. Local SEO brings in people who are ready to buy, which means higher conversions and better returns on your investment. Plus, good online reviews and strong local rankings build trust and make your business look reliable in your area.Our local SEO service helps your brand:
          </p>

          <div className="local-seo-strategies-services">
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

export default LocalSeoStrategies;

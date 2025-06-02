import React from 'react';
import './CustomWebDevelopment.css';

const services = [
  "Custom Development Solutions",
  "AI Integration",
  "UX/UI Designs",
  "Full Stack Development",
  "Custom Chatbots",
  "API Integration",
  "Web Hosting and Domain Management",
  "Testing and Quality Assurance",
];

const CustomWebDevelopment = () => {
  return (
    <section className="custom-web-section">
      <div className="custom-web-container">
        
        {/* Left Side Image */}
        <div className="custom-web-image">
          <img 
            src="/hand-drawn-flat-design-api-illus.webp" 
            alt="Web development illustration" 
          />
        </div>

        {/* Right Side Text and Services */}
        <div className="custom-web-content">
          <h2>What Does Our Custom Web Development Company Offer?</h2>
          <p>
            Our custom web development company offers impressive services that meet your unique
            requirements. With the latest technology and solutions, give life to your ideas and
            businesses. We provide:
          </p>

          <div className="custom-web-services">
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

export default CustomWebDevelopment;

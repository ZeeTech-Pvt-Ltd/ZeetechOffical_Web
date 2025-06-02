import React from 'react';
import './DmarketingBusiness.css';

const services = [
  "Build a strong brand",
  "Reach more customers",
  "Get more quality leads",
  "Boost sales affordably",
];

const DmarketingBusiness = () => {
  return (
    <section className="dm-business-section">
      <div className="dm-business-container">
        
        {/* Left Side Image */}
        <div className="dm-business-image">
          <img 
            src="/facebook-influencer-background-w.webp" 
            alt="Digital Marketing" 
          />
        </div>

        {/* Right Side Text and Services */}
        <div className="dm-business-content">
          <h2>How We Drive Business Success</h2>
          <p>
          Our digital marketing specialists make smart strategies that help enhance your brand’s visibility. We help you with building a strong identity for your brand to engage more audience. We offer cost-effective solutions to help you generate leads and increase sales. Now, you don’t need to struggle with multiple agencies. Invest in the best digital marketing agency to help your business:
          </p>

          <div className="dm-business-services">
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

export default DmarketingBusiness;

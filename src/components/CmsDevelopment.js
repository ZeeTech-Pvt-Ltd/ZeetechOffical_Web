import React from 'react';
import './CmsDevelopment.css';



const CmsDevelopment = () => {
  return (
    <section className="custom-cms-section">
      <div className="custom-cms-container">
        {/* Right Side Text and Services */}
        <div className="custom-web-content">
          <h2>More About Our Web Development Services
          </h2>
          <p>
          Get complete redesigns and integrations along with the ideal approaches according to business needs. Customize personal, blogs, and e-commerce websites. Improve efficiency with landing pages and branding content. Also, you can attain responsive web design for CRM. Our low-code development and API management services are outstanding. Book full-stack website designs to boost your business now!<br></br>
          We also provide platform upgrades to increase efficiency and performance. Let us help you chase your goals by converting your dreams into reality! Provide us with details, and we will build your website.
          </p>
        </div>

        {/* Left Side Image */}
        <div className="custom-web-image">
          <img 
            src="/cms-concept-flat-design-illustra-removebg-preview.png" 
            alt="CMS development " 
          />
        </div>

        
        
      </div>
    </section>
  );
};

export default CmsDevelopment;

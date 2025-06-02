import React from 'react';
import './EcommerceOnline.css';

const services = [
  "Enhanced Organic Traffic",
  "Higher Sales & Conversions",
  "Higher Visibility & Authority",
  "Better Product Visibility",
];

const EcommerceOnline = () => {
  return (
    <section className="seo-online-section">
      <div className="seo-online-container">
        
        {/* Left Side Image */}
        <div className="seo-online-image">
          <img 
            src="seo-design_24877-35745-removebg.webp" 
            alt="Ecommerce SEO" 
          />
        </div>

        {/* Right Side Text and Services */}
        <div className="seo-online-content">
          <h2>What Ecommerce SEO Services Do For Your Online Store</h2>
          <p>
          Acquiring professional Ecommerce SEO service improves your store’s usability, brings more customers, and grows your market reach. It helps your site load faster, making navigation smoother and helping customers shop and complete their purchases with ease. It also makes your eCommerce site rank at the top against your competitors. This helps attract customers who might have gone to other websites instead. Our ecommerce SEO company helps your online store to get: 
          </p>

          <div className="seo-online-services">
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

export default EcommerceOnline;

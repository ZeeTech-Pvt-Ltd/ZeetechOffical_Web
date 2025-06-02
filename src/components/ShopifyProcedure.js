import React from 'react';
import './ShopifyProcedure.css';

const ShopifyProcedure = () => {
  return (
    <section className="Shopify-Procedure-section">
      <div className="shopify-procedure-container">
        
        {/* Left Side Image */}
        <div className="shopify-procedure-image">
          <img 
            src="/shopping-online-concept-beauty-w.webp" 
            alt="API Integration" 
          />
        </div>

        {/* Right Side Text and Services */}
        <div className="shopify-procedure-content">
          <h2>How are We A Top API Integration Company?</h2>
          <p>
          Our API integration services reduce costs as well as generate more useful data. We integrate apps or platforms with other services to ensure that businesses operate well. This improves your workflow and better meets the needs of your customers. We ensure improved performance, scalability, and security. This enables your business to stay ahead in the digital landscape.
          </p>         
        </div>
        
      </div>
    </section>
  );
};

export default ShopifyProcedure;

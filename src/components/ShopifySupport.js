import React from 'react';
import './ShopifySupport.css';

const ShopifySupport = () => {
  return (
    <section className="Shopify-support-section">
      <div className="shopify-support-container">
        
        {/* Left Side Image */}
        <div className="shopify-support-content">
          <h2>Do We Offer Support After Development?</h2>
          <p>
          We have experienced developers who provide support and maintenance after launching your online store. It ensures that your store stays adaptive to changing customer requirements. We also work on your website speed along with the SEO ranking. This makes your site visible to users around the world. The custom features we create don’t compromise performance. This results in a fast, user-friendly, and SEO-based Shopify store.
          </p>         
        </div>
        
     

        {/* Right Side Text and Services */}
        <div className="shopify-support-image">
          <img 
            src="/mobile-shopping-app-easy-online-removebg-preview.webp" 
            alt="Shopify Development" 
          />
        </div>
         </div>
    </section>
  );
};

export default ShopifySupport;

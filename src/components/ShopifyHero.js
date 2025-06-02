import React from 'react';
import './ShopifyHero.css';


const ShopifyHero = () => {
  return (
    <section className="shopify-hero-section">
      <div className="shopify-hero-container">
        {/* Left: Text Content */}
        <div className="shopify-hero-content">
          <h2>
          Scale Up Your Brand Identity With Our 
          <span> Shopify Development Services!</span>
          </h2>
          <p>
          We ensure the quick and stable growth of your business through our Shopify development services. We focus more on business goals while developing innovative solutions. Get a unique and professional online store according to your brand identity.
          </p>
          
        </div>

        {/* Right: Illustration */}
        <div className="shopify-hero-image">
          <img src="/online-shopping-cart-illustratio-removebg-preview.webp" alt="Shopify Development" />
        </div>
      </div>
    </section>
  );
};

export default ShopifyHero;

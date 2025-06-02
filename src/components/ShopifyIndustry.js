import React from 'react';
import './ShopifyIndustry.css';

const industries = [
  {
    title: "E-Commerce and Retail",
    description: "Get online stores with custom Shopify solutions to boost sales and user experience.",
    icon: "/health.webp",
  },
  {
    title: "Healthcare",
    description: "We develop platforms that provide secure healthcare products and services.",
    icon: "/online-store.webp",
  },
  {
    title: "E-Learning",
    description: "We create interactive and user-friendly websites for digital courses and educational products.",
    icon: "/integration.png",
  },
  {
    title: "Travel",
    description: "We can create user-friendly websites for travel and ticket booking services.",
    icon: "/configuration.png",
  },
  {
    title: "Real Estate",
    description: "We develop engaging websites for property listings and services through Shopify services.",
    icon: "/legal-service.webp",
  },
  {
    title: "Logistics and Supply Chain",
    description: "We can establish secure websites for supply chain services and logistics.",
    icon: "/residential.webp",
  },
];

const ShopifyIndustry= () => {
  return (
    <div className='boxed-container d-flex justify-content-between align-items-center py-2'>
      <section className="shopify-industries-section ">
        <div className='shopify-content-head'>
            <h2>Our Shopify Development Agency Serves Various Industries</h2>
        </div>
      <div className="shopify-industries-grid">
        {industries.map((item, index) => (
          <div key={index} className="shopify-industry-card">
            <img src={item.icon} alt={item.title} className="shopify-industry-icon" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default ShopifyIndustry;

import React from 'react';
import './ApiIndustry.css';

const industries = [
  {
    title: "Healthcare API Integration",
    description: "We connect health records, telemedicine platforms, and patient management systems.",
    icon: "/health.webp",
  },
  {
    title: "E-Commerce API Integration",
    description: "We integrate payment gateways, inventory management, and order processing.",
    icon: "/online-store.webp",
  },
  {
    title: "CRM API Integration",
    description: "We sync data across platforms to enhance customer relationship management and sales.",
    icon: "/integration.png",
  },
  {
    title: "ERP API Integration",
    description: "We connect processes like finance, inventory, and human resources for efficient operations.",
    icon: "/configuration.png",
  },
  {
    title: "Finance API Integration",
    description: "We facilitate secure transactions and data collection to enhance financial management.",
    icon: "/legal-service.webp",
  },
  {
    title: "Travel API Integration",
    description: "We integrate booking systems, flight data, and customer management for a better experience..",
    icon: "/residential.webp",
  },
];

const AppIndustry = () => {
  return (
    <div className='boxed-container d-flex justify-content-between align-items-center py-2'>
      <section className="api-industries-section ">
      <div className="api-industries-grid">
        {industries.map((item, index) => (
          <div key={index} className="api-industry-card">
            <img src={item.icon} alt={item.title} className="api-industry-icon" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>

    </div>
  );
};

export default AppIndustry;

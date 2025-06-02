import React from 'react';
import './IndustriesWeServe.css';

const industries = [
  {
    title: "E-Commerce",
    description: "Build feature-rich online stores with seamless shopping experiences and secure payment systems.",
    icon: "/online-store.webp",
  },
  {
    title: "Healthcare",
    description: "Develop HIPAA-compliant, user-friendly websites for clinics, hospitals, and health service providers.",
    icon: "/health.webp",
  },
  {
    title: "Finance & Banking",
    description: "Create secure and professional websites that enhance credibility and customer trust.",
    icon: "/budget (1).webp",
  },
  {
    title: "Education",
    description: "Design interactive websites for schools, universities, and e-learning platforms to improve accessibility and engagement.",
    icon: "/education (1).webp",
  },
  {
    title: "Legal Services",
    description: "Develop authoritative websites that highlight expertise and attract potential clients.",
    icon: "/legal-service.webp",
  },
  {
    title: "Real Estate",
    description: "Showcase listings and streamline inquiries with dynamic property websites and search features.",
    icon: "/residential.webp",
  },
];

const IndustriesWeServe = () => {
  return (
    <div className='boxed-container d-flex justify-content-between align-items-center py-2'>
      <section className="industries-section ">
      <div className="industries-grid">
        {industries.map((item, index) => (
          <div key={index} className="industry-card">
            <img src={item.icon} alt={item.title} className="industry-icon" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>

    </div>
  );
};

export default IndustriesWeServe;

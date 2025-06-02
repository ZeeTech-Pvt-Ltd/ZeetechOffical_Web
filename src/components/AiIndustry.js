import React from 'react';
import './AiIndustry.css';

const industries = [
  {
    title: "FinTech",
    description: "Generating financial documents, crafting reports, and detecting unusual activities.",
    icon: "/fintech.png",
  },
  {
    title: "E-Commerce and Retail",
    description: "AI-driven suggestions based on search history, chatbots, and inventory management.",
    icon: "/online-store.webp",
  },
  {
    title: "Travel and Hospitality",
    description: "Personalized recommendations, automated booking systems, and virtual support.",
    icon: "/pin.png",
  },
  {
    title: "Manufacturing",
    description: "Process automation, record keeping, and AI-based visual inspection of machines.",
    icon: "/configuration.png",
  },
  {
    title: "Data Analysis",
    description: "Automated analysis of a large amount of data to reduce time and make predictions.",
    icon: "/legal-service.webp",
  },
  {
    title: "Logistics and Supply Chain",
    description: "Automating inventory tracking and management, along with failure detection in advance.",
    icon: "/supply-chain-management .png",
  },
  {
    title: "Marketing and Advertising",
    description: "Auto-generating media posts, product descriptions, and analyzing customer data.",
    icon: "/social-media.png",
  },
  {
    title: "Healthcare",
    description: "Patient’s virtual health assistance for appointment scheduling and health monitoring. ",
    icon: "/health.webp",
  },
  {
    title: "Automotive and Transportation",
    description: "AI-driven chatbots for virtual assistance, along with maintenance support and scheduling.",
    icon: "/autonomous-car.png",
  },
];

const AiIndustry = () => {
  return (
    <div className='boxed-container d-flex justify-content-between align-items-center py-2'>
      <section className="ai-industries-section ">
        <div className='ai-industry-head'>
            <h2>We Serve A Diverse Range of Industries!</h2>
            <p>The custom AI Integration solutions improve operations and processes of various industries.</p>
        </div>
      <div className="ai-industries-grid">
        {industries.map((item, index) => (
          <div key={index} className="ai-industry-card">
            <img src={item.icon} alt={item.title} className="ai-industry-icon" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>

    </div>
  );
};

export default AiIndustry;

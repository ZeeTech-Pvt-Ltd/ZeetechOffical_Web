import React, { useState } from 'react';
import './ServicesArchive.css';

const services = [
  {
    title: 'WEB DEVELOPMENT',
    description: 'High-performance web apps with flexible back-end systems, responsive design, and tailored solutions.',
    staticIcon: '/software.png',
    animatedIcon: '/software.gif',
  },
  {
    title: 'MOBILE APP DEVELOPMENT',
    description: 'High-speed, responsive mobile apps customized to meet your users’ needs and support your growth.',
    staticIcon: '/idea.png',
    animatedIcon: '/idea.gif',
  },
  {
    title: 'Search Engine Optimization',
    description: 'Get higher SERP rankings and expand your online business through expert SEO strategies.',
    staticIcon: '/digital-transformation.png',
    animatedIcon: '/digital-transformation.gif',
  },
  {
    title: 'DIGITAL MARKETING',
    description: 'Reach more people with ads, social media, and turn visitors into loyal customers.',
    staticIcon: '/promotion.png',
    animatedIcon: '/promotion.gif',
  },
  {
    title: 'SHOPIFY DEVELOPMENT',
    description: 'Clean, easy-to-use Shopify stores with smart features to help your business grow faster.',
    staticIcon: '/online-supermarket.png',
    animatedIcon: '/online-supermarket.gif',
  },
  {
    title: 'APIs INTEGRATION',
    description: 'We help your software function better by seamlessly connecting it to third-party websites for easy data transfer.',
    staticIcon: '/api.png',
    animatedIcon: '/api.gif',
  },
  {
    title: 'AI INTEGRATION',
    description: 'Our AI integration service strengthens your software with brilliant automation to save you time and effort.',
    staticIcon: '/artificial-intelligence.png',
    animatedIcon: '/artificial-intelligence.gif',
  },
  {
    title: 'DEVOPS SERVICES',
    description: 'From deployment to CI/CD automation, our DevOps service keeps your business running smoothly.',
    staticIcon: '/programmer.png',
    animatedIcon: '/programmer.gif',
  },
  {
    title: 'Video Editing',
    description: 'Personalized desktop applications from ideation to end product.',
    staticIcon: '/video-editing.png',
    animatedIcon: '/video-editing.gif',
  },
  {
    title: 'Graphic Designing',
    description: 'Crafting visually compelling designs that elevate your brand identity across all platforms.',
    staticIcon: '/design.png',
    animatedIcon: '/design.gif',
  },
  {
    title: 'Chatbot Development',
    description: 'Build smart chatbots that automate conversations and enhance customer engagement 24/7.',
    staticIcon: '/chat-bot.png',
    animatedIcon: '/chat-bot.gif',
  },
  {
    title: 'CMS Development',
    description: 'Custom CMS solutions that give you full control over your website content with ease.',
    staticIcon: '/cms-system.png',
    animatedIcon: '/cms-system.gif',
  },
];

const ServicesArchive = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="services-archive-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">We can help <span>you with</span> </h2>
        <div className="row">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4 mb-4"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="archeive-service-box p-4 text-center">
                <div className="service-icon mb-3">
                  <img
                    src={hoveredIndex === index ? service.animatedIcon : service.staticIcon}
                    alt={service.title}
                    style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  />
                </div>
                <h5 className="service-title mb-2">{service.title}</h5>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesArchive;

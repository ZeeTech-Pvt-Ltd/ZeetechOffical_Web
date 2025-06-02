import React from 'react';
import './WebAdvantages.css';

const services = [
  {
    title: 'Responsive Web Design',
    description: 'Our front-end web development services and responsive website designs ensure smooth operations. Our web development agency guarantees that your website has all the functions for every user who visits it.',
  },
  {
    title: 'Custom Web Application Development',
    description: 'We provide the best web apps development services for your unique ideas to align with your goals. Our web applications are secure, scalable, and work perfectly across all devices. We will deliver high-performing, user-friendly websites.',
  },
  {
    title: 'Custom Web Portal Development',
    description: 'Our web development solutions offer custom web portal development for your company. These solutions will help you manage operations and workflows flawlessly. We will make sure that you get a reliable space for your employees, customers, and partners.',
  },
  {
    title: 'Content Management System Development',
    description: 'Our web application development services also include content management system development. Our team will create a CMS that is search-friendly. It will be designed in a way that improves the marketability of your website.',
  },
  {
    title: 'Custom E-Commerce Development',
    description: 'We have the best web development agency that creates e-commerce websites according to the targeted audience. Our experts plan the perfect customer experience to build effective custom e-commerce solutions. Our e-commerce developers will help you grow your brand.',
  },
  {
    title: 'API Development and Integration',
    description: 'We provide API development services to meet your business requirements. Our team designs, builds, and deploys custom APIs. It integrates APIs with third-party databases and cloud solutions. These make sure apps and platforms work together with streamlined processes.',
  },
  {
    title: 'Low-Code Development',
    description: 'Our responsive web development company also offers low-code website development. We build powerful web applications quickly with minimal hand-coding. We use visual tools and pre-built components to make websites easier and faster to launch.',
  },
  {
    title: 'Attractive Designs and Interfaces',
    description: 'Our professional web development services guarantee a user-friendly design with strong security. This gives your business the ability to grow. We offer professional visuals that match your brand. Get ongoing support and updates to keep everything smooth.',
  },
  {
    title: 'AI Integration',
    description: 'We offer the best web development services that also include the integration of artificial intelligence. This ensures that the processes are automated with increased efficiency. We develop chatbots as well as automate features of your website for the best user experience.',
  },
];

const WebAdvantages = () => {
  return (
    <section className="web-advantages">
      <div className="container">
        <h2 className="title">Take Advantage of the Best Web Development Company</h2>
        <p className="subtitle">
          We are a web development service provider that is always improving our web development
          processes. We ensure that we meet high-quality standards and use the latest technology.
          Our team keeps up with new trends so your project stays modern and effective. You will
          get a responsive web design with custom features according to your needs.
        </p>

        <div className="card-grid">
          {services.map((item, idx) => (
            <div className="card" key={idx}>
              <div className="card-icon">📘</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebAdvantages;

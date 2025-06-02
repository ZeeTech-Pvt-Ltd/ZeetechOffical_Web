import React, { useState } from 'react';
import './AboutMission.css';

const tabs = [
  {
    title: 'Our Mission',
    icon: '🎯',
    content: (
      <>
        <h3>Fueling Digital Success Through Innovation & Integrity</h3>
        <p>
          Our mission is to help businesses thrive in the digital age by creating cutting-edge solutions that drive growth, efficiency, and impact. We believe in honest work, innovative thinking, and building long-term partnerships that go beyond the screen.
        </p>
        <ul>
          <li><strong>Growth-Focused Solutions:</strong> Every line of code and design choice is made to help your business scale with confidence.</li>
          <li><strong>Driven by Innovation:</strong> We stay ahead of trends and technology to bring you future-ready digital products.</li>
          <li><strong>Transparency & Integrity:</strong> Honest communication and ethical practices are at the core of everything we do.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Our Vision',
    icon: '👥',
    content: (
      <>
        <h3>Empowering Businesses Through Digital Excellence</h3>
        <p>
          Our vision is to be a trusted partner for businesses by delivering innovative, scalable, and user-centric solutions. We aim to transform ideas into digital experiences that leave a lasting impact.
        </p>
      </>
    ),
  },
  {
    title: 'Core Values',
    icon: '📜',
    content: (
      <>
        <h3>Guiding Principles That Define Us</h3>
        <ul className=' guiding d-flex flex-wrap '>
          <li>Integrity & Honesty</li>
          <li>Client-Centered Approach</li>
          <li>Continuous Innovation</li>
          <li>Excellence in Execution</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Industries we serve',
    icon: '⚙️',
    content: (
      <>
        <h3>Industries We Serve</h3>
        <p>
          From e-commerce to education, healthcare to finance, we bring tailored solutions across industries.
        </p>
      </>
    ),
  },
  {
    title: 'Let’s Build with us',
    icon: '📩',
    content: (
      <>
        <h3>Let’s Build With Us</h3>
        <p>
          Ready to create something amazing? Join hands with us and bring your vision to life.
        </p>
      </>
    ),
  },
];

const AboutMission = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="about-mission-section container py-5">
      <div className="row align-items-center">
        <div className="col-12">
          
        </div>
        <div className="col-md-5 mb-4 mb-md-0 tabs-header">
        <h2 className="main-heading mb-4">Our Mission, Mindset & Momentum</h2>
          <div className="tab-buttons">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`tab-btn ${index === activeTab ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <span className="tab-icon">{tab.icon}</span>
                {tab.title}
              </button>
            ))}
          </div>
        </div>
        <div className="col-md-7">
          <div className="tab-content-box">
            {tabs[activeTab].content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;

import React from 'react';
import './ContactHero.css';

const ContactHero = () => {
  return (
    <div className='main-contact-hero d-flex flex-wrap p-5 justify-content-center'>
      <div className='contact-left-content'>
        <div className='contact-inner-content'>
          <h2>Contact Us</h2>
          <p>
          We’re excited to connect with you! Whether you’re interested in discussing a project, have a query about our services, or just want to say hello, don’t hesitate to reach out. Use the information below to get in touch:
          </p>
        </div>
      </div>
      <div className='contact-right-content'>
        <img 
          src="/accidental_manager-removebg-preview-e1744806649286.webp" 
          alt="Contact Us" 
        />
      </div>
    </div>

  );
};

export default ContactHero;

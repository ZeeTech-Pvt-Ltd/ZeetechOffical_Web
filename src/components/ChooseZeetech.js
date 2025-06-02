import React from 'react';
import { Link } from 'react-router-dom';
import './ChooseZeetech.css';

const ChooseZeetech = () => {
  return (
    <section className="choose-zeetech">
      <div className="choose-zeetech-container">
        
        {/* Left Side Image */}
        <div className="choose-zeetech-image">
          <img 
            src="\web-help-support-template-with-q-removebg-preview.png" 
            alt="Why Choose Zeetech" 
          />
        </div>

        {/* Right Side Text and Services */}
        <div className="choose-zeetech-content">
          <h2>Why Choose Zee Tech</h2>
          <p>
          At Zee Tech, we don’t just deliver projects — we build partnerships. Our team of experts combines innovation with deep industry knowledge to craft custom digital solutions that align perfectly with your business goals. With a commitment to quality, transparency, and long-term success, we turn your ideas into impactful results. Whether you're launching a new product or scaling your digital presence, Zee Tech is the reliable tech partner you can count on.
          </p>
         
         <Link to="/contact"> <button className='contact-btn'>Contact Us</button></Link>
          
          

        </div>
        
      </div>
    </section>
  );
};

export default ChooseZeetech;

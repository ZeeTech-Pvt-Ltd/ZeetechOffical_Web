import React from 'react';
import './WebDevelopmentServices.css';


const WebDevelopmentServices = () => {
  return (
    <section id='web-hero' className="webdev-section ">
      <div className="webdev-container">
        {/* Left: Text Content */}
        <div className="webdev-content">
          <h2>
            Give A Vision to Your Ideas <br />
            Through Our <span>Web Development Services</span>
          </h2>
          <p>
            Get unique and creative web application development solutions for your ideas. Focus on
            expanding your business and attracting the targetted audience. We deliver exceptional,
            custom web development services to help your business grow. Let us develop innovative
            web solutions to drive growth for your business. Try our services now!
          </p>
          
        </div>

        {/* Right: Illustration */}
        <div className="webdev-image">
          <img src="/Give_A_Vision_to_Your_Ideas_Thro.webp" alt="Developer Illustration" />
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentServices;

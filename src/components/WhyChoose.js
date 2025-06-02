import React from "react";
import './WhyChoose.css';

const WhyChoose = () => {
  return (
    <div className="choose-main">
      <div className="choose-video-section">
        <video 
          src="Infograpgic_03_2_4a215787c0.webm" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="choose-video"
        ></video>
      </div>
      <div className="choose-content-section">
        <h2>Why Choose Us</h2>
        <p>
          At ZeeTech, we don’t just deliver projects — we build lasting relationships grounded in trust, transparency, and shared success. We believe that every brand has a unique story, and our job is to amplify it through thoughtful design, intelligent development, and seamless execution. We’re not here for quick fixes or cookie-cutter solutions — we’re here to understand your business inside-out, and help you thrive in the digital world with purpose-driven innovation.
        </p>
        <p>
          From the very first consultation to the final launch (and beyond), we work as an extension of your team — listening closely, advising honestly, and delivering consistently. Our mission is to empower your business with powerful digital experiences that not only meet today’s needs, but evolve to meet the challenges of tomorrow.
        </p>
      </div>
    </div>
  );
};

export default WhyChoose;

import React, { useEffect } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    const options = {
      strings: ["Website Design", "Web Development", "SEO Services", "Mobile Apps", "Digital Marketing"],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1500,
      loop: true,
    };

    const typed = new Typed("#typed", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
  <div className="container-fluid hero-sec">
    <div className="overlay"></div>

    <div className="hero-inner-wrapper">
      {/* Left Content */}
      <div className="hero-content-sec">
        <h1 className="text-center fw-bold hero-heading">
          Empowering Your Vision with <br />
          <span id="typed" style={{ color: "#F87302" }}></span>
        </h1>
        <p className="text-center text-light ">At ZeeTech, we blend technology and creativity to build powerful digital solutions that elevate your business. From cutting-edge web and app development to smart AI integrations and impactful marketing, we deliver innovation that drives growth. Let’s turn your vision into reality.</p>
        <div className="d-flex align-item-center justify-content-center">
        <Link to="/contact-us">
        <button className="hero-cont-btn">
          Get Started
        </button>
        </Link>
        
      </div>
      </div>
      

    </div>
  </div>
);
};

export default Hero;

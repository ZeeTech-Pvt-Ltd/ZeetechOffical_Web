import React from "react";
import { Link } from "react-router-dom";
import './StandardIndustry.css'; // Make sure the CSS file path is correct

const StandardIndustry = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="sticky-section">
            <h2 className="fw-bold text-primary main-heading text-start">We Excel Beyond Industry Standards</h2>
            <p className="sticky-section-text text-start">
              We use the latest technologies to craft innovative digital solutions and enhance the systems you already rely on. Our team is dedicated to delivering fast, reliable, and scalable services that not only strengthen your online presence but also drive real results. Whether you're starting from scratch or looking to improve your existing platform, we help you reach a broader audience and thrive in the competitive world of online business.
            </p>
            <div className="blue-box w-75">
              <h5 className="fw-bold power text-start">Power your digital-first vision.</h5>
              <p classname="text-start blue-box">
                Transform your business with powerful digital-first solutions designed to drive sustainable growth, boost efficiency, and ensure long-term success in today’s fast-paced, technology-driven world. Our innovative approach helps you stay ahead of the curve and fully leverage the potential of digital transformation.
              </p>
              <Link to="contact" className="d-flex justify-content-start"> 
              <button className="contact-tn">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Features Section */}
        <div className="col-lg-6 mt-4 mt-lg-0">
          {/* Feature List */}
          {[
            { icon: '⚡', title: 'Quick Development', desc: 'We make development faster with brilliant techniques and automation to deliver high-quality results.' },
            { icon: '🚀', title: 'Avant-garde Technology', desc: 'We use cutting-edge tech to grow your brand with automation and cloud tools.' },
            { icon: '💡', title: 'Enhanced Performance', desc: 'We build smooth and efficient systems that save time and avoid problems.' },
            { icon: '🔧', title: 'Flexible Solutions', desc: 'Designed to adapt to your growing business, always ready for what\'s next.' },
            { icon: '🏗️', title: 'Top-Quality Standards', desc: 'Secure, dependable solutions that grow with your business.' },
            { icon: '🔄', title: 'Flexible Way of Working', desc: 'Fast updates, steady improvements, and adaptability built-in.' },
            { icon: '🔗', title: 'Smooth Integration', desc: 'Easily connects with systems you already use, enabling smooth operations.' },
          ].map((feature, index) => (
            <div key={index} className={`feature-box d-flex align-items-start ${index === 6 ? 'border-0' : ''}`}>
              <div className="me-3 feature-icon">{feature.icon}</div>
              <div>
                <h6 style={{ fontSize: '25px' }} className="mb-1 fw-bold">{feature.title}</h6>
                <p style={{ color: 'black' }} className="text-muted mb-0">{feature.desc}</p>
              </div>
              <div className="ms-auto feature-number">{String(index + 1).padStart(2, '0')}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StandardIndustry;

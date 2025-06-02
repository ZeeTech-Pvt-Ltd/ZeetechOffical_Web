import React from "react";
import './YouKnow.css'; // Make sure the CSS file path is correct

const YouKnow = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-4 mb-4">
        <div className="col-lg-4">
          <div className="you-know-box d-flex gap-0">
            <div className="orange text-start">YOU</div>
            <div className="white-outline text-end">KNOW?</div>
          </div>
        </div>
        <div className="col-lg-8 know-para">
          <p className="fs-5 text-start ">
            At ZeeTech, we bring innovation to the world stage, delivering cutting-edge digital solutions that transcend boundaries.
            From web and app development to SEO and design, our expertise empowers businesses globally to thrive in the digital age.
            Join hands with us to turn your vision into a universal success story!
          </p>
        </div>
      </div>

      <div className="info-box">
        <div className="row text-center text-lg-start">
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 info-item">
            <div className="info-title">Understanding<br />Your Vision</div>
            <div className="info-text">
              We ask the right questions — and truly listen — to deliver a solution that fits you, not just the market.
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 info-item">
            <div className="info-title">Planning with<br />Precision</div>
            <div className="info-text">
              Project roadmap with timelines, tools, and milestones.<br />
              Transparency is our promise — no confusion.
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 info-item">
            <div className="info-title">Building with<br />Excellence</div>
            <div className="info-text">
              Expert developers, best practices, latest technologies.<br />
              Every feature is tested rigorously — so when you launch, you launch with confidence.
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-0 info-item">
            <div className="info-title">Long-Term<br />Partnership</div>
            <div className="info-text">
              We don’t disappear after launch. We provide long-term support, updates, and optimization — because your growth is our priority.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouKnow;

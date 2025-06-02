import React from "react";
import { Link } from 'react-router-dom'
import './Services.css'; // Make sure the CSS file path is correct

const Services = () => {
  return (
    <div className="container py-5">
      <h2 style={{ fontSize: "3rem" }} className="text-center fw-bold mb-3">
        <span style={{ color: "#F87302" }}>Services</span> We Provide
      </h2>
      <p style={{ color: "black" }} className="text-center mb-5">
        We offer a wide range of professional services tailored to meet your business needs. From cutting-edge web and app development to impactful graphic design, SEO, digital marketing, and seamless API integration, we deliver solutions that drive results.
      </p>

      <div className="row g-4">

            {/* Web Development */}
        <div className="col-md-6 col-lg-4">
          <div className="home-service-box ">
             <h5 className="fw-bold">WEB DEVELOPMENT</h5>
             <p>
              High-performance web apps with flexible back-end systems, responsive design, and tailored solutions.</p>
              <img className="tech-images" src="/Web dev.webp" alt="Tech Images"></img>
             <Link to="/web-development-services/">
              <button className="btn btn-primary btn-sm btn-learn">Learn More</button>
             </Link>
          </div>
        </div>
        {/* Mobile App Development */}
        <div className="col-md-6 col-lg-4">
          <div className="home-service-box ">
            <h5 className="fw-bold">MOBILE APP DEVELOPMENT</h5>
            <p>High-speed, responsive mobile apps customized to meet your users’ needs and support your growth.</p>
            <img className="tech-images" src="/Frame 1.webp" alt="Tech Images"></img>
            <Link to="/app-development-services">
             <button className="btn btn-primary btn-sm btn-learn">Learn More</button>
            </Link>
          </div>
        </div>

         {/* SEO */}
         <div className="col-md-6 col-lg-4">
          <div className="home-service-box ">
            <h5 className="fw-bold">SEARCH ENGINE OPTIMIZATION</h5>
            <p>Get higher SERP rankings and expand your online business through expert SEO strategies.</p>
            <img className="tech-images" src="/SEO.webp" alt="Tech Images"></img>
            <Link to="/seo-agency-and-consultancy">
             <button className="btn btn-primary btn-sm btn-learn">Learn More</button>
            </Link>
          </div>
        </div>

         {/* Digital Marketing */}
         <div className="col-md-6 col-lg-4">
          <div className="home-service-box ">
            <h5 className="fw-bold">DIGITAL MARKETING</h5>
            <p>Reach more people with ads, social media, and turn visitors into loyal customers.</p>
            <img className="tech-images" src="/Ads.webp" alt="Tech Images"></img>
            <Link to="/digital-marketing-services">
             <button className="btn btn-primary btn-sm btn-learn">Learn More</button>
            </Link>
          </div>
        </div>

         {/* Shopify Development */}
         <div className="col-md-6 col-lg-4">
          <div className="home-service-box ">
            <h5 className="fw-bold">SHOPIFY DEVELOPMENT</h5>
            <p>Clean, easy-to-use Shopify stores with smart features to help your business grow faster.</p>
            <img className="tech-images" src="/Shopify.webp" alt="Tech Images"></img>
            <Link to="/shopify-development">
             <button className="btn btn-primary btn-sm btn-learn">Learn More</button>
            </Link>
          </div>
        </div>

        {/* APIs Integration */}
        <div className="col-md-6 col-lg-4">
          <div className="home-service-box ">
            <h5 className="fw-bold">APIs INTEGRATION</h5>
            <p>We help your software function better by seamlessly connecting it to third-party websites for easy data transfer.</p>
            <img className="tech-images" src="/Api Integration.webp" alt="Tech Images"></img>
            <Link to="/api-integration">
             <button className="btn btn-primary btn-sm btn-learn">Learn More</button>
            </Link>
          </div>
        </div>
        {/* AI Integration */}
        <div className="col-md-6 col-lg-4">
          <div className="home-service-box ">
            <h5 className="fw-bold">AI INTEGRATION</h5>
            <p>Our AI integration service strengthens your software with brilliant automation to save you time and effort...</p>
            <img className="tech-images" src="/Ai integration1.webp" alt="Tech Images"></img>
            <Link to="/ai-integration">
             <button className="btn btn-primary btn-sm btn-learn">Learn More</button>
            </Link>
          </div>
        </div> 
        {/* DevOps Services */}
        <div className="col-md-6 col-lg-4">
          <div className="home-service-box">
            <h5 className="fw-bold">DEVOPS SERVICES</h5>
            <p>From deployment to CI/CD automation, our DevOps service keeps your business running smoothly.</p>
            <img className="tech-images" src="/Devops.webp" alt="Tech Images"></img>
            <Link to="/devops">
             <button className="btn btn-primary btn-sm btn-learn">Learn More</button>
            </Link>
          </div>
        </div>

        {/* View More Services Box */}
        <div  className="col-md-6 col-lg-4">
          <div className="highlight-box">
            <Link to="/our-services">
            <a href="/our-services" className="fw-bold">View More Services → </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

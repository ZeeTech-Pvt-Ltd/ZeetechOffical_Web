import React from 'react';
import './DevopsTrust.css';

const services = [
  "Faster Software Delivery",
  "Streamlined IT Operations",
  "Scalable and Flexible Systems",
  "Expert Automation and Cloud Support",
  
];

const DevopsTrust = () => {
  return (
    <section className="devops-trust-section">
      <div className="devops-trust-container">
        
        {/* Left Side Image */}
        <div className="devops-trust-content">
          <h2>Why Should You Trust Us</h2>
          <p>
            DevOps services are important for businesses that want quick and trustworthy software development to provide smooth navigation. Our services connect your development and operations teams to accelerate workflows. Our experts effectively automate, test, and manage the cloud to reduce errors and delays. They help launch new features faster and simplify it tasks. With our support, your software becomes more stable and your team works more efficiently. You can trust us as we deliver the best tools and practices in the industry.<br></br>
            Here is how our DevOps services help your business succeed:

          </p>

          <div className="devops-trust-services">
            {services.map((service, index) => (
              <div className="service-box" key={index}>
                <span className="icon">👍</span> {service}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Text and Services */}
        <div className="devops-trust-image">
          <img 
            src="/devops-isometric-illustration-wi-removebg-preview.webp" 
            alt="Web development illustration" 
          />
        </div>
        
        
      </div>
    </section>
  );
};

export default DevopsTrust;

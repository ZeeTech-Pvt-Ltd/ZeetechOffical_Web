
import React, { useState } from 'react';
import './Industry.css';

const industries = [
  {
    title: "Travel & Hospitality",
    description: "We develop intelligent travel technology solutions designed to enhance the user experience and streamline operations. Our offerings include hotel booking systems, travel planning platforms, tour guide software, trip planner systems, and custom-built travel agent apps—empowering businesses to deliver seamless and personalized travel services.",
    bgImage: "travel.png"
  },
  {
    title: "Tech Startups",
    description: "We help businesses bring their digital ideas to life by building powerful and scalable software solutions. Whether you're launching MVPs to validate concepts, developing full-fledged SaaS platforms, creating intuitive mobile apps, or building robust admin dashboards and employee portals, we deliver tailored solutions that drive growth and efficiency.",
    bgImage: "teach.png"
  },
  {
    title: "E-Commerce",
    description: "We specialize in crafting comprehensive e-commerce solutions tailored to your business needs. Our expertise spans across Shopify stores, scalable online marketplaces, custom product platforms, and digital goods e-commerce. We also integrate advanced ERP systems to streamline operations, enhance efficiency, and support long-term growth.",
    bgImage: "ecommerce.png"
  },
  {
    title: "Automotive",
    description: "We provide end-to-end digital solutions for the automotive industry, helping businesses enhance customer experience and streamline operations. Our services include dealership websites, vehicle tracking apps, service booking portals, automotive repair software, and record-keeping systems—built to support efficiency, transparency, and growth in the automotive sector..",
    bgImage: "automative.png"
  },
  {
    title: "Real Estate",
    description: "We deliver cutting-edge digital solutions tailored for the real estate industry. Our offerings include real estate marketplaces, rental management apps, property booking solutions, brokerage applications, and lead management systems—designed to simplify property transactions, improve user engagement, and boost operational efficiency.",
    bgImage: "Real-estate.png"
  },
  {
    title: "Nonprofits and NGOs",
    description: "We empower nonprofit organizations with impactful digital solutions that drive engagement and social change. Our services include donation portals, volunteer management systems, survey apps, NGO websites, and awareness campaign platforms—built to amplify your mission, streamline operations, and connect with communities more effectively.",
    bgImage: "nonprofit.png"
  },
  
];
const Industry = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    
    <div className='p-3 industry-serve-sec'>
      <h2 className='industry-heading'>INDUSTRIES WE SERVE</h2>
      <p className='home-industry-para'>We serve a wide range of industries, delivering tailored solutions that meet the unique needs of each sector. From technology to healthcare, retail to finance, we provide innovative digital strategies that drive success and enhance operational efficiency.
      </p>
      
      <div className="industry-wrapper boxed-container d-flex align-items-center ">
        {industries.map((industry, index) => (
          <div
            className={`industry-slide ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            key={index}
            style={{
              backgroundImage: `url(${industry.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <h3>{industry.title}</h3>
            {activeIndex === index && <p>{industry.description}</p>}
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Industry;




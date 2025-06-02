import React from 'react';
import './ApiServices.css';

const services = [
  {
    title: 'Requirements Gathering',
    description: 'We collaborate with our clients to collect detailed requirements on how they want to get their APIs developed. ',
  },
  {
    title: 'Custom API Development',
    description: 'We are the best Android app development company. We develop impressive, scalable, native Android applications. These strong, user-friendly apps deliver ideal user experiences. Our team guarantees that these apps have various functionalities and that they stand out in competitive markets.',
  },
  {
    title: 'Cross-Platform App Development',
    description: 'We provide these services to meet your requirements. Our team designs, builds, and deploys custom APIs.',
  },
  {
    title: 'API Integration',
    description: 'We integrate APIs with third-party databases and cloud solutions by connecting systems to extend functionality. ',
  },
  {
    title: 'API Testing',
    description: 'We check the APIs thoroughly. For this, our team members find and resolve any issues that occur.',
  },
];

const ApiServices = () => {
  return (
    <section className="api-services">
      <div className="container">
        <h2 className="title">Get the Best API Services</h2>
        <p className="subtitle">
        If you want to enhance the functions of your business, we are here to provide you with top API integration solutions. Our experts make sure that our APIs deliver the flexibility and performance you need.
        </p>

        <div className="card-grid">
          {services.map((item, idx) => (
            <div className="card" key={idx}>
              <div className="card-icon">📘</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApiServices;

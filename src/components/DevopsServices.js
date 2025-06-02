import React from 'react';
import './DevopsServices.css';

const services = [
  {
    title: 'Cloud Infrastructure Management',
    description: 'Our DevOps company helps businesses easily manage and scale their cloud infrastructure. This includes optimising storage, databases, container management, and networking. These steps help ensure smooth and reliable software deployment and operation. ',
  },
  {
    title: 'Cloud Services Integration',
    description: 'Our DevOps consulting services help integrate cloud solutions into your development process. This increases automation and speed. It also creates flexible and secure development and deployment environments.',
  },
  {
    title: 'Microservices Architecture',
    description: 'We enable businesses to adopt microservices-based architectures. Breaking applications into smaller services helps teams develop, test, and deploy faster. This approach also keeps them agile and scalable.',
  },
  {
    title: 'Serverless Computing Solutions',
    description: 'We skillfully support the use of serverless computing to simplify infrastructure tasks. This lets development teams build and update features. They don’t have to worry about server maintenance or capacity issues. ',
  },
  {
    title: 'Deployment Process Automation',
    description: 'We help organisations automate their deployment workflows with our advanced DevOps development services. This reduces human error, speeds up releases, and lowers risks from manual work. As a result, software delivery becomes more reliable.',
  },
  {
    title: 'Application Integration Services',
    description: 'Our DevOps services also cover the seamless integration of various business applications. We follow standard protocols and handle data securely. This allows for ongoing monitoring,  seamless updates, and system-wide compatibility without vendor lock-in.',
  },
];

const DevopsServices = () => {
  return (
    <section className="devops-services">
      <div className="container">
        <h2 className="title">We Offer the Finest DevOps Software Development Services</h2>
        <p className="subtitle">
        DevOps services include developing, testing, deploying, and operating software by connecting developers and maintenance teams. This enables better, faster, and more efficient software development with fewer errors. Our DevOps consulting services provide tailored solutions for your software development needs.
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

export default DevopsServices;

import React, { useState } from 'react';
import './AppFaq.css';

const faqs = [
  {
    question: 'What are DevOps development services?',
    answer: (
      <div>
        <p>These services are valuable for companies to build, test, and launch software faster and more safely. The following services are included in DevOps services</p>
        <ul>
          <li>Automating testing, building, and deploying code</li>
          <li>Setting up and managing cloud servers and storage</li>
          <li>Using continuous integration and deployment to release updates quickly</li>
          <li>Running automated tests to catch bugs early</li>
          <li>Monitoring software performance to fix issues faster</li>
        </ul>
      </div>
    )
  },
  {
    question: 'Why do businesses need DevOps development services?',
    answer: (
      <div>
        <p>Businesses need expert DevOps services to bring more efficiency to their systems. They need these services for</p>
        <ul>
          <li>More trustworthy software launch</li>
          <li>Automating software maintenance processes</li>
          <li>Fast and quick service delivery to their audience</li>
          <li>Increased rate of deployments</li>
          <li>Quick error fixes</li>
        </ul>
      </div>
    )
  },
  {
    question: 'What are the important aspects of DevOps development?',
    answer: (
      <div>
        <p>These are the important elements that DevOps services cover.</p>
        <ul>
          <li>Collaboration between teams</li>
          <li>Task automation</li>
          <li>Continuous integration & deployment</li>
          <li>Monitoring and feedback</li>
          <li>Scalability and flexibility</li>
          <li>Built-in security</li>
          <li>Cloud infrastructure management</li>
        </ul>
      </div>
    )
  },
  {
    question: 'Is DevOps a cloud service?',
    answer: (
      <div>
        <p>DevOps itself is not a cloud service. It just uses some cloud services to work effectively. It serves as a comprehensive tool that covers software development and IT operations. It automates and simplifies the software development and maintenance process.</p>
      </div>
    )
  },
  {
    question: 'What do Deveops Engineers do?',
    answer: (
      <div>
        <p>DevOps engineers set up a system that automates different software processes to make them swift and dependable. This covers automating tests, deploying code, managing cloud systems, and fixing problems. They work together with developers and IT teams to improve software quality and security. They attempt to make everything work smoothly and efficiently.</p>
      </div>
    )
  },
];

const DevopsFaq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section  className="faq-section container-fluid py-5 dev-faq">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-md-6 main-faq-content">
            <div className="faq-info-box p-4 rounded">
              <h4 className="fw-bold mb-3">Frequently Asked Questions</h4>
              <p>
              Got questions about DevOps Services? Our FAQ section covers everything from CI/CD pipelines and infrastructure automation to cloud integration, security, and ongoing monitoring. Learn how we streamline your development and operations to deliver faster, more reliable software tailored to your business goals!
              </p>
            </div>
          </div>

          <div className="col-md-6 faq-sec">
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                      onClick={() => toggleAccordion(index)}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}>
                    <div className="accordion-body">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevopsFaq;

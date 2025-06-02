import React, { useState } from 'react';
import './ApiFaq.css';

const faqs = [
  {
    question: 'Does your company provide reliable solutions?',
    answer: 'Yes, we offer advanced and reliable services and solutions for API integration. We keep collaborating with the customers to ensure they get what they want.'
  },
  {
    question: 'Which systems can you integrate?',
    answer: 'We can integrate various and diverse systems as per the customers’ requirements using APIs. For example, CRM systems, ERP software, e-commerce platforms, CMS, and accounting software. Others are marketing automation tools, healthcare software, Fintech systems, and travel/booking systems.'
  },
  {
    question: 'Are your services customized for different business requirements?',
    answer: 'We know that every business needs are unique. We make sure to develop APIs according to business requirements by collaborating closely with clients. We also comply with industry standards while following requirements.'
  },
  {
    question: 'What is the whole process of your API integration services?',
    answer: 'To design an API according to specific business requirements, we gather all the requirements and information from our clients. After this, we perform a complete analysis to plan and design the architecture of the API. Then we develop and test it to remove any flaws. After deployment, we offer support as well.'
  },
  {
    question: 'What are the costs of the API services you provide?',
    answer: 'The costs of the API services depend on the complexity and length of the requirements. For further information, you can communicate with our experts for further details.'
  },
];

const ApiFaq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section container-fluid py-5">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-md-5 main-faq-content">
            <div className="faq-info-box p-4 rounded">
              <h4 className="fw-bold mb-3">Frequently Asked Questions</h4>
              <p>
              Got questions about API Integration Our FAQ section covers everything from API development and integration to platform compatibility, security, and maintenance. Learn how we create high-performance Api Integration tailored to your business needs! </p>
            </div>
          </div>

          <div className="col-md-7 faq-sec">
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

export default ApiFaq;

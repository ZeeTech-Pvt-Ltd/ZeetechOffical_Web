import React, { useState } from 'react';
import './AiFaq.css';

const faqs = [
  {
    question: 'What types of businesses can benefit from your AI integration services?',
    answer: 'Our services are fit for corporations of different scopes and industries. We serve diverse industries like healthcare, e-commerce, finance, manufacturing, and any other sector. We customize AI solutions to enhance your operations, customer interactions, and decision-making processes.'
  },
  {
    question: 'How long will it take to incorporate AI into my existing system?',
    answer: 'The time for AI integration depends on the complexity of your business processes. Our process involves data preparation, model selection, integration, testing, and deployment. This can take a few weeks to a few months. Please contact our support team. They will analyze your requirements and let you know.'
  },
  {
    question: 'Do you provide continuous support after deployment?',
    answer: 'Yes, we offer ongoing maintenance after integrating AI into your systems. Our team ensures that solutions remain up-to-date and aligned with your business needs.'
  },
  {
    question: 'Do I need to hire different teams for different AI solutions?',
    answer: 'No, we have a team of experts that will handle the entire process. Share your requirements with us. We will incorporate every solution that best fits your requirements.'
  },
  {
    question: 'How much time do you take to provide these services?',
    answer: 'The time we take depends on how complex your requirements are. Simple AI integrations like chatbots will take a few weeks to complete. Custom AI solutions can take longer than this. Feel free to reach out and share your requirements.'
  },
];

const AiFaq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section container-fluid py-5">
      <div className="container">
         <h2 className="text-center fw-bold mb-4">Why Should You Choose Us?</h2>
        <p className="text-center mb-5">
          At Zeetech, we make integrating AI into your business simple and effective. Our expert team customizes AI solutions to fit your specific needs. This helps you automate tasks, make data-driven decisions, and improve customer interactions. We use the latest technology to ensure your business stays agile and efficient. We do this while providing ongoing support to keep everything running smoothly. Whether you're a startup or an established company, our services will grow with you. We will help you achieve lasting success!
        </p>
        <div className="row g-4 align-items-start">
          <div className="col-md-5 main-faq-content">
            <div className="faq-info-box p-4 rounded">
              <h4 className="fw-bold mb-3">Frequently Asked Questions</h4>
              <p>
              Got questions about AI Integration Our FAQ section covers everything from AI bot development and integration to platform compatibility, security, and maintenance. Learn how we create high-performance Ai Integration tailored to your business needs! </p>
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

export default AiFaq;

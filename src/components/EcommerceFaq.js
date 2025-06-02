import React, { useState } from 'react';
import './EcommerceFaq.css';

const faqs = [
  {
    question: 'What does Ecommerce SEO mean?',
    answer: 'E-commerce SEO means providing SEO services to ecommerce websites. These include SEO strategies that help increase the growth and popularity of an e-commerce website. For this purpose, different SEO techniques are used for improving the website’s ranking on Google or Bing.'
  },
  {
    question: 'Which kind of online stores can use ecommerce SEO?',
    answer: 'Any type of online store is eligible to use ecommerce SEO services. In today’s digital world, every online store must invest in e-commerce SEO services to succeed.'
  },
  {
    question: 'Why is it important to acquire ecommerce SEO services?',
    answer: 'Ecommerce SEO services are a necessity for ecommerce websites. Without good SEO strategies, these websites and stores cannot make an impact and succeed online.'
  },
  {
    question: 'What are different ecommerce SEO services?',
    answer: 'Our eCommerce SEO company provides a range of services including keyword research, on-page optimization, technical SEO, content creation, link building, and Google Analytics. Together, these services help enhance your store’s online presence and drive more traffic.'
  },
  {
    question: 'Can eCommerce SEO increase my sales?',
    answer: 'Yes! Better search rankings help more people find your store. This means more traffic and a greater chance of conversions.'
  },
  
];

const EcommerceFaq = () => {
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
              Want to boost your online store’s visibility? Our FAQ section answers common questions about eCommerce SEO, including optimizing product pages, improving site speed, and increasing organic traffic. Learn how our strategies can help your store rank higher and attract more customers. Need more details? Reach out to our experts!
              </p>
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

export default EcommerceFaq;

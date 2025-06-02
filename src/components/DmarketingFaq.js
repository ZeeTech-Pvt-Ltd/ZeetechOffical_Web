import React, { useState } from 'react';
import './DmarketingFaq.css';

const faqs = [
  {
    question: 'What is digital marketing, and how might it benefit my company?',
    answer: 'Digital marketing is the use of online mediums to help brands yield revenue. Our digital marketing agency advertises your business on many websites. We use social media platforms and search engines to promote your business. Our digital marketing experts assist you in expanding your customer base and improving sales.'
  },
  {
    question: 'Which services do you provide for digital marketing?',
    answer: 'We offer many services, including SEO, social media marketing, Google Ads, content marketing, email campaigns, and website analytics. All of these services help you spread your business. All of these services help you spread your business.'
  },
  {
    question: 'How long does it take for digital marketing to start producing results?',
    answer: 'The approach determines this. Results from SEO may not appear for several months. Paid advertisements and social media initiatives, however, typically provide results quickly. Our digital marketing firm prioritizes both immediate success and long-term expansion.'
  },
  {
    question: 'Will I receive updates on the success of my campaigns?',
    answer: 'Indeed! Our digital marketing specialists produce reports that are easy to read and understand. We help you find the best technique and see what needs more work. At every stage, we also assist you in seeing how we enhance your marketing.'
  },
  {
    question: 'Does digital marketing cost a lot of money?',
    answer: 'Not at all! We provide plans that are reasonable and work with your budget. With our digital marketing services for small businesses, you do not need to worry about the expense for growing your brand. We will create strategies according to your needs and budget.'
  }
];

const DmarketingFaq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="dm-faq-section container-fluid py-5">
      <div className="container">

        <div className="row g-4 align-items-start">
          <div className="col-md-5 main-faq-content">
            <div className="faq-info-box p-4 rounded">
              <h4 className="fw-bold mb-3">Frequently Asked Questions</h4>
              <p>
              Got questions about Digital Marketing? Our FAQ section covers everything from SEO and PPC to social media marketing and content strategies. Learn how our digital solutions can help you grow your brand, increase traffic, and boost conversions effectively!
              </p>
            </div>
          </div>

          <div className="col-md-7 dm-faq-sec">
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

export default DmarketingFaq;

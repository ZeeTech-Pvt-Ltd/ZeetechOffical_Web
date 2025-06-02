import React, { useState } from 'react';
import './SeoFaq.css';

const faqs = [
  {
    question: 'What is Search engine optimization?',
    answer: 'Search engine optimisation is the process of improving one’s site’s various aspects to make it rank higher in search engine results. This is done to help businesses and services generate more revenue through enhancing their online visibility. Many companies and individual freelancers provide these SEO services to help you expand your online existence in a very short time.'
  },
  {
    question: 'Why is it important to acquire the best search engine optimization services?',
    answer: 'Search engine optimisation is the process of improving one’s site’s various aspects to make it rank higher in search engine results. This is done to help businesses and services generate more revenue through enhancing their online visibility. Many companies and individual freelancers provide these SEO services to help you expand your online existence in a very short time.'
  },
  {
    question: 'What makes your SEO company the best choice for my business?',
    answer: 'We are the best SEO company because we create simple plans that help your site rank higher. Our team focuses on real results by increasing your site’s reputation and attracting more visitors. We make SEO easy and effective for you.'
  },
  {
    question: 'What sets your search engine optimization company apart?',
    answer: 'We stand out because we concentrate on your goals and create custom SEO strategies. Our search engine optimization company helps you grow step by step. We keep things simple and clear and always work towards your success.'
  },
  {
    question: 'Do I need ongoing SEO services for my business?',
    answer: 'Yes! SEO is not a one-time fix. Search engines keep changing, so our search engine optimization company works with you long-term to keep your site at the top. Consistency is important if you want to enjoy long-lasting outcomes.'
  },
  
];

const SeoFaq = () => {
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
              Have questions about SEO? Our FAQ section covers key insights on how SEO works, its benefits, and how our strategies can boost your website’s ranking. From keyword optimization to link building, find the answers you need. Still have questions? Contact our experts!
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

export default SeoFaq;

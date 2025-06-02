import React, { useState } from 'react';
import './LocalSeoFaq.css';

const faqs = [
  {
    question: 'What is Local SEO?',
    answer: 'Local SEO is a business technique that helps you reach your customers in your local area. It means using the keywords that people search for when looking for your products or services in your website content. It improves your ranking in local search results and makes your website prominent for your local audiences.'
  },
  {
    question: 'Why do I need to use Local SEO for my business?',
    answer: 'You need to invest in local SEO because it is greatly helpful in making your business popular in your area. It connects you with your target audience in your surrounding areas. People who actively search for your business-related service or product can easily find you. Thus, you can drive in more traffic and start making good money.'
  },
  {
    question: 'Can Local SEO help me get more customer reviews?',
    answer: 'Yes! Local SEO helps you show up in places where customers can leave reviews, like Google. More reviews improve your reputation and help your business get noticed by potential customers nearby.'
  },
  {
    question: 'How can I decide which local SEO company can serve my business purpose better?',
    answer: 'A company that uses local SEO well can help your business succeed. Staying updated on new strategies makes a big difference. To help decide which company you should invest in, consider going through the reviews and online reputation of that company. As one of the best local SEO agencies, we provide excellent SEO services that bring obvious results, helping your business prosper.'
  },
  
];

const LocalSeoFaq = () => {
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
              Have questions about Local SEO? Our FAQ section covers how it works, why it’s important, and how it helps businesses rank higher in local searches. From Google Business Profile optimization to location-based keywords, find the answers you need to boost your local visibility!
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

export default LocalSeoFaq;

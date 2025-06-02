import React, { useState } from 'react';
import './EnterpriseFaq.css';

const faqs = [
  {
    question: 'What is enterprise SEO?',
    answer: 'Enterprise SEO is a digital marketing strategy tailored for corporate websites with many pages, focusing on optimizing every page to build a strong online presence. It involves using the right keywords, optimizing website content, improving technical features, and building quality backlinks—all aimed at helping large websites rank above their competitors.'
  },
  {
    question: 'How Enterprise SEO services are beneficial for my business?',
    answer: 'Enterprise SEO services are very important as they increase the visibility of large websites. It is also important for companies with multiple locations and those having many competitors. It drives good traffic and strengthens your online presence.'
  },
  {
    question: 'What services are included in Enterprise SEO?',
    answer: 'Our Enterprise SEO services include technical SEO, on-page optimization, content strategy, link building, keyword research, analytics tracking, and conversion rate optimization. These services help your website work better and achieve stronger results.'
  },
  {
    question: 'How long does Enterprise SEO take to show results?',
    answer: 'SEO is a long-term strategy, and it takes roughly 3 to 6 months to show results. This depends on competition, website health, and how well the strategy is implemented. However, it is important to make consistent efforts for sustained growth.'
  },
  {
    question: 'How do you measure the success of an Enterprise SEO campaign??',
    answer: 'We measure success using key metrics. These include organic traffic, keyword rankings, conversion rates, and user engagement. We use tools like Google Analytics and Google Search Console. These are really helpful for tracking our metrics. We also use SEO reporting dashboards.'
  },
  
];

const EnterpriseFaq = () => {
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
              Have questions about Enterprise SEO? Our FAQ section covers large-scale SEO strategies, site architecture, content optimization, and technical improvements to help big businesses rank higher and drive sustainable growth. Learn how enterprise SEO can elevate your brand’s online presence!
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

export default EnterpriseFaq;

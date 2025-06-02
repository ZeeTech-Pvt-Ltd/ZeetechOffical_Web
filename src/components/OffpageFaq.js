import React, { useState } from 'react';
import './OffpageFaq.css';

const faqs = [
  {
    question: 'What is off-page SEO, and why should I invest in it?',
    answer: 'Off-page SEO is a way of external promotion of your website to better its ranking on search engines. This is done by making quality backlinks and using online platforms for the digital advertising of your business. It helps search engines count your site among worthy and famous websites. A good off-page SEO agency can raise your site’s authority and bring more customers.'
  },
  {
    question: 'How can off-page SEO services be helpful for my business?',
    answer: 'Off page SEO service helps your business to prevail online. We encourage positive publicity for your business by getting other websites to connect to yours. Thus, more people can find your site as search engines like Google describe your website as reliable.'
  },
  {
    question: 'How long off-page SEO does take to start producing results?',
    answer: 'Off-page SEO is used to establish a website’s authority and trust, so it takes time. Solid benefits often take a few months, but you may see minor changes in a few weeks. A trustworthy off-page SEO company puts long-term development ahead of temporary solutions.'
  },
  {
    question: 'Is an off-page SEO agency truly necessary?',
    answer: 'Yes! Building relationships, producing content that people want to share, and obtaining high-quality backlinks are all part of managing off-page SEO services. These all require experience and time. You may operate your business successfully by leaving the hard work to a competent off-page SEO agency.'
  },
];

const OffpageFaq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section container-fluid py-5">
      <div className="container">

        <div className="row g-4 align-items-start">
          <div className="col-md-4 main-faq-content">
            <div className="faq-info-box p-4 rounded">
              <h4 className="fw-bold mb-3">Frequently Asked Questions</h4>
              <p>
              Curious about Off-Page SEO? Our FAQ section answers common questions about backlinks, guest posting, social signals, and other strategies that improve your website’s authority and rankings. Discover how off-page SEO can boost your online presence and drive more traffic!

              </p>
            </div>
          </div>

          <div className="col-md-8 faq-sec">
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

export default OffpageFaq;

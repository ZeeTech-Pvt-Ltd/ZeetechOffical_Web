import React, { useState } from 'react';
import './TechnicalFaq.css';

const faqs = [
  {
    question: 'What is technical SEO?',
    answer: 'Technical SEO is a marketing strategy that improves the technical aspects of your website. It improves your site speed, mobile optimization, and crawlability. This helps search engines find and rank your pages. Our technical SEO services make your website’s foundation strong.'
  },
  {
    question: 'Why is it important to avail technical SEO services?',
    answer: 'Improving your website’s technical parts is key. It helps search engines grasp your site’s content and layout. A well-optimized site ranks better, brings in more visitors, and offers a smooth experience. Our technical SEO services company does smart fixing of hidden issues and solidifies your site’s backend for better performance.'
  },
  {
    question: 'How do you fix broken links?',
    answer: 'We identify broken links using tools like Google Search Console. Then, we fix them by updating incorrect URLs, setting up 301 redirects to relevant pages, or removing invalid links. This process helps search engines crawl your site properly and improves user experience. Our technical SEO services ensure your site stays error-free.'
  },
  {
    question: 'Can technical SEO make my website faster?',
    answer: 'Yes! We increase your website’s speed. We compress images, clean up unnecessary code, enable browser caching, and improve server response times. Quick-loading websites rank higher and keep visitors longer.'
  },
  {
    question: 'How often should I get a technical SEO audit?',
    answer: 'You should get a technical SEO service audit every 3–6 months. Regular audits help find and fix crawl errors, broken links, slow-loading pages, and other technical issues. Our technical SEO services company keeps your website updated and optimized for search engines.'
  },
  
];

const TechnicalFaq = () => {
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
              Wondering how Technical SEO impacts your website? Our FAQ section covers site speed, mobile-friendliness, indexing, and other key factors that enhance performance and rankings. Learn how technical SEO ensures a smooth and optimized user experience!
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

export default TechnicalFaq;

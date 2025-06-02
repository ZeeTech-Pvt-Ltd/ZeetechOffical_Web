import React, { useState } from 'react';
import './OnpageFaq.css';

const faqs = [
  {
    question: 'What is on-page SEO?',
    answer: 'We perform on-page SEO to enhance each page of your website. Search engines rank your website high if you optimise it well. More people can visit your site and make purchases. It includes content optimisation, HTML tags, and internal links, etc. These improvements in your website increase search engines’ trust in your site and move more customers.'
  },
  {
    question: 'Why on-page SEO is important?',
    answer: 'On-page SEO is important because it helps bring traffic to your site and increases your revenue. It makes search engines understand your website’s content so they can rank your website better in their search results. This high ranking increases your website’s visibility and hence boosts sales.'
  },
  {
    question: 'What are the main components of on-page SEO?',
    answer: 'Clickable headlines in search results are known as title tags, while meta descriptions provide summaries of page content. Heading tags help arrange content in a meaningful way, and clean, descriptive URLs improve structure and readability. High-quality content that is informative, relevant, and engaging is essential, along with internal linking to connect different pages on your site for better navigation and SEO.'
  },
  {
    question: 'How can I make my website easily navigable for mobile users?',
    answer: 'You need to make your website mobile-friendly. For this, use a responsive design that can be easily navigated across every screen size. Search engines rank those sites better that are mobile-friendly. So you can make your site easily navigable by making your site more responsive.'
  },
];

const OnpageFaq = () => {
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
              Have questions about On-Page SEO? Our FAQ section covers everything from keyword optimization and meta tags to content structuring and technical SEO. Learn how on-page strategies improve your website’s rankings and user experience!

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

export default OnpageFaq;

import React, { useState } from 'react';
import './ShopifyFaq.css';

const faqs = [
  {
    question: 'What Shopify development services are you providing?',
    answer: 'Our Shopify development services include creation, customization, and maintenance of your online store. With these services, we ensure that design, functionality, and performance are improved. We provide exceptional services to boost sales.'
  },
  {
    question: 'Do you also customize existing Shopify stores?',
    answer: 'Yes, we can customize your current Shopify store. We can modify themes, add custom apps, and integrate third-party systems. Also, we improving the overall user experience to match your business needs.'
  },
  {
    question: 'After launching the website, do you offer maintenance?',
    answer: 'We provide ongoing maintenance and support after launching the stores. Your store will operate without any flaws. It will stay secure and adapt to changes. This includes performance improvements, updates, and issue resolution.'
  },
  {
    question: 'Can you perform the migration of my store to Shopify?',
    answer: 'Yes, we offer migration services as well. We transfer already existing stores from one platform to another to improve functionalities. For example, WooCommerce, Magento, and Shopify. We prevent loss of product data, customer information, and order history during the migration process.'
  },
  {
    question: 'How much do you charge for Shopify development?',
    answer: 'The cost varies depending on your specific needs. For example, custom features and integrations. If you want to know further details, please contact our support team and they will guide you. '
  }
];

const ShopifyFaq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section container-fluid py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">How are We A Top Shopify Development Company?</h2>
        <p className="text-center mb-5">
          We have an expert team for Shopify web development services. It customizes themes and layouts to create a visually appealing and user-friendly store for its clients. Also, it ensures a responsive design that works seamlessly on all devices. Avoid the hassle of setting up the store on your own and get your web store designed by us. Our developers are capable of handling configuration, payment gateways, shipping settings, and more. Do not worry about these features and issues, just focus on your business goals.
        </p>

        <div className="row g-4 align-items-start">
          <div className="col-md-5 main-faq-content">
            <div className="faq-info-box p-4 rounded">
              <h4 className="fw-bold mb-3">Frequently Asked Questions</h4>
              <p>
                Have questions about Shopify development? Our FAQ section covers everything from custom theme design and app integration to store setup, optimization, and ongoing support. Whether you're launching a new store or enhancing an existing one, we’ve got the answers you need to succeed on Shopify.
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

export default ShopifyFaq;

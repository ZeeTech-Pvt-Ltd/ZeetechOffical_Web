import React, { useState } from 'react';
import './AppFaq.css';

const faqs = [
  {
    question: 'Which industries do you develop mobile applications for?',
    answer: 'We devise applications for almost every industry. This includes e-commerce, education, entertainment, and finance. Also, we develop apps for restaurants, healthcare, socials, sports, travel, fitness, and wellness.'
  },
  {
    question: 'Do your cross-platform apps operate as native apps?',
    answer: 'Our cross-platform apps offer performance just like the native mobile apps. Especially with the latest frameworks like React Native and Flutter. Native apps are great for performance and user experience. However, cross-platform development is a great alternative. It allows quick development, low costs, and easy maintenance.'
  },
  {
    question: 'Can your mobile apps work on all devices and different screen sizes?',
    answer: 'Yes, we use various techniques to test our mobile apps. We test them on different screen sizes to ensure responsiveness. You can use the mobile app on any device as we ensure it adapts perfectly to different resolutions. Your mobile app will always deliver a smooth experience.'
  },
  {
    question: 'Which security considerations do you take for mobile app development?',
    answer: 'We always focus on the app’s security. For this, we use encryption to protect sensitive data and use secure authentications. We also follow industry measures like OWASP/ASVS to ensure adherence to GDPR and HIPAA.'
  },
];

const AppFaq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section container-fluid py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Why Should You Choose Us? </h2>
        <p className="text-center mb-5">
        We are one of the finest app development firms that offer hybrid app development. We have a team with comprehensive experience in building solutions. Our solutions meet market needs to empower companies and originate their brand identities. Get the best iOS and Android app development services to encourage business growth and expansion. You can also get native app development services. We are a custom mobile app development company that works for a wide range of clients across multiple industries.
        </p>

        <div className="row g-4 align-items-start">
          <div className="col-md-5 main-faq-content">
            <div className="faq-info-box p-4 rounded">
              <h4 className="fw-bold mb-3">Frequently Asked Questions</h4>
              <p>
              Got questions about Mobile App Development? Our FAQ section covers everything from app design and development to platform compatibility, security, and maintenance. Learn how we create high-performance mobile apps tailored to your business needs!
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

export default AppFaq;

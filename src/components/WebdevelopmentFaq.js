import React, { useState } from 'react';
import './WebdevelopmentFaq.css';

const faqs = [
  {
    question: 'What does ZeeTech charge for website development?',
    answer: 'The charges for a website project depend on the size and complexity of the website. Also, it depends on the scope of the project. For detailed information, you can contact our experts and share your requirements.'
  },
  {
    question: 'How much time does your team take to complete the project?',
    answer: 'Project completion time varies depending on complexity and client requirements. Typically, small websites take 1–2 weeks, while larger projects may take 3–6 weeks.'
  },
  {
    question: 'What technologies does ZeeTech use for the development of a website?',
    answer: 'We use modern technologies such as HTML5, CSS3, JavaScript, React, WordPress, Bootstrap, and other frameworks depending on the project scope.'
  },
  {
    question: 'Are the websites you develop responsive and mobile-friendly?',
    answer: 'Yes, all our websites are fully responsive and optimized for mobile devices to ensure the best user experience on all screen sizes.'
  },
  {
    question: 'Do you provide support and maintenance after launching a website?',
    answer: 'Absolutely! We offer ongoing support and maintenance services to ensure your website remains secure, updated, and performs optimally.'
  }
];

const WebdevelopmentFaq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section container-fluid py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">What Will You Get?</h2>
        <p className="text-center mb-5">
          With a responsive website, you will reach your audience on every device possible. You will have an improved user experience and engagement, resulting in high rankings. With a custom e-commerce website, you'll get features like a shopping cart and check-out. Manage workflow with a powerful content management system. Your website will be full of advanced features and settings. You will be able to understand important Google Analytics metrics and reports. Set up custom reports, review your data, and optimize your marketing strategies. Your CMS will have everything you need with a user-friendly interface. Moreover, you will get complete website security audits. Your website will never miss out on a lead or sale. Our website maintenance services will keep the website content fresh. This will ensure that website visitors are engaged.
        </p>

        <div className="row g-4 align-items-start">
          <div className="col-md-5 main-faq-content">
            <div className="faq-info-box p-4 rounded">
              <h4 className="fw-bold mb-3">Frequently Asked Questions</h4>
              <p>
                Have questions about web development? Our FAQ section covers everything from website design and functionality to development timelines and technologies we use. Whether you're curious about custom websites, eCommerce platforms, or website maintenance, you'll find the answers here. Need more details? Feel free to reach out!
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

export default WebdevelopmentFaq;

import React from 'react';
import './AiAgency.css';

const services = [
  {
    title: 'AI Integration Consultancy',
    description: 'We have a team of AI experts who work with clients to understand their business. They analyze their goals, challenges, and opportunities. After getting enough information, they provide AI integration consultation to expand your business or resolve issues. ',
  },
  {
    title: 'Machine Learning Integration',
    description: 'We add machine learning abilities to our clients’ existing business systems. We connect these models and algorithms to databases and applications for better performance. This enables improved decisions, automates tasks, and improves performance.',
  },
  {
    title: 'OpenAI Integration',
    description: 'We offer OpenAI integration to add its models and tools. These are added into a company’s applications, systems, or workflows. This allows businesses to use the advanced abilities of AI to enhance their performance. They can use it directly in their company software.',
  },
  {
    title: 'Natural Language Processing',
    description: 'Our AI experts will train your systems to understand, translate, and respond to human language. We can develop chatbots or virtual assistants to increase user interactions. This will let your systems understand textual data and perform analysis for better understanding.',
  },
  {
    title: 'Generative AI Integration',
    description: 'We provide the latest generative AI integration services. These services enable businesses and developers to enhance customer interactions. Our solutions generate content, reports, insights, and ideas that do not need human interference.',
  },
  {
    title: 'Chatbot Integration',
    description: 'Our chatbot integration services will improve and increase customer interaction. The users will be able to get personalized support and responses. It will reduce the cost of hiring CSRs to sit for hours and assist them. The chatbot will guide users itself.',
  },
];

const AiAgency = () => {
  return (
    <section className="ai-services">
      <div className="container">
        <h2 className="title">We are the Most Efficient AI Integration Agency</h2>
        <p className="subtitle">
        As a leading AI Integration agency, we will connect your business with Artificial Intelligence. AI will take data from reliable sources to analyze information. Also, we will embed AI features like chatbots in your websites and applications. This will also increase your user interaction. What do we offer?</p>

        <div className="card-grid">
          {services.map((item, idx) => (
            <div className="card" key={idx}>
              <div className="card-icon">📘</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiAgency;

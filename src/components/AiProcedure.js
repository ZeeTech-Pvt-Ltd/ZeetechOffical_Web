import React from 'react';
import './AiProcedure.css';

const AiProcedure = () => {
  return (
    <section className="ai-procedure-section">
      <div className="ai-procedure-container">
        {/* Right Side Text and Services */}
        <div className="ai-procedure-content">
          <h2>Our Procedure to Integrate AI for Business Success</h2>
          <p>
          We follow a simple and effective process to bring AI into your business. We start with idea generation, where we find areas where AI can make a difference. Next, we focus on data preparation. We collect and organize the required data. Then, we select an AI model that best fits the requirements. After that, we work on AI Integration, connecting the AI with your existing systems. We thoroughly test the setup to make sure everything works well. At last, we deploy it to make the AI solution live and ready to boost your business.
          </p>
        </div>
        {/* Left Side Image */}
        <div className="ai-procedure-image">
          <img
            src="/isometric-icon-with-woman-using-removebg-preview.webp" 
            alt="Ai Integration" 
          />
        </div>       
      </div>
    </section>
  );
};
export default AiProcedure;

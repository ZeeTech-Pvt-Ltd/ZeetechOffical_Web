import React from 'react';
import './AppManage.css';



const AppManage = () => {
  return (
    <section className="custom-app-section">
      <div className="custom-app-container">
        {/* Right Side Text and Services */}
        <div className="custom-app-content">
          <h2>How Do We Manage the Whole Process?
          </h2>
          <p>
          Experience stress-free development with feature-rich applications. Our dedicated and skilled developers handle projects of any scope and size. We devise solutions and ensure they give a flawless user experience. Moreover, we deploy agile development strategies. This lets your project be delivered on time without any hassle.<br></br>
          Furthermore, we always keep performance metrics in mind while developing apps. We build projects for a range of industries. We follow clear instructions given by clients for their businesses. From design to implementation and deployment, we use modern technology.
          </p>
        </div>

        {/* Left Side Image */}
        <div className="custom-app-image">
          <img 
            src="people-creating-together-new-app-removebg-preview.png" 
            alt="App Development " 
          />
        </div>

        
        
      </div>
    </section>
  );
};

export default AppManage;

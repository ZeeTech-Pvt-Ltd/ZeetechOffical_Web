import React from 'react';
import './AppAdvantages.css';

const services = [
  {
    title: 'iOS App Development',
    description: 'We are an iOS app development agency that designs smart and friendly applications. Our apps ensure flawless operations and user understanding with minimum effort. We will turn your ideas into scalable and fully functional apps. Chase your business goals with our excellent iOS app development services.',
  },
  {
    title: 'Android App Development',
    description: 'We are the best Android app development company. We develop impressive, scalable, native Android applications. These strong, user-friendly apps deliver ideal user experiences. Our team guarantees that these apps have various functionalities and that they stand out in competitive markets.',
  },
  {
    title: 'Cross-Platform App Development',
    description: 'We also create cost-effective applications that are easy to maintain. Our cross-platform app development services decrease development time. These apps provide a friendly experience to the users as they operate on different devices. In this way, you can reach a larger audience with the top technologies.',
  },
  {
    title: 'API Integration',
    description: 'We offer custom API development and integration services to our clients for their mobile applications. We connect their applications with third-party services, databases, and cloud solutions. We focus on their success so we ensure the responsiveness of the mobile applications.',
  },
  {
    title: 'AI & ML Integration',
    description: 'Our mobile app development team empowered your digital solutions with Artificial Intelligence and machine learning. This helps your applications to improve efficiency and provide automation. Industries like FinTech are integrating AI and machine learning to not only improve user experience but also boost results.',
  },
  {
    title: 'Testing and Maintenance',
    description: 'We also offer testing and maintenance of mobile applications after their deployments. By doing this, we guarantee that your app does not contain any flaws or errors. Also, we offer maintenance for the content, features, and interface. The ongoing support gives your users a flawless experience.',
  },
  
];

const AppAdvantages = () => {
  return (
    <section className="app-advantages">
      <div className="container">
        <h2 className="title">TWe are the Best Mobile App Development Company</h2>
        <p className="subtitle">
        The skilled mobile app development team has specialized in crafting high-performance apps. Share your unique business requirements. Our experts will combine creativity, technology, and strategy for smooth user experiences. We will guarantee that users get all the features they need to operate the mobile app. Get a full cycle of application design, integration, and management services.
        </p>

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

export default AppAdvantages;

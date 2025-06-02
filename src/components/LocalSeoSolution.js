import React from 'react';
import './LocalSeoSolution.css';

const services = [
  {
    title: 'Google My Business Optimization',
    description: 'The most important of local SEO strategies is to make an effective Google business profile. We help you set up and optimize your Google My Business profile. We enhance your GMB profile by adding authentic information about your business, such as your business’s name, address, phone number, website, etc. We also enhance your website’s descriptions, services, categories, and regular posts to help your site rank better.',
  },
  {
    title: 'Local Keyword Research',
    description: 'Effective local SEO requires using the right keywords relevant to local search results. Our local SEO service company helps your business find the exact words and phrases that people in your area use most often when searching for your products or services. We find location-based keywords and integrate them naturally into your website content to effectively target your local audience.',
  },
  {
    title: 'Local Citation',
    description: 'Our Local SEO service gets your business listed in online directories. We make sure your business name, address, and phone number (NAP) are consistent across different online directories. The use of accurate and consistent citations helps build trust with search engines. This way, your business’s visibility increases in local searches, and more customers in your area find and contact you.',
  },
  {
    title: 'Localizing Website Content',
    description: 'This means adding your city, region, or country’s name in your website content. We help you reach local customers by adding these details naturally throughout your content. We also help you engage with local community events. Writing blog posts about those events and publishing them on your website helps people become familiar with your business. It is an excellent way to connect to more of your local audience.',
  },
  {
    title: 'Reviews Management',
    description: 'We work smartly to improve your online reputation by encouraging happy customers to make positive reviews on Google and other sites. We also help you manage both positive and negative reviews to make people believe that your business is trustworthy. Good reviews add to the trust of your area’s customers, and they prefer to choose your business.',
  },
  {
    title: 'Mobile Optimization',
    description: 'Our local SEO services company ensures that your website is responsive on smartphones and tablets. This is because most local searches are made on mobile devices, therefore, it is important that your site loads quickly and looks good on any screen. Moreover, it must be easy to navigate. We help local customers find you quickly and have a good experience on your site to help boost your sales.',
  },
];


const LocalSeoSolution = () => {
  return (
    <section className="local-seo-advantages">
      <div className="container">
        <h2 className="title">How Our Local SEO Solutions Are Effective for Your Business</h2>
        <p className="local-seo-subtitle">
        If your business has a physical location, Local SEO is useful. It helps you reach nearby customers by making your site appear strong in local search results. When applied effectively, local SEO services increase your business’s online presence and drive targeted traffic from surrounding areas. 
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

export default LocalSeoSolution;

import React from 'react';
import './EcommerceSmart.css';

const services = [
  {
    title: 'Keyword Optimization',
    description: 'We find the best high-ranking keywords for your website’s consistent search engine ranking progress and sustainability. We use relevant keywords that match the search intent of users and integrate them naturally throughout your website’s content.',
    buttonLink: '/#'
  },
  {
    title: 'Improving Overall SEO',
    description: 'Our e-commerce SEO services cover everything to help your online store grow. We improve your product pages by adding the right keywords and descriptions. We build quality links to make your website more trustworthy. We also make your store appear in local searches to attract nearby customers. Plus, we take care of your site’s technical side, ensuring it loads fast and is easily approachable for search engines.',
    buttonLink: '/#'
  },
  {
    title: 'Product Page Optimization',
    description: 'Our ecommerce SEO agency works on every part of your product page to ensure it ranks for the right keywords, helping improve your site’s conversion rates. We focus on making each page clear and easy to understand by optimizing important elements like product markup, page titles, headings, meta descriptions, and product image optimization. This helps your pages stand out in search results and attract more customers.',
    buttonLink: '/#'
  },
  {
    title: 'Content Strategy & Creation',
    description: 'We create original, SEO-friendly content that helps search engines find your site by using the right keywords. At the same time, it makes your website descriptive and clear for customers to understand. We provide engaging blog posts and articles to increase your site’s visibility and also keep visitors interested and informed.',
    buttonLink: '/#'
  },
  {
    title: 'Site Structure & Navigation',
    description: 'We simplify your website’s layout to make it easily navigable for visitors and search engines. A clear site structure helps users explore and move around your site without any confusion. We also strengthen internal linking to connect pages for increased visibility and user involvement. We make your site well-organized and user-friendly to help people and search engines easily find what they need.',
    buttonLink: '/#'
  },
  {
    title: 'Analytics & Repoting',
    description: 'Our e-commerce SEO experts keep track of your website’s performance and traffic to see how your SEO works. We analyze what’s bringing visitors to your site and which areas need improvement. We review the data to spot trends and find ways to get even better results. Regular reports give you a clear view of your site’s growth to help you make smart decisions and reach more customers.',
    buttonLink: '/#'
  },
];


const EcommerceSmart = () => {
  return (
    <section className="smart-seo-advantages">
      <div className="container">
        <h2 className="title">Our Smart Ecommerce SEO Services</h2>
        <p className="smart-seo-subtitle">
        Our e-commerce SEO experts work diligently to create smart strategies. We expertly optimize your eCommerce website to elevate its search engine rankings and attract potential customers. We optimise your product pages to help customers quickly find what they need. This builds trust among users and positions your eCommerce brand as the go-to choice for customers..
        We offer the following results-oriented e-commerce SEO services: 
        </p>

        <div className="smart-card-grid">
          {services.map((item, idx) => (
            <div className="card" key={idx}>
              <div className="card-icon">📘</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button className="learn-more-btn">➤ Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceSmart;

import React from 'react';
import './EnterpriseBusiness.css';

const services = [
  {
    title: 'Enterprise SEO Audits',
    description: 'We thoroughly analyze your website to spot issues that stop your site from ranking high. We also conduct competitor research to find what they are doing and where your site is lacking. Then, our enterprise SEO experts fix issues and plan smart strategies to make your website tough for your competitors to outrank.',
    buttonLink: '/#'
  },
  {
    title: 'Enterprise On-page SEO',
    description: 'We use strong On-Page SEO techniques to improve each page. This means we optimize content, keywords, titles, and descriptions. This also means using clear headings on the page. This helps both users and search engines understand the content better. These improvements help make your website more discoverable.',
    buttonLink: '/#'
  },
  {
    title: 'Content Optimization',
    description: 'Our enterprise SEO services seek to improve the quality of your content by updating existing pages with the right keywords. We make the content clear, relevant, and easily comprehensible for both your audience and Google. We build content strategies that focus on conversions. They align with your business goals and help you earn more revenue.',
    buttonLink: '/#'
  },
  {
    title: 'Link Building',
    description: 'Our enterprise SEO approach prioritizes ethical, white-hat link building. We get top-notch backlinks from trusted sites. This boosts your domain authority and helps your search engine rankings. Plus, it helps build your site’s credibility and sustains long-term organic growth.',
    buttonLink: '/#'
  },
  {
    title: 'Technical Maximization',
    description: 'Even small technical problems can significantly affect a large and complex website like yours’ organic search visibility and traffic. We carry out thorough technical improvements to ensure that search engines can easily crawl and index your site.',
    buttonLink: '/#'
  },
  {
    title: 'Google Analytics',
    description: 'With Google Analytics, businesses can see how visitors engage with their websites. We examine key data such as page views, bounce rates, and user behavior to help companies make smart choices to grow their online presence. Our enterprise SEO firm sets up Google Analytics to help you make smart changes that boost your website’s performance and visibility.',
    buttonLink: '/#'
  },
];


const EnterpriseBusiness = () => {
  return (
    <section className="enterprise-seo-advantages">
      <div className="container">
        <h2 className="title">How Our Enterprise SEO Agency Helps Scale Your Business</h2>
        <p className="enterprise-seo-subtitle">
        Large businesses experience more difficulty climbing up the search engine rankings as optimising thousands of web pages is not easy. You need an expert enterprise SEO agency to make your large business thrive online. Our enterprise SEO services help grow your business through a comprehensive approach to boosting ranking and implementing enterprise-scale strategies. Our enterprise SEO experts organize your pages better and enhance the content to help your brand connect with the right audience. 
        </p>

        <div className="card-grid">
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

export default EnterpriseBusiness;

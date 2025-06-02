import React from 'react';
import { Link } from 'react-router-dom';
import './SeoAdvantages.css';

const services = [
  {
    title: 'SEO Audits',
    description: 'Our SEO company carefully reviews your website’s current performance. We examine various aspects of your website to identify what is optimized best and what needs to be fixed. Then, we create an action plan to improve your rankings. It’s like giving your website a complete performance review by focusing completely on search engines.',
  },
  {
    title: 'Keyword Research',
    description: 'As the best SEO agency, we know how impactful the right words are. We discover the exact terms your customers are typing into Google and what keywords are making your competitors rank high. We also look for other high-value keyword opportunities that match your niche. Then, we use them strategically across your site to boost its visibility.',
    
  },
  {
    title: 'On-Page SEO',
    description: 'Our on-page search engine optimization service streamlines everything on your site. We optimize your website, from crafting compelling headlines to refining meta descriptions. We also look forward to every algorithmic update to ensure your website is working according to best practices. This helps search engines and people understand your business more easily and value what they see.',
  },
  {
    title: 'Off-Page SEO',
    description: 'Link building is invaluable to ranking higher. Our search engine optimization agency also works on outside areas to help your website gain attention. We make strong link-building strategies to earn quality backlinks for your business from high-authority and niche-relevant websites. This increases your site’s authority and helps you climb the search results.',
  },
  {
    title: 'Technical SEO',
    description: 'We, being the best SEO optimization company, seek to improve your website’s overall performance. We improve the technical elements of your website to make it easily found by search engines and visitors. We speed up your website’s loading, optimise it for mobile users, and maximise its security to provide a smooth browsing experience for your site’s visitors.',
  },
  {
    title: 'Content Creation',
    description: 'Our search engine optimisation services also include optimising your website’s content. Our team enhances your content by providing engaging blogs, articles, and web copy tailored to your business. We deliver SEO content that speaks to your audience, helping your business rank better, attract more visitors, and convert them into customers.',
  },
];


const SeoAdvantages = () => {
  return (
    <section className="seo-advantages">
      <div className="container">
        <h2 className="title">Take Advantage of Our Best Search Engine Optimization Service.</h2>
        <p className="seo-subtitle">
        We, being the industry’s finest search engine optimization company, believe in delivering unparalleled results. Our genius SEO experts combine tech with their creative mindset to fetch impressive outcomes. As the best SEO agency, we take the guesswork out of search engine optimization. Our team implements simple and effective strategies that actually work.
        We craft tailored search engine optimization services centered on your specific industry, goals, and market position. 
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

export default SeoAdvantages;

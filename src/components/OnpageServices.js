import React from 'react';
import { Link } from 'react-router-dom';
import './OnpageServices.css';

const services = [
  {
    title: 'Keyword Optimization',
    description: 'Keywords matter the most for an optimum search engine ranking. We list out the best keywords that people mostly search for. We find the right keywords for your website by focusing on exact, partial, entity, and LSI keywords. We integrate the proper density of every keyword type to make them resonate better with your content. This streamlines your website’s content to help Google show your content to the right audience.',
  },
  {
    title: 'Title & Meta Tag Optimisation',
    description: 'Meta tags help search engines match user searches with your site’s keywords and titles. We create SEO-friendly meta titles and meta descriptions using the right keywords. These tags tell users what your page is about and help them discover your site easily. We optimize meta tags on each page of your website, helping search engines direct the right audience to your site and leveraging its traffic.',
  },
  {
    title: 'User-centered Content',
    description: 'Our on-page SEO strategies enhance your online content, helping it reach more people. We optimise your website’s content to match people’s search intent. The right keywords, well-organized information, and relevant links and images ensure your content is both search-engine and user-friendly. Our on-page SEO company makes your content work smart and attract the right people, encouraging them to take action.',
  },
  {
    title: 'Internal Linking Structure',
    description: 'Our on-page SEO company works brilliantly at internal link building to streamline your website’s structure and boost rankings. Internal links create a web of related pages. This helps users navigate your site smoothly. We fix the mismatched anchor text, broken links and orphaned pages. A strong internal linking strategy helps users navigate your site smoothly, keeping them engaged for long.',
  },
  {
    title: 'URL Structure Optimisation',
    description: 'Our smart, on-page SEO service provides well-optimized URL structures that are simple, clear, and search-engine friendly. We create short, descriptive URLs with relevant keywords and proper formatting. We avoid inserting random symbols or numbers. By optimising your URLs to the finest, we make search engines index your site better and increase your chances of outranking your competitors.',
  },
  {
    title: 'Image Optimisation',
    description: 'Search engines identify your site as a high-authority when you insert high-quality images with written content. We enhance your images by improving Image titles using clear and descriptive keywords. We make it relevant to your web page’s topic. We optimise Alt tags by adding simple, keyword-rich descriptions to enable search engines and visually impaired users to understand what the image shows.',
  },
];


const OnpageServices = () => {
  return (
    <section className="onpage-seo-advantages">
      <div className="container">
        <h2 className="title">The Highly Effective On-Page SEO Services We Specialize In</h2>
        <p className="onpage-seo-subtitle">
        Our on-page SEO services help you optimise every page of your website to make it search-engine friendly. As an experienced on-page SEO company, we fine-tune everything from title tags and meta descriptions to header tags, keyword placement, and image alt texts. We focus on every important factor that matters for search engine ranking, such as the proper indexation, categorization, and functionality of your web pages. 
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

export default OnpageServices;

import React from 'react';
import { Link } from 'react-router-dom';
import './TechnicalOptimize.css';

const services = [
  {
    title: 'Technical SEO Audit',
    description: 'We carefully analyse your website’s backend to check issues that affect its search engine ranking. Our technical SEO audit service includes checking vital factors such as your site’s speed, mobile friendliness, crawl errors, structured data, broken links, and XML sitemaps. This is done to identify and fix technical issues so your website is well-optimised for visitors to navigate and for Google to rank it higher.',
    buttonLink: '/#'
  },
  {
    title: 'Competitor Analysis',
    description: 'See what your competitors are doing with our skilled technical SEO services agency. We carefully look at your competition’s optimization strategies. This includes their keyword performance, site speed, structured data, crawlability, and both technical and backlink profiles. We use this information to improve your site’s technical profile and plan optimization tactics that will increase your conversion chances.',
    buttonLink: '/#'
  },
  {
    title: 'Speed Optimization',
    description: 'Page speed is key for web ranking. It also enhances your visitors’ experience. Our technical SEO services improve your website’s speed. We do this by compressing images, HTML, CSS, and JavaScript files to make them smaller. We also optimize your code, enable browser caching and improve server response time. A faster loading speed of your site reduces bounce rates and keeps your visitors engaged.',
    buttonLink: '/#'
  },
  {
    title: 'Structured Data Markup',
    description: 'We enable search engines to crawl, understand and show your content easily using schema markup. We add a code to your website’s HTML to highlight your page elements, such as product prices, reviews, or event dates. This helps search engines display rich snippets in search results, making your listings more detailed and appealing. This also adds to your website’s visibility, resulting in increased website traffic.',
    buttonLink: '/#'
  },
  {
    title: 'Robots.txt Optimization',
    description: 'Robots.txt optimization helps search engines know which pages to crawl on your website and which ones to ignore. This stops search engines from indexing unimportant pages and focuses attention on the right content. Our technical SEO services agency correctly sets up your robots.txt file to enable search engines to understand your site better and boost your rankings.',
    buttonLink: '/#'
  },
  {
    title: 'Fixing Broken Links',
    description: 'Broken links affect the user experience of your website and your search engine rankings. Our technical SEO experts use Google Search Console to detect broken links. We fix the broken links by updating incorrect URLs, setting up 301 redirects to relevant pages, or removing invalid links completely. We also check internal links to ensure smooth navigation. Fixing broken links helps search engines crawl your site effectively and enhances its overall performance.',
    buttonLink: '/#'
  },
];


const TechnicalOptimize = () => {
  return (
    <section className="technical-seo-advantages">
      <div className="container">
        <h2 className="title">How Our Technical SEO Service Optimizes Your Website Performance</h2>
        <p className="technical-seo-subtitle">
        Our technical SEO services company streamlines your website to make search engines index it effectively. We improve your website’s structure and replace broken links with optimized ones. We ensure that users enjoy navigating your website without waiting too long for your web pages to load. Once you have a good reputation on search engines, your website can drive more traffic and increase your conversion rate.
        </p>

        <div className="card-grid">
          {services.map((item, idx) => (
            <div className="card" key={idx}>
              <div className="card-icon">📘</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link to={item.buttonLink} className="learn-more-btn">➤ Learn More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalOptimize;

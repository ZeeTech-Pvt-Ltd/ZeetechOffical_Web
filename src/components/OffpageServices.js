import React from 'react';
import { Link } from 'react-router-dom';
import './OffpageServices.css';

const services = [
  {
    title: 'Premium Link Building',
    description: 'Link building is critical to off-page SEO. We get quality backlinks from trusted and relevant sites in your industry. We use white-hat strategies by publishing helpful niche articles that link back to your site. We also run outreach campaigns to build links by connecting with bloggers, influencers, and site owners. We reach out to high-authority websites relevant to your niche and insert your website’s link into their existing content. We get good-quality links from reputable websites to improve your rankings.',
  },
  {
    title: 'Digital PR and Outreach',
    description: 'Digital media is a great way to help your brand get discovered. We connect your company with prominent blogs and websites to help it gain visibility. The exposure and credibility of your brand are greatly enhanced when content from your website is shared on reliable websites.With digital PR, we create valuable links back to your website by connecting you to influential individuals or sites. This is highly effective in boosting your search engine rankings and directing more traffic to your website.',
  },
  {
    title: 'Broken Link Building',
    description: 'Broken link building is an SEO tactic where we find broken links on websites and offer your content as a replacement. By doing this, we acquire a useful backlink to your website and assist website owners in fixing their broken links. It’s an easy and practical method to boost your SEO and make positive connections with other website owners.',
  },
  {
    title: 'Content Marketing',
    description: 'One helpful off-page SEO service is effective marketing of your website’s content. This strategy helps your brand reach a broader audience. As more people notice your business, there is more possibility of earning high-grade backlinks and increased brand tagging. We create shareable content that can successfully draw your clients’ attention. It also helps attract links from other websites. This way, we improve your search engine rankings and bring more people to your site.',
  },
  {
    title: 'Influencer Outreach',
    description: 'Bloggers, influencers, and industry experts greatly enhance customers’ interest in your business. This is quite an effective method to divert more people’s attention to your brand. This strategy also adds to your site’s credibility for search engines. Our skilled off-page SEO company helps you associate with the right influencers in your industry to build strong relationships. This not only increases your brand’s visibility but also helps you secure quality backlinks to enhance your search engine rankings.',
  },
  {
    title: 'Local SEO',
    description: 'Local SEO is about helping a business appear in local search results. We help your business reach people nearby who are interested in your business through our local SEO services. We use local citations to mention your business name, address, and phone number in online directories. We also boost your Google business profile, letting your business appear better in local search results. This increases your site’s credibility among potential customers and makes it easy for them to reach and contact you.',
  },
];


const OffpageServices = () => {
  return (
    <section className="offpage-seo-advantages">
      <div className="container">
        <h2 className="title">What Expert Off Page SEO Services We Present</h2>
        <p className="offpage-seo-subtitle">
        We offer a blend of useful strategies for building strong links outside your website that help you increase the authority of your brand and accelerate its growth. 
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

export default OffpageServices;

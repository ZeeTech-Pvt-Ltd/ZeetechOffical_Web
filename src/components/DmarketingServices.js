import React from 'react';
import './DmarketingServices.css';

const services = [
  {
    title: 'Pay-Per-Click Advertising',
    description: 'We help you brand hit the right audience at the right time with our PPC advertising services. Our digital marketing experts run Google Search, Display, Video, Shopping, and Performance Max ads to bring high-quality leads. We target Microsoft’s search network to tap into a valuable audience. We design tailored social media ad campaigns and help re-engage visitors who showed interest in your business but didn’t convert the first time.',
  },
  {
    title: 'Social Media Marketing',
    description: 'Our smart internet marketing service offers organic social media management on popular platforms to help you build a strong community. Our digital marketing specialists use social media forums, scheduling tools, and AI-based analytics to track your brand engagement. We also handle paid social media advertising. We help you build strong relationships with your customers and trustworthy influencers in your industry.',
  },
  {
    title: 'Email Marketing',
    description: 'Email marketing is an effective way to stay in touch with your audience. We create newsletter campaigns to update your audience on any new developments. Our experts boost sales and drive more customers by setting up drip email sequences and autonomous email workflows. Our digital marketing experts use email marketing services, including automation, A/B testing, segmentation, and performance tracking for better engagement.',
  },
  {
    title: 'Content Marketing',
    description: 'We make sure your website’s content is optimised enough to engage more of your audience. We do so by optimizing your website’s content, such as infographics and videos, through SEO optimization. We attract your target audience by presenting interactive and informative content. You can avail yourself of the finest SEO practices, keyword optimization, and internal linking strategies with our best digital marketing company.',
  },
  {
    title: 'Affiliate Marketing',
    description: 'We associate you with some reliable partners to help develop your business. Our digital marketing agency connects you with affiliates who advertise your products and services. Our affiliate marketing experts use people’s influence to promote your product. They provide a unique link to them to advertise your business in exchange for a commission for each sale or action.',
  },
  {
    title: 'Conversion Rate Optimization',
    description: 'We help you convert your site’s visitors into regular customers with our proficient CRO services. We make your website function at its best by implementing A/B testing. Our digital marketing experts make your website’s landing pages easier to use. This helps increase user interest and improve their experience. This way, browsing becomes smooth and effortless.',
  },
  
];

const DmarketingServices = () => {
  return (
    <section className="dm-advantages">
      <div className="container">
        <h2 className="title">What Expert Digital Marketing Services Do We Offer</h2>
        <p className="dm-subtitle">
        We offer the best digital marketing services tailored to empower your brand. From advertising and social media marketing to content and email marketing, our digital marketing company manages everything for you. We help you attract new customers and enhance audience involvement and sales.
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

export default DmarketingServices;

import React from 'react';
import './ShopifyServices.css';

const services = [
  {
    title: 'Custom Shopify Theme Development',
    description: 'We collaborate with our clients to collect detailed requirements on how they want to get their APIs developed. ',
  },
  {
    title: 'Custom API Development',
    description: 'Our Shopify custom theme development includes creation of themes. These themes work flawlessly across all devices. We enhance user experience with attractive, fast, and responsive designs. These help in improving site accessibility and engagement. Also, it boosts conversions and customer satisfaction.',
  },
  {
    title: 'Custom App Development',
    description: 'The expert team of Shopify web development creates apps to enhance store functionality. This includes inventory management, custom checkout processes, or product configurators. These apps easily merge with your existing setup without any hassle. Our services include exceptional features that are sometimes not offered by other Shopify apps.',
  },
  {
    title: 'Integration with Third-Party Systems',
    description: 'We connect your Shopify store with systems like ERP, CRM, marketing tools, and more. Also, we streamline the flow of data between platforms. This decreases manual work and improves efficiency. This gives inventory updates and order processing. Also, it manages customer data, along with data synchronization.',
  },
  {
    title: 'Import and Export of Data',
    description: 'Our team efficiently transfers a huge amount of data between your Shopify store and other systems. For this, we use automated algorithms and API integrations. Moreover, we provide our clients with seamless migration, import, and export of data. This limits the loss of data or other technical errors.',
  },
  {
    title: 'Migration From/To Shopify',
    description: 'The experts safely transfer your existing store from another platform to Shopify. They keep product information, customer data, and order history safe in the migration process. With advanced technology, we have limited downtime as well. All this ensures an easy migration of the store without losing any useful information or data.',
  },
  {
    title: 'Maintenance After Deployment',
    description: 'Our experts support clients to keep their online stores running without any hassle. We check and update features to improve website performance.  Also, we keep monitoring the website for security issues, broken links, and outdated apps. We resolve issues quickly to decrease disturbance and maintain a seamless shopping experience.',
  },
];

const ShopifyServices = () => {
  return (
    <section className="shopify-services">
      <div className="container">
        <h2 className="title">Shopify Development Services We Offer</h2>

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

export default ShopifyServices;

import React from 'react';
import Header from './Header';
import { Helmet } from 'react-helmet';
import TechnicalHero from './TechnicalHero';
import TechnicalOptimize from './TechnicalOptimize';
import TechnicalStrategies from './TechnicalStrategies';
import IndustriesWeServe from './IndustriesWeServe';
import TechnicalFaq from './TechnicalFaq';
import Footer from './Footer';

function Technical() {
  return (
    <>
      <Helmet>
        <title>Technical SEO Services | Improve Website Performance</title>
        <meta name="description" content="Enhance your website’s performance with our Technical SEO services. Optimize site speed, structure & crawlability for better rankings & user experience." />
      </Helmet>
      <Header />
      <TechnicalHero />
      <TechnicalOptimize />
      <TechnicalStrategies />
      <IndustriesWeServe />
      <TechnicalFaq />
      <Footer />
      
    </>
  );
}

export default Technical;

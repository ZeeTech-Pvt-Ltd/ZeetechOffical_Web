import React from 'react';
import Header from './Header';
import { Helmet } from 'react-helmet';
import EcommerceHero from './EcommerceHero';
import EcommerceSmart from './EcommerceSmart';
import EcommerceOnline from './EcommerceOnline';
import IndustriesWeServe from './IndustriesWeServe';
import EcommerceFaq from './EcommerceFaq';
import Footer from './Footer';


function EcommerceSeo() {
  return (
    <>
    <Helmet>
        <title>E-Commerce Search Engine Optimization | ZeeTech Pro </title>
        <meta name="description" content="Leverage analytics to refine your e-commerce SEO strategy. Use data insights to optimize product pages and improve search rankings for better ROI." />
      </Helmet>
      <Header />
      <EcommerceHero />
      <EcommerceSmart />
      <EcommerceOnline />
      <IndustriesWeServe />
      <EcommerceFaq />
      <Footer />
    </>
  );
}

export default EcommerceSeo;

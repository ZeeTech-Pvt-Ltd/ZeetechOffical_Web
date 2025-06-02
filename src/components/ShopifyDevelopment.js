import React from 'react';
import Header from './Header';
import { Helmet } from 'react-helmet';
import ShopifyHero from './ShopifyHero';
import ShopifyServices from './ShopifyServices';
import ShopifyIndustry from './ShopifyIndustry';
import ShopifyProcedure from './ShopifyProcedure';
import ShopifySupport from './ShopifySupport';
import ShopifyFaq from './ShopifyFaq';
import Footer from './Footer';


function ShopifyDevelopment() {
  return (
    <>
    <Helmet>
      <title>Shopify Development Services | Shopify Development Company</title>
      <meta name="description" content="Zeetech Pro offering Shopify development services, develops high-performance, customized, and responsive Shopify stores." />
    </Helmet>
      <Header />
      <ShopifyHero />
      <ShopifyServices />
      <ShopifyIndustry />
      <ShopifyProcedure />
      <ShopifySupport />
      <ShopifyFaq />
      <Footer />
    </>
  );
}

export default ShopifyDevelopment;

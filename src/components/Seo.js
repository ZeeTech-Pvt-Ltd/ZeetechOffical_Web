import React from 'react';
import Header from './Header';
import { Helmet } from 'react-helmet';
import SeoHero from './SeoHero';
import SeoAdvantages from './SeoAdvantages';
import SeoBest from './SeoBest';
import IndustriesWeServe from './IndustriesWeServe';
import SeoFaq from './SeoFaq';
import Footer from './Footer';


function Seo() {
  return (
    <>
   <Helmet>
        <title>Search Engine Optimization Agency And Consultancy</title>
        <meta name="description" content="Boost your online presence with ZeeTech Pro's SEO consultancy. Our services include comprehensive audits, keyword targeting, and content optimization." />
      </Helmet>
      <Header />
      <SeoHero />
      <SeoAdvantages />
      <SeoBest />
      <IndustriesWeServe />
      <SeoFaq />
      <Footer />
    </>
  );
}

export default Seo;

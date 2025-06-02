import React from 'react';
import Header from './Header';
import { Helmet } from 'react-helmet';
import LocalSeoHero from './LocalSeoHero';
import LocalSeoSolution from './LocalSeoSolution';
import LocalSeoStrategies from './LocalSeoStrategies';
import IndustriesWeServe from './IndustriesWeServe';
import LocalSeoFaq from './LocalSeoFaq';
import Footer from './Footer';


function LocalSeo() {
  return (
    <>
     <Helmet>
        <title>Local Search Engine Optimization | Local SEO Agency</title>
        <meta name="description" content="Manage and optimize SEO for multiple locations with our Local SEO services. Ensure consistent branding & improved local rankings across all your business sites." />
      </Helmet>
      <Header />
      <LocalSeoHero />
      <LocalSeoSolution />
      <LocalSeoStrategies />
      <IndustriesWeServe />
      <LocalSeoFaq />
      <Footer />
    </>
  );
}

export default LocalSeo;

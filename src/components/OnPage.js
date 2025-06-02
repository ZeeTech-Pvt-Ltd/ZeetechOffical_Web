import React from 'react';
import Header from './Header';
import { Helmet } from 'react-helmet';
import OnpageHero from './OnpageHero';
import OnpageServices from './OnpageServices';
import OnpageBoost from './OnpageBoost';
import IndustriesWeServe from './IndustriesWeServe';
import OnpageFaq from './OnpageFaq';
import Footer from './Footer';


function OnPage() {
  return (
    <>
    <Helmet>
        <title>On-Page SEO Services | Drive More Revenue Organically</title>
        <meta name="description" content="Dominate search rankings and attract targeted traffic with comprehensive on-page SEO strategies that deliver measurable results." />
      </Helmet>
      <Header />
      <OnpageHero />
      <OnpageServices />
      <OnpageBoost />
      <IndustriesWeServe />
      <OnpageFaq />
      <Footer />
    </>
  );
}

export default OnPage;

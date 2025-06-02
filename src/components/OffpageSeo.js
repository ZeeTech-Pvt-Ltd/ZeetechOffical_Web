import React from 'react';
import Header from './Header';
import { Helmet } from 'react-helmet';
import OffpageHero from './OffpageHero';
import OffpageServices from './OffpageServices';
import OffpageBusiness from './OffpageBusiness';
import IndustriesWeServe from './IndustriesWeServe';
import OffpageFaq from './OffpageFaq';
import Footer from './Footer';


function OffpageSeo() {
  return (
    <>
      <Helmet>
        <title>On-Page SEO Services | Drive More Revenue Organically</title>
        <meta name="description" content="Dominate search rankings and attract targeted traffic with comprehensive on-page SEO strategies that deliver measurable results." />
      </Helmet>
      <Header />
      <OffpageHero />
      <OffpageServices />
      <OffpageBusiness />
      <IndustriesWeServe />
      <OffpageFaq />
      <Footer />
    </>
  );
}

export default OffpageSeo;

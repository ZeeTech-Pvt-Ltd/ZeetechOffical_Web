import React from 'react';
import Header from './Header';
import { Helmet } from 'react-helmet';
import EnterpriseHero from './EnterpriseHero';
import EnterpriseBusiness from './EnterpriseBusiness';
import EnterpriseLevel from './EnterpriseLevel';
import IndustriesWeServe from './IndustriesWeServe';
import EnterpriseFaq from './EnterpriseFaq';
import Footer from './Footer';



function EnterpriseSeo() {
  return (
    <>
    <Helmet>
        <title>Enterprise SEO Solutions | ZeeTech Pro</title>
        <meta name="description" content="Achieve top search rankings with ZeeTech Pro's enterprise SEO services, specializing in content optimization, link building, and performance tracking." />
      </Helmet>
      <Header />
      <EnterpriseHero />
      <EnterpriseBusiness />
      <EnterpriseLevel />
      <IndustriesWeServe />
      <EnterpriseFaq />
      <Footer />
    </>
  );
}

export default EnterpriseSeo;

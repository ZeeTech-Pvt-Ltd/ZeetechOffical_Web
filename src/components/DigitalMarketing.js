import React from 'react';
import Header from './Header';
import { Helmet } from 'react-helmet';
import DmarketingHero from './DmarketingHero';
import DmarketingServices from './DmarketingServices';
import DmarketingBusiness from './DmarketingBusiness';
import IndustriesWeServe from './IndustriesWeServe';
import DmarketingFaq from './DmarketingFaq';
import Footer from './Footer';

const DigitalMarketing = () => {
    return (
      <>
      <Helmet>
        <title>Top Digital Marketing Agency | ZeeTech Pro </title>
        <meta name="description" content="Partner with ZeeTech Pro for tailored digital marketing solutions, including SEO, PPC, and social media strategies that align with your business goals." />
      </Helmet>
        <Header />
        <DmarketingHero />
        <DmarketingServices />
        <DmarketingBusiness />
        <IndustriesWeServe />
        <DmarketingFaq />
        <Footer />
        </>

    );
};

export default DigitalMarketing ;
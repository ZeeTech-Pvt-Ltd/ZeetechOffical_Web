import React from 'react';
import Header from './Header';
import { Helmet } from 'react-helmet';
import AppHero from './AppHero';
import AppAdvantages from './AppAdvantages';
import AppBusiness from './AppBusiness';
import AppManage from './AppManage';
import IndustriesWeServe from './IndustriesWeServe';
import AppFaq from './AppFaq';
import Footer from './Footer';

function AppDevelopment() {
  return (
    <>
    <Helmet>
        <title>Custom Mobile App Development Services</title>
        <meta name="description" content="Build secure, scalable mobile apps tailored to your business needs. Our custom mobile app development services deliver innovative solutions for iOS and Android." />
      </Helmet>
      <Header />
      <AppHero />
      <AppAdvantages />
      <AppBusiness />
      <AppManage />
      <IndustriesWeServe />
      <AppFaq />
      <Footer />
    </>
  );
}

export default AppDevelopment;

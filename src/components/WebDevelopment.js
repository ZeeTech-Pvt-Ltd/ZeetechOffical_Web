import React from 'react';
import Header from './Header';
import { Helmet } from 'react-helmet';
import WebDevelopmentServices from './WebDevelopmentServices';
import WebAdvantages from './WebAdvantages';
import CustomWebDevelopment from './CustomWebDevelopment';
import CmsDevelopment from './CmsDevelopment';
import IndustriesWeServe from './IndustriesWeServe';
import WebdevelopmentFaq from './WebdevelopmentFaq';
import Footer from './Footer';

function WebDevelopment() {
  return (
    <>
    <Helmet>
        <title>Custom Web Development Services | Web Development Solutions</title>
        <meta name="description" content="Transform your digital vision into reality with Zeetech Pro's custom web development solutions. Secure, scalable, and designed to meet your unique needs." />
      </Helmet>
      <Header />
      <WebDevelopmentServices />
      <WebAdvantages />
      <CustomWebDevelopment />
      <CmsDevelopment />
      <IndustriesWeServe />
      <WebdevelopmentFaq />
      <Footer />
      
    </>
  );
}

export default WebDevelopment;

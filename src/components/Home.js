
import React from 'react';
import Header from './Header';
import { Helmet } from 'react-helmet';
import Hero from './Hero';
import YouKnow from './YouKnow';
import Services from './Services';
import StandardIndusty from './StandardIndustry';
import Industry from './Industry';
import Technologies from './Technologies';
import TestimonialSlider from './TestimonialSlider';
import ContactSection from './contactsection';
import Footer from './Footer';

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Zeetech Pro | Custom Software Development Services</title>
      <meta name="description" content="Zeetech Pro offers top-tier custom software development services, providing secure and scalable solutions to meet your business goals." />
    </Helmet>
      <Header />
      <Hero />
      <YouKnow />
      <Services />
      <StandardIndusty />
      <Industry />
      <Technologies />
      <TestimonialSlider />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;

import React from 'react';
import Header from './Header';
import MainservicesHero from './MainservicesHero';
import Journey from './Journey';
import ServicesArchive from './ServicesArchive';
import ChooseZeetech from './ChooseZeetech';
import Footer from './Footer';


function MainServices() {
  return (
    <>
      <Header />
      <MainservicesHero/>
      <Journey/>
      <ServicesArchive/>
      <ChooseZeetech />
      <Footer />
    </>
  );
}

export default MainServices;

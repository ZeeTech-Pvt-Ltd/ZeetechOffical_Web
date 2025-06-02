import React from 'react';
import Header from './Header';
import { Helmet } from 'react-helmet';
import DevopsHero from './DevopsHero';
import DevopsServices from './DevopsServices';
import DevopsCompony from './DevopsCompony';
import DevopsTrust from './DevopsTrust';
import DevopsFaq from './DevopsFaq';
import Footer from './Footer';

function Devops() {
  return (
    <>
    <Helmet>
     <title>DevOps Services and Solutions | DevOps Consulting Company</title>
     <meta name="description" content="Zeetech Pro offers high-end DevOps solutions and consulting services to optimize & automate your IT processes, enhancing efficiency and performance." />
    </Helmet>
      <Header />
      <DevopsHero />
      <DevopsServices  />
      <DevopsCompony />
      <DevopsTrust />
      <DevopsFaq />
      <Footer />
    </>
  );
}

export default Devops;

import React from "react";
import Header from "./Header";
import { Helmet } from "react-helmet";
import ApiHero from "./ApiHero";
import ApiServices from "./ApiServices";
import ApiCompony from "./ApiCompony";
import ApiIndustry from "./ApiIndustry";
import ApiApproach from "./ApiApproach";
import ApiSecure from "./ApiSecure";
import ApiFaq from "./ApiFaq";
import Footer from "./Footer";

function ApiIntegration() {
    return (
      <>
      <Helmet>
       <title>Custom API Integration Services And Solutions | Zeetech Pro </title>
       <meta name="description" content="Enhance your business with our custom API integration services and solutions, offering seamless connectivity and streamlined workflows for better efficiency." />
      </Helmet>
      <Header />
      <ApiHero />
      <ApiServices />
      <ApiCompony />
      <ApiIndustry />
      <ApiApproach />
      <ApiSecure />
      <ApiFaq />
      <Footer />
      </>
    );
};

export default ApiIntegration;
import React from "react";
import Header from "./Header";
import { Helmet } from "react-helmet";
import AiintegrationHero from "./AiintegrationHero";
import AiAgency from "./AiAgency";
import AiCompony from "./AiCompony";
import AiIndustry from "./AiIndustry";
import AiProcedure from "./AiProcedure";
import AiGrowth from "./AiGrowth";
import AiFaq from "./AiFaq";
import Footer from "./Footer";

function AiIntegration() {
    return (
      <>
      <Helmet>
       <title>AI Integration Services | Scalable AI Automation Solutions</title>
       <meta name="description" content="We specialize in seamlessly integrating advanced AI technologies like machine learning, NLP and predictive analytics to drive innovation." />
      </Helmet>
      <Header />
      <AiintegrationHero />
      <AiAgency />
      <AiCompony />
      <AiIndustry />
      <AiProcedure />
      <AiGrowth />
      <AiFaq />
      <Footer />
      </>
    );
};

export default AiIntegration;
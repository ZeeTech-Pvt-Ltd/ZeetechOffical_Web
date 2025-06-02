import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // ✅ Make sure path is correct
import { Helmet } from 'react-helmet';
import Home from './components/Home';
import WebDevelopment from './components/WebDevelopment';
import AppDevelopment from './components/AppDevelopment';
import Seo from './components/Seo';
import DigitalMarketing from './components/DigitalMarketing';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import LocalSeo from './components/LocalSeo';
import EnterpriseSeo from './components/EnterpriseSeo';
import EcommerceSeo from './components/EcommerceSeo';
import OnPage from './components/OnPage';
import OffpageSeo from './components/OffpageSeo';
import Technical from './components/Technical';
import MainServices from './components/MainServices';
import ApiIntegration from './components/ApiIntegration';
import AiIntegration from './components/AiIntegration';
import Devops from './components/Devops';
import ShopifyDevelopment from './components/ShopifyDevelopment';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsCondition from './components/TermsCondition';

function App() {
  return (
    <>
      <Helmet>
        <meta name="google-site-verification" content="63XGTzkx5zzr8sR34gEibPHXPuit5gYdQfIeQqCObX8" />
      </Helmet>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web-development-services" element={<WebDevelopment />} />
          <Route path="/app-development-services" element={<AppDevelopment />} />
          <Route path="/seo-agency-and-consultancy" element={<Seo />} />
          <Route path="/digital-marketing-services" element={<DigitalMarketing />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/local-seo-services" element={<LocalSeo />} />
          <Route path="/enterprise-seo" element={<EnterpriseSeo />} />
          <Route path="/ecommerce-seo-services" element={<EcommerceSeo />} />
          <Route path="/onpage-seo-services" element={<OnPage />} />
          <Route path="/offpage-seo-services" element={<OffpageSeo />} />
          <Route path="/technical-seo-services" element={<Technical />} />
          <Route path="/our-services" element={<MainServices />} />
          <Route path="/api-integration" element={<ApiIntegration />} />
          <Route path="/ai-integration" element={<AiIntegration />} />
          <Route path="/devops" element={<Devops />} />
          <Route path="/shopify-development" element={<ShopifyDevelopment />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-&-conditions" element={<TermsCondition />} />
        </Routes>
      </Router>
    </>
  );
}


export default App;

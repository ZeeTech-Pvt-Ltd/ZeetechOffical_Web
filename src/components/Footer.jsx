import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">
          <Link to="/" className="footer-logo">
            <img src="/zeetech-logo.webp" alt="ZeeTech Logo" />
          </Link>

          <nav className="footer-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="terms-&-conditions">Terms & Conditions</a>
          </nav>

          <div className="footer-socials">
            <a href="https://www.facebook.com/profile.php?id=61556659943103" aria-label="Facebook">Facebook</a>
            <a href="https://x.com/Zeetech_7" aria-label="Twitter">Twitter</a>
            <a href="https://pk.linkedin.com/company/zeetechpro" aria-label="Instagram">Linkdin</a>
          </div>
        </div>

        <hr />

        <div className="footer-columns">

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Popular Services</h4>
            <ul>
              <li><Link to="/web-development-services">Web Development</Link></li>
              <li><Link to="/app-development-services">App Development</Link></li>
              <li><Link to="/digital-marketing-services">Digital Marketing</Link></li>
              <li><Link to="/seo-agency-and-consultancy">SEO</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Get Connected</h4>
            <ul className="contact-info">
              <li>📞 +44 770 014 0192</li>
              <li>📞 +92 301 105 0393</li>
              <li>📧 info@zeetech.pro</li>
              <li>🕒 10:00 AM – 7:00 PM</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2025 <strong>ZEE</strong>TECH PVT LTD | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

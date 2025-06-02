import React from 'react';
import './PrivacyContent.css';
const PrivacyContent = () => {
  return (
    <section className="privacy-policy section">
        <div className='privacy-hero'>
            <div className='privacy-overlay'>
          <h1 className="policy-title">Privacy Policy</h1>
          </div>
        </div>
      <div className="container pt-5">
        
        <div className="policy-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to ZeeTech. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services. Your privacy is important to us, and we are committed to protecting your personal data.
          </p>
        </div>

        <div className="policy-section">
          <h2>2. Information We Collect</h2>
          <p>We may collect and process the following types of data:</p>
          <ul>
            <li>Personal identification information (e.g., name, email, phone number)</li>
            <li>Usage data and analytics (e.g., IP address, browser type, device information)</li>
            <li>Any additional information you provide voluntarily via forms or email</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>3. How We Use Your Information</h2>
          <p>Your data is used to:</p>
          <ul>
            <li>Deliver and maintain our services</li>
            <li>Improve user experience and optimize performance</li>
            <li>Communicate with you regarding updates, promotions, or support</li>
            <li>Ensure compliance with legal obligations</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>4. Data Sharing and Disclosure</h2>
          <p>
            We do not sell or rent your data. We may share information with trusted partners and service providers who assist in operating our website and services. We ensure all third parties respect your privacy and comply with applicable laws.
          </p>
        </div>

        <div className="policy-section">
          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access or update your personal information</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>To exercise these rights, please contact us at support@zeetech.com.</p>
        </div>

        <div className="policy-section">
          <h2>6. Cookies</h2>
          <p>
            We use cookies to improve your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings.
          </p>
        </div>

        <div className="policy-section">
          <h2>7. Data Security</h2>
          <p>
            We implement strict security measures to protect your data from unauthorized access or disclosure. However, please note that no method of transmission over the internet is 100% secure.
          </p>
        </div>

        <div className="policy-section">
          <h2>8. Changes to This Policy</h2>
          <p>
            ZeeTech reserves the right to update this Privacy Policy at any time. Changes will be reflected on this page, and we encourage you to review it periodically.
          </p>
        </div>

        <div className="policy-section">
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p><strong>Email:</strong> support@zeetech.com</p>
          <p><strong>Website:</strong> www.zeetech.com</p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;

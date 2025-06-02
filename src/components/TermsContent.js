import React from 'react';
import './TermsContent.css'; // Reusing the same CSS for consistent styling

const TermsContent = () => {
  return (
    <section className="terms section">
      <div className='terms-hero'>
        <div className='terms-overlay'>
          <h1 className="terms-title">Terms & Conditions</h1>
        </div>
      </div>

      <div className="container pt-5">
        <div className="terms-section">
          <h2>1. Introduction</h2>
          <p>
            These Terms and Conditions ("Terms") govern your use of the ZeeTech website and services. By accessing or using our services, you agree to comply with and be bound by these Terms.
          </p>
        </div>

        <div className="terms-section">
          <h2>2. Use of Website</h2>
          <p>
            You must be at least 18 years old to use this site. You agree not to use the website for any unlawful or prohibited purpose.
          </p>
        </div>

        <div className="terms-section">
          <h2>3. Intellectual Property</h2>
          <p>
            All content, including text, images, logos, and software, is the property of ZeeTech or its content suppliers and is protected by applicable copyright and trademark laws.
          </p>
        </div>

        <div className="terms-section">
          <h2>4. User Conduct</h2>
          <p>
            You agree not to post or transmit any material that is unlawful, harmful, threatening, abusive, defamatory, or otherwise objectionable.
          </p>
        </div>

        <div className="terms-section">
          <h2>5. Limitation of Liability</h2>
          <p>
            ZeeTech is not liable for any damages arising from your use of the website. This includes direct, indirect, incidental, punitive, or consequential damages.
          </p>
        </div>

        <div className="terms-section">
          <h2>6. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party sites. We do not control these websites and are not responsible for their content or practices.
          </p>
        </div>

        <div className="terms-section">
          <h2>7. Termination</h2>
          <p>
            We reserve the right to terminate or suspend access to our website without prior notice for conduct that we believe violates these Terms or is harmful to other users.
          </p>
        </div>

        <div className="terms-section">
          <h2>8. Changes to Terms</h2>
          <p>
            We reserve the right to update or modify these Terms at any time without prior notice. It is your responsibility to review these Terms periodically.
          </p>
        </div>

        <div className="terms-section">
          <h2>9. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of your local jurisdiction, without regard to its conflict of law principles.
          </p>
        </div>

        <div className="terms-section">
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          <p><strong>Email:</strong> support@zeetech.com</p>
          <p><strong>Website:</strong> www.zeetech.com</p>
        </div>
      </div>
    </section>
  );
};

export default TermsContent;

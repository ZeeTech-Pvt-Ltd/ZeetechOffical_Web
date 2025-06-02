import React from "react";
import './ContactSection.css';

const contactsection = () => {
  return (
    <div className="bg-primary text-white py-5 px-3 rounded-4 m-4  contact-sec ">
      <div className="container">
        <div className="row d-flex aligin-items-center justify-ontent-center  contact-left-sec">
          {/* Left Text Content */}
          <div className="col-lg-6 mb-4 d-flex flex-column justify-content-center">
            <h2 className="fw-bold contact-heading">Say Hello to Fresh Ideas at <span>ZeeTech</span></h2>
            <p className="mt-4">
              Got a project idea or need help with digital solutions? At ZeeTech, we turn your ideas into reality with high-performing, modern web and mobile services. Whether you want a stunning website, a powerful mobile app, proficient SEO, or a custom digital plan exclusively made for your business, our friendly team is ready to help.
            </p>
            <p>
              We bring new life to your business through creativity and high functionality. We present easy-to-use, operational solutions that help your business flourish and stand out online. We will understand your needs and objectives to develop a plan that fits your vision perfectly. Let’s collaborate to create something fantastic and impactful!
            </p>
          </div>

          {/* Right Contact Form */}
          <div className="col-lg-6">
            <form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="782baac0-b722-48c8-98c0-f23f2252e990" />

  <div class="row g-3">
    <div class="col-md-6 input-sec">
      <label class="form-label">First Name</label>
      <input type="text" class="form-control" name="first_name" placeholder="First Name" required />
    </div>
    <div class="col-md-6 input-sec">
      <label class="form-label">Last Name</label>
      <input type="text" class="form-control" name="last_name" placeholder="Last Name" required />
    </div>
    <div class="col-md-6 input-sec">
      <label class="form-label">Phone <span class="text-danger">*</span></label>
      <input type="tel" class="form-control" name="phone" required placeholder="Phone" />
    </div>
    <div class="col-md-6 input-sec">
      <label class="form-label">Email <span class="text-danger">*</span></label>
      <input type="email" class="form-control" name="email" required placeholder="Email" />
    </div>
    <div class="col-12 input-sec">
      <label class="form-label">Message <span class="text-danger">*</span></label>
      <textarea class="form-control" name="message" rows="5" required placeholder="Message"></textarea>
    </div>

    <input type="hidden" name="redirect" value="https://web3forms.com/success" />

    <div class="col-12">
      <button type="submit" class="btn submit-btn w-100 text-white fw-bold">Submit</button>
    </div>
  </div>
</form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default contactsection;

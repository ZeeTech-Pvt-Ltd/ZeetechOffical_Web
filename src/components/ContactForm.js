import React from "react";
import './ContactForm.css';


const ContactForm = () => {
  return (
    <div className="bg-primary text-white py-5 px-3 rounded-4 m-4  contact-form-sec">
      <div className="container">
        <div className="row d-flex aligin-items-center justify-ontent-center  contact-form-left-sec">
          {/* Left Text Content */}
          <div className="col-lg-6 mb-4 d-flex flex-column justify-content-center">
            <h2 className="fw-bold contact-form-heading">Send Us a Message</h2>
            <p className="mt-4">
            Have a question or want to discuss a project? Fill out the form below, and our team will get back to you shortly.
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

export default ContactForm;

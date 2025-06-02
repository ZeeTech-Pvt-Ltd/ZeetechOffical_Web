import React from 'react';
import './ContactInfo.css';


const ContactInfo = () => {
  return (
    <div className='contactinfo-head d-flex flex-column align-items-center justify-content-center p-3'>
        <div className='contactinfo-inner-points px-3 boxed-container d-flex justify-content-start align-items-center py-2 '>
            <div className='contactinfo-point1 d-flex flex-column'>
                <div className='contactinfo-point-image'>
                    <img src="/email.png" alt="Mail"></img>
                </div>
                <div className='contactinfo-point-content'>
                    <p><b>General Inquiries:</b> info@zeetech.pro<br></br>
                          <b>Career:</b> career@zeetech.pro<br></br>
                          <b>Support:</b> support@zeetech.pro</p>
                </div>
            </div>
            <div className='contactinfo-point2 d-flex flex-column'>
                <div className='point-image'>
                <img src="/phone-call.png" alt="Phone"></img>
                </div>
                <div className='contactinfo-point-content'>
                    <p><b>+44 770 014 0192</b><br></br>
                       <b>+923011050393</b>
                    </p>
                </div>
            </div>
            <div className='contactinfo-point3 d-flex flex-column'>
                <div className='point-image'>
                <img src="\clock.png" alt="Schedual"></img>
                </div>
                <div className='contactinfo-point-content'>
                    <p><b>Monday - Friday : 10:00 AM - 7:00 PM</b><br></br>
                    <b>Saturday-Sunday : Close</b>
                    </p>
                </div>
            </div>
        </div>

    </div>

  );
}

export default ContactInfo;
import React from 'react';
import './WhoWeAre.css';


const WhoWeAre = () => {
  return (
    <div className='main-head d-flex flex-column align-items-center justify-content-center '>
        <div className='content'>
            <h2 className='text-center'>Who We Are</h2>
            <p className='text-center' >At ZeeTech, we’re more than just a tech company — we’re a team of passionate professionals dedicated to building smart digital solutions that make an impact. With expertise in web development, mobile apps, custom design, and digital strategy, we partner with forward-thinking brands to turn ideas into powerful, scalable realities.
            Our approach is rooted in collaboration, creativity, and a commitment to excellence — because when you grow, we grow.</p>
        </div>
        <div className='inner-points d-flex flex-wrap px-3 boxed-container d-flex justify-content-center  py-2 '>
            <div className='point1 d-flex'>
                <div className='point-image'>
                    <img src="leadership.webp" alt="Expert Team"></img>
                </div>
                <div className='point-content'>
                    <h3>Expert Team</h3>
                    <p>Developers, designers, and strategists who are passionate about quality and performance.</p>
                </div>
            </div>
            <div className='point2 d-flex'>
                <div className='point-image'>
                <img src="solution.webp" alt="Expert Team"></img>
                </div>
                <div className='point-content'>
                    <h3>Scalable Solutions</h3>
                    <p>From startups to enterprises, we create systems that grow with you.</p>
                </div>
            </div>
            <div className='point3 d-flex'>
                <div className='point-image'>
                <img src="support.webp" alt="Expert Team"></img>
                </div>
                <div className='point-content'>
                    <h3>End-to-End Support</h3>
                    <p>From ideation to launch — and beyond — we’re with you at every step.</p>
                </div>
            </div>
        </div>

    </div>

  );
}

export default WhoWeAre;
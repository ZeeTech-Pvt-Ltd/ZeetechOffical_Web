import React from 'react';
import './AboutHero.css';

const AboutHero = () => {
  return (
    <div className='main-hero d-flex flex-wrap p-5 justify-content-center'>
      <div className='left-content'>
        <div className='inner-content'>
          <h2>About Us</h2>
          <p>
            At ZeeTech, we blend creativity, code, and cutting-edge solutions to turn your ideas into reality.
            From sleek websites to powerful mobile apps, our team is on a mission to craft digital experiences
            that drive growth and spark success. We don’t just build tech — we build trust, partnerships, and the future.
          </p>
        </div>
      </div>
      <div className='right-content'>
        <img 
          src="/about team.webp" 
          alt="About Us" 
        />
      </div>
    </div>

  );
};

export default AboutHero;

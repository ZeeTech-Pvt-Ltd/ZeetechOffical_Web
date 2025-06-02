import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSeoOpen, setMobileSeoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMenuOpen(!menuOpen);
  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileSeoOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="boxed-container d-flex justify-content-between align-items-center py-2">
        <div className="logo text-white fw-bold fs-3">
          <Link to="/">
            <img src="/zeetech-logo.webp" alt="ZeeTech Logo" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
       <div className="hamburger d-md-none" onClick={toggleMobileMenu}>
  {menuOpen ? '✖' : '☰'}
</div>

        {/* Desktop Menu */}
        <nav className="nav-desktop d-none d-md-block">
          <ul className="nav-links-desktop">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li className="dropdown">
              <Link to="/our-services"><span className="dropdown-toggle">Services</span></Link>
              <ul className="dropdown-menu">
                <li><Link to="/web-development-services">Web Development</Link></li>
                <li><Link to="/app-development-services">App Development</Link></li>
                <li><Link to="/digital-marketing-services">Digital Marketing</Link></li>
                <li className="dropdown">
                  <Link to="/seo-agency-and-consultancy"><span className="dropdown-toggle">SEO Agency </span></Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/local-seo-services">Local SEO</Link></li>
                    <li><Link to="/onpage-seo-services">On Page SEO</Link></li>
                    <li><Link to="/offpage-seo-services">Off Page SEO</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </nav>

        {/* Mobile Menu */}
        <nav className={`nav-mobile d-md-none ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to="/about-us" onClick={closeMobileMenu}>About Us</Link></li>
            <li>
              <span className='d-flex justify-content-between' onClick={() => setMobileServicesOpen(!mobileServicesOpen)}> <a href="our-services">Services</a>  ⏷</span>
              {mobileServicesOpen && (
                <ul className="dropdown-sub">
                  <li><Link to="/web-development-services" onClick={closeMobileMenu}>Web Development</Link></li>
                  <li><Link to="/app-development-services" onClick={closeMobileMenu}>App Development</Link></li>
                  <li><Link to="/digital-marketing-services" onClick={closeMobileMenu}>Digital Marketing</Link></li>
                  <li>
                    <span className='d-flex justify-content-between' onClick={() => setMobileSeoOpen(!mobileSeoOpen)}> <a href="/seo-agency-and-consultancy">SEO Agency & Consultancy</a>⏷</span>
                    {mobileSeoOpen && (
                      <ul className="dropdown-sub">
                        <li><Link to="/local-seo-services" onClick={closeMobileMenu}>Local SEO</Link></li>
                        <li><Link to="/onpage-seo-services" onClick={closeMobileMenu}>On Page SEO</Link></li>
                        <li><Link to="/offpage-seo-services" onClick={closeMobileMenu}>Off Page SEO</Link></li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
            <li><Link to="/contact-us" onClick={closeMobileMenu}>Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

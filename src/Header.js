import React from 'react';
import './Header.css';

function Header({ activePage }) {
  const handleMenuToggle = () => {
    const navlinks = document.getElementById('navlinks');
    navlinks?.classList.toggle('open');
  };

  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <span>📞 <a href="tel:+918989550909">+91 89895 50909</a> &nbsp;|&nbsp; <a href="tel:+918668558349">+91 86685 58349</a></span>
          <span>✉️ <a href="mailto:info@alpesaeducationservices.com">info@alpesaeducationservices.com</a> &nbsp;|&nbsp; 🌟 Spring &amp; Fall Intakes Open</span>
        </div>
      </div>

      <header className="site-header">
        <nav className="nav-inner">
          <a href="#/" className="brand">
            <span className="brand-mark">A</span>
            <span className="brand-name">Alpesa Education<small>Services</small></span>
          </a>
          <button className="menu-toggle" onClick={handleMenuToggle}>☰</button>
          <div className="nav-links" id="navlinks">
            <a href="#/" className={activePage === 'home' ? 'active' : ''}>Home</a>
            <a href="#about" className={activePage === 'about' ? 'active' : ''}>About</a>
            <a href="#services" className={activePage === 'services' ? 'active' : ''}>Services</a>
            <a href="#legal-services" className={activePage === 'legal-services' ? 'active' : ''}>Legal Services</a>
            <a href="#partners" className={activePage === 'partners' ? 'active' : ''}>Partners</a>
            <a href="#study-destinations" className={activePage === 'study-destinations' ? 'active' : ''}>Study Destinations</a>
            <a href="#visa-services" className={activePage === 'visa-services' ? 'active' : ''}>Visa Services</a>
            <a href="#testimonials" className={activePage === 'testimonials' ? 'active' : ''}>Testimonials</a>
            <a href="#contact" className={activePage === 'contact' ? 'active' : ''}>Contact</a>
            <a href="mailto:info@alpesaeducationservices.com" className="nav-cta">Free Consultation</a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

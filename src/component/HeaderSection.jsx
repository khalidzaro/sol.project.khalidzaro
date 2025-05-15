import React, { useState } from 'react';
import './HeaderSection.css';
import pattern from '../assets/imgs/icons8-clubs.gif';

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="hero">
      <nav className="nav">
        <div className="nav-logo">Haptic</div>
        <button 
          className="nav-menu" 
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        {open && (
          <div className="nav-dropdown-custom">
            <ul className="nav-links">
              <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
              <li><a href="#work" onClick={() => setOpen(false)}>Work</a></li>
              <li><a href="#pricing" onClick={() => setOpen(false)}>Pricing</a></li>
              <li><a href="#careers" onClick={() => setOpen(false)}>Careers</a></li>
            </ul>
            <button 
              className="nav-close" 
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
        )}
      </nav>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1>We help ambitious teams turn bold visions into lasting impact.</h1>
        </div>
        <div className="hire-box">
          <img
            src={pattern}
            alt="Decorative pattern"
            className="hire-box-pattern"
            loading="lazy"
          />
          <div className="hire-box-text">
            <span className="hire-box-status">Hiring</span>
            <span className="hire-box-role">Senior Designer</span>
          </div>
          <button 
            className="hire-box-button"
            aria-label="View job position"
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-cover-section">
        <img src="/cover.png" alt="Cover" className="cover-image" />
        <div className="cover-overlay"></div>
        
        <div className="hero-content-overlay">
          <div className="hero-text-content">
            <h1 className="hero-title">Nuwangi Mahesha</h1>
            <p className="hero-subtitle">Full Stack Developer | Frontend Specialist | UI/UX Enthusiast</p>
          </div>
          
          <div className="hero-profile-section">
            <img src="/profile.jpg" alt="Nuwangi Mahesha" className="profile-image" />
          </div>
        </div>
      </div>

      <div className="hero-description-section">
        <div className="hero-description-container">
          <p className="hero-description">
            I create beautiful, responsive web applications with modern technologies. 
            Passionate about building intuitive user interfaces and scalable solutions.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="https://github.com/NuwangiMahesha" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

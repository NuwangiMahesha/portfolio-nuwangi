import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy; {currentYear} Nuwangi Mahesha. All rights reserved.</p>
          <div className="social-links">
            <a href="https://github.com/NuwangiMahesha" target="_blank" rel="noopener noreferrer" title="GitHub">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/nuwangi-ariyasingha-77a1a53a0" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

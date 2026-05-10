import React from 'react';
import './CV.css';

function CV() {
  const cvPath = `${process.env.PUBLIC_URL}/CV/Nuwangi_Ariyasingha_CV (1).pdf`;

  return (
    <section id="cv" className="cv-section">
      <div className="cv-container">
        <div className="cv-header">
          <h2 className="cv-title">Curriculum Vitae</h2>
          <p className="cv-subtitle">View and download my professional resume</p>
        </div>

        <div className="cv-content">
          <div className="cv-preview">
            <iframe
              src={cvPath}
              title="Nuwangi Ariyasingha CV"
              className="cv-iframe"
            />
          </div>

          <div className="cv-actions">
            <a 
              href={cvPath} 
              download="Nuwangi_Ariyasingha_CV.pdf"
              className="cv-button download"
            >
              <span className="button-icon">⬇</span>
              Download CV
            </a>
            <a 
              href={cvPath} 
              target="_blank" 
              rel="noopener noreferrer"
              className="cv-button view"
            >
              <span className="button-icon">👁</span>
              View Full Screen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CV;

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false });

    // EmailJS configuration
    const serviceID = 'service_portfolio'; // You'll need to replace this
    const templateID = 'template_portfolio'; // You'll need to replace this
    const publicKey = 'YOUR_PUBLIC_KEY'; // You'll need to replace this

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'nuwangimahesha@gmail.com'
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus({ submitting: false, submitted: true, error: false });
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus({ submitting: false, submitted: false, error: false });
        }, 5000);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setStatus({ submitting: false, submitted: false, error: true });
        
        // Reset error message after 5 seconds
        setTimeout(() => {
          setStatus({ submitting: false, submitted: false, error: false });
        }, 5000);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's connect and discuss your next project</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>GitHub</h3>
              <a href="https://github.com/NuwangiMahesha" target="_blank" rel="noopener noreferrer">
                github.com/NuwangiMahesha
              </a>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <a href="mailto:nuwangimahesha@gmail.com">nuwangimahesha@gmail.com</a>
            </div>
            <div className="info-item">
              <h3>Location</h3>
              <p>Sri Lanka</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={status.submitting}>
              {status.submitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {status.submitted && (
              <div className="status-message success">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {status.error && (
              <div className="status-message error">
                ✗ Failed to send message. Please try again or email me directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

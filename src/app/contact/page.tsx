'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">Get In Touch</h1>
              <p className="lead mb-0">
                Ready to start your next project? Let's discuss how I can help bring your ideas to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-5 bg-body-secondary">
        <div className="container">
          <div className="row g-5">
            {/* Contact Details */}
            <div className="col-lg-4">
              <h2 className="display-6 fw-bold mb-4">Contact Information</h2>
              <div className="d-flex flex-column gap-4">
                <div className="d-flex align-items-center">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div>
                    <h6 className="mb-1">Email</h6>
                    <a href="mailto:roger.twan@gmail.com" className="text-decoration-none">
                      roger.twan@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div>
                    <h6 className="mb-1">Phone</h6>
                    <a href="tel:+1234567890" className="text-decoration-none">
                      +1 (613) 862-1168
                    </a>
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div>
                    <h6 className="mb-1">Location</h6>
                    <p className="mb-0">Ottawa, Ontario, Canada</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-5">
                <h5 className="mb-3">Follow Me</h5>
                <div className="d-flex gap-3">
                  <a href="https://www.linkedin.com/in/roger-twan/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                      <i className="bi bi-linkedin"></i>
                    </div>
                  </a>
                  <a href="https://github.com/roger-twan" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <div className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                      <i className="bi bi-github"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-8">
              <h2 className="display-6 fw-bold mb-4">Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="subject" className="form-label">Subject *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-lg">
                      <i className="bi bi-send me-2"></i>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-5 fw-bold">What I Can Help You With</h2>
              <p className="lead">Professional services tailored to your needs</p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-laptop display-6"></i>
                  </div>
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text">
                    Custom websites and web applications built with modern technologies and best practices.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-phone display-6"></i>
                  </div>
                  <h5 className="card-title">Mobile Development</h5>
                  <p className="card-text">
                    Cross-platform mobile applications for iOS and Android platforms.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-palette display-6"></i>
                  </div>
                  <h5 className="card-title">UI/UX Design</h5>
                  <p className="card-text">
                    User-centered design solutions that enhance user experience and drive engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="py-5 bg-body-secondary">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-4">Current Availability</h2>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm">
                    <div className="card-body text-center">
                      <h5 className="text-success mb-3">
                        <i className="bi bi-check-circle me-2"></i>
                        Available for New Projects
                      </h5>
                      <p className="mb-0">I'm currently accepting new client work and excited to collaborate on interesting projects.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm">
                    <div className="card-body text-center">
                      <h5 className="text-primary mb-3">
                        <i className="bi bi-clock me-2"></i>
                        Response Time
                      </h5>
                      <p className="mb-0">I typically respond to inquiries within 24 hours during business days.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 

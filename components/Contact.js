'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formMessage, setFormMessage] = useState({ text: '', type: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormMessage({ text: 'Please fill in all fields.', type: 'error' })
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setFormMessage({ text: 'Please enter a valid email address.', type: 'error' })
      return
    }

    setFormMessage({ text: 'Thank you for your message! I\'ll get back to you soon.', type: 'success' })
    setFormData({ name: '', email: '', message: '' })

    setTimeout(() => {
      setFormMessage({ text: '', type: '' })
    }, 5000)
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-intro">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:gyasinimako.gh@gmail.com">gyasinimako.gh@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+233244274699">+233 24 427 4699</a>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Location</h4>
                  <p>Accra, Ghana</p>
                </div>
              </div>
            </div>
            <div className="contact-social">
              <a href="https://www.linkedin.com/in/isaac-gyasi-1a6657106/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/nimako" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
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
            <button type="submit" className="btn btn-primary">Send Message</button>
            {formMessage.text && (
              <div className={`form-message ${formMessage.type}`} id="form-message">
                {formMessage.text}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}


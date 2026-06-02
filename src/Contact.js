import React, { useState } from 'react';
import './Contact.css';
import Header from './Header';
import Footer from './Footer';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interested: 'Study abroad — undergraduate',
    destination: 'Not sure yet — advise me',
    message: ''
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

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      interested: formData.interested,
      destination: formData.destination,
      message: formData.message,
    };

    emailjs.send(
      'service_05nr2ty',
      'template_bfytf76',
      templateParams,
      '8_xFG2HwKPgy6--IR'
    )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);

          alert('Thank you for your enquiry! We will get back to you soon.');

          setFormData({
            fullName: '',
            email: '',
            phone: '',
            interested: 'Study abroad — undergraduate',
            destination: 'Not sure yet — advise me',
            message: ''
          });
        },
        (error) => {
          console.log('FAILED...', error);

          alert('Failed to send enquiry');
        }
      );
  };
  return (
    <>
      <Header activePage="contact" />

      <header className="hero">
        <div className="hero-inner">
          <span className="eyebrow">Contact</span>
          <h1>Let's start your <em>study-abroad journey</em>.</h1>
          <p className="hero-lede">Book a free consultation or send us a message. Our counsellors typically respond within one business day.</p>
        </div>
      </header>

      <section className="section">
        <div className="contact-grid">
          <div>
            <div className="section-label">Send a Message</div>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Request a <em>free consultation</em></h2>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label>Full name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label>Phone (WhatsApp)</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 ..."
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label>Interested in</label>
                <select
                  name="interested"
                  value={formData.interested}
                  onChange={handleChange}
                >
                  <option>Study abroad — undergraduate</option>
                  <option>Study abroad — postgraduate / master's</option>
                  <option>PhD / research</option>
                  <option>Student visa guidance</option>
                  <option>Tourist / visitor visa</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="field">
                <label>Preferred destination</label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                >
                  <option>Not sure yet — advise me</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Ireland</option>
                  <option>Germany</option>
                  <option>France</option>
                  <option>Taiwan</option>
                  <option>Italy</option>
                  <option>Australia</option>
                  <option>Canada</option>
                  <option>Japan</option>
                  <option>New Zealand</option>
                  <option>Netherlands</option>
                </select>
              </div>
              <div className="field">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your goals, current education, and intended intake..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button className="btn btn-primary" type="submit">Submit Enquiry →</button>
              <div className="placeholder-note" style={{ marginTop: '18px' }}>
                <b>Note:</b> This form is front-end only. Connect it to your email/CRM or a form service (e.g. Formspree, Google Forms, or your web host's form handler) at deployment.
              </div>
            </form>
          </div>
          <div>
            <div className="section-label">Reach Us Directly</div>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Get in <em>touch</em></h2>
            <div className="info-row">
              <span className="ic">📞</span>
              <div>
                <b>Phone</b>
                <span><a href="tel:+918989550909">+91 89895 50909</a> &nbsp;·&nbsp; <a href="tel:+918668558349">+91 86685 58349</a></span>
              </div>
            </div>
            <div className="info-row">
              <span className="ic">✉️</span>
              <div>
                <b>Email</b>
                <span><a href="mailto:info@alpesaeducationservices.com">info@alpesaeducationservices.com</a></span>
              </div>
            </div>
            <div className="info-row">
              <span className="ic">🌐</span>
              <div>
                <b>Website</b>
                <span><a href="https://alpesaeducationservices.com" target="_blank" rel="noopener noreferrer">alpesaeducationservices.com</a></span>
              </div>
            </div>
            <div className="info-row">
              <span className="ic">📍</span>
              <div>
                <b>Office</b>
                <span>[Add your office address here]</span>
              </div>
            </div>
            <div className="info-row">
              <span className="ic">🕐</span>
              <div>
                <b>Hours</b>
                <span>[Add business hours, e.g. Mon–Sat, 10am–7pm]</span>
              </div>
            </div>
            <div className="card" style={{ marginTop: '24px', background: 'var(--cream)' }}>
              <h3>Prefer to talk now?</h3>
              <p>Call or WhatsApp us during business hours for a quick first conversation about your options.</p>
              <a href="tel:+918989550909" className="btn btn-dark">Call Now →</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;

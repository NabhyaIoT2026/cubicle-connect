import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const set = k => e => setForm({ ...form, [k]: e.target.value });

  return (
    <div className="page">
      <section className="contact-hero section">
        <div className="container">
          <span className="overline anim-fadeUp d1">Contact</span>
          <h1 className="display anim-fadeUp d2">
            Get in <em>touch.</em>
          </h1>
          <p className="body-text anim-fadeUp d3" style={{ marginTop: '1.5rem' }}>
            Whether you're looking for talent or your next opportunity — we're here to help.
          </p>
        </div>
      </section>

      <hr className="rule" />

      <section className="section">
        <div className="container">
          <div className="contact-grid">

            {/* INFO */}
            <div className="contact-info">
              <div className="contact-detail">
                <span className="contact-detail__label">Email</span>
                <span>hello@cubicleconnect.in</span>
              </div>
              <div className="contact-detail">
                <span className="contact-detail__label">Phone</span>
                <span>+91 98000 00000</span>
              </div>
              <div className="contact-detail">
                <span className="contact-detail__label">Office</span>
                <span>Koramangala, Bengaluru<br />Karnataka — 560034</span>
              </div>
              <div className="contact-detail">
                <span className="contact-detail__label">Hours</span>
                <span>Mon – Sat, 9:00 AM – 7:00 PM IST</span>
              </div>
            </div>

            {/* FORM */}
            <div className="contact-form-box anim-fadeUp d2">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success__line" />
                  <h3>Message Sent</h3>
                  <p>Thank you for reaching out. We'll respond within one business day.</p>
                  <button className="btn btn-outline" style={{ marginTop: '1.5rem' }} onClick={() => setSubmitted(false)}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                  <div className="contact-fields">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" required placeholder="Your name" value={form.name} onChange={set('name')} />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" required placeholder="you@email.com" value={form.email} onChange={set('email')} />
                    </div>
                    <div className="form-group">
                      <label>Message</label>
                      <textarea required placeholder="How can we help?" value={form.message} onChange={set('message')} />
                    </div>
                    <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

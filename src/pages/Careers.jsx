import { useState } from 'react';
import './Careers.css';

export default function Careers() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', resumeUrl: '' });
  const [submitted, setSubmitted] = useState(false);
  const set = k => e => setForm({ ...form, [k]: e.target.value });

  return (
    <div className="page">

      {/* HEADER */}
      <section className="careers-hero section">
        <div className="container">
          <span className="overline anim-fadeUp d1">Careers</span>
          <h1 className="display anim-fadeUp d2">
            Join the <em>team.</em>
          </h1>
          <p className="body-text anim-fadeUp d3" style={{ marginTop: '1.5rem' }}>
            We're always looking for driven individuals who want to shape the future of professional hiring. If that sounds like you, we'd like to hear from you.
          </p>
        </div>
      </section>

      <hr className="rule" />

      {/* WHY */}
      <section className="section-sm">
        <div className="container">
          <div className="careers-why">
            <div className="careers-why__item">
              <div className="careers-why__label">Culture</div>
              <p>A collaborative environment built on trust, accountability, and genuine care for career growth.</p>
            </div>
            <div className="careers-why__item">
              <div className="careers-why__label">Growth</div>
              <p>We invest in our people. Clear progression paths, learning budgets, and mentorship from day one.</p>
            </div>
            <div className="careers-why__item">
              <div className="careers-why__label">Work</div>
              <p>Meaningful work that directly impacts the careers of thousands of professionals across India.</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* APPLICATION FORM */}
      <section className="section">
        <div className="container">
          <div className="careers-form-layout">
            <div className="careers-form-info">
              <span className="overline">Apply Now</span>
              <h2 className="headline">Tell us about<br /><em>yourself.</em></h2>
              <p className="body-text" style={{ marginTop: '1.2rem' }}>
                Send us your details. There's no specific opening required — if you're exceptional, we'll find a place for you.
              </p>
            </div>

            <div className="careers-form-box anim-fadeUp d2">
              {submitted ? (
                <div className="form-success">
                  <div className="form-success__line" />
                  <h3>Application Received</h3>
                  <p>We appreciate your interest in Cubicle Connect. Our team will review your profile and reach out within a week.</p>
                  <button className="btn btn-outline" style={{ marginTop: '1.5rem' }} onClick={() => setSubmitted(false)}>
                    Submit Another
                  </button>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                  <div className="form-fields">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" required placeholder="Your full name" value={form.name} onChange={set('name')} />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="tel" required placeholder="+91 00000 00000" value={form.phone} onChange={set('phone')} />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" required placeholder="you@email.com" value={form.email} onChange={set('email')} />
                    </div>
                    <div className="form-group">
                      <label>Resume / LinkedIn URL</label>
                      <input type="url" required placeholder="https://linkedin.com/in/yourname" value={form.resumeUrl} onChange={set('resumeUrl')} />
                    </div>
                    <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                      Submit Application
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

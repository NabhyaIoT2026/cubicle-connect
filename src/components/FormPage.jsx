import { useState } from 'react';
import './FormPage.css';

export default function FormPage({ title, subtitle, overline, label }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', resumeUrl: '' });
  const [submitted, setSubmitted] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page">
      <section className="form-page section">
        <div className="container">
          <div className="form-page__layout">

            {/* LEFT */}
            <div className="form-page__info">
              <span className="overline anim-fadeUp d1">{overline}</span>
              <h1 className="display anim-fadeUp d2">{title}</h1>
              <p className="body-text anim-fadeUp d3" style={{ marginTop: '1.5rem' }}>{subtitle}</p>
            </div>

            {/* FORM */}
            <div className="form-page__form anim-fadeUp d3">
              {submitted ? (
                <div className="form-success">
                  <div className="form-success__line" />
                  <h3>Submission Received</h3>
                  <p>Thank you for reaching out. Our team will review your details and be in touch within 2–3 business days.</p>
                  <button className="btn btn-outline" style={{ marginTop: '1.5rem' }} onClick={() => setSubmitted(false)}>
                    Submit Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-page__fields">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={form.name}
                        onChange={set('name')}
                      />
                    </div>

                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 00000 00000"
                        value={form.phone}
                        onChange={set('phone')}
                      />
                    </div>

                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={set('email')}
                      />
                    </div>

                    <div className="form-group">
                      <label>Resume / LinkedIn URL</label>
                      <input
                        type="url"
                        required
                        placeholder="https://linkedin.com/in/yourname"
                        value={form.resumeUrl}
                        onChange={set('resumeUrl')}
                      />
                    </div>

                    <button type="submit" className="btn btn-gold form-submit">
                      {label}
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

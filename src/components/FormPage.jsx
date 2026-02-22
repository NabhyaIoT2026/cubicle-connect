import { useState } from 'react';
import './FormPage.css';

export default function FormPage({ title, subtitle, overline, label, formAction, fieldMap }) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', location: '', resumeUrl: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const body = new URLSearchParams();
    body.append(fieldMap.name,      form.name);
    body.append(fieldMap.email,     form.email);
    body.append(fieldMap.phone,     form.phone);
    body.append(fieldMap.location,  form.location);
    body.append(fieldMap.resumeUrl, form.resumeUrl);

    try {
      await fetch(formAction, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
    } catch (_) {
      // no-cors always throws — data still goes through
    } finally {
      setSubmitted(true);
      setLoading(false);
      setForm({ name: '', email: '', phone: '', location: '', resumeUrl: '' });
    }
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
                  <p>Thank you for reaching out. Our team will review your details and be in touch shortly.</p>
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
                      <label>Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={form.email}
                        onChange={set('email')}
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
                      <label>Location</label>
                      <input
                        type="text"
                        required
                        placeholder="City, State"
                        value={form.location}
                        onChange={set('location')}
                      />
                    </div>

                    <div className="form-group">
                      <label>Resume Link</label>
                      <input
                        type="url"
                        required
                        placeholder="https://drive.google.com/..."
                        value={form.resumeUrl}
                        onChange={set('resumeUrl')}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-gold form-submit"
                      disabled={loading}
                    >
                      {loading ? 'Submitting...' : label}
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
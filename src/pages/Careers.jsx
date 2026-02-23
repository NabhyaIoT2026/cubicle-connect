import './Careers.css';

export default function Careers() {
  return (
    <div className="page">

      {/* HEADER */}
      <section className="careers-hero section">
        <div className="container">
          <div className="careers-hero__content">
            <span className="overline anim-fadeUp d1">Careers</span>
            <h1 className="display anim-fadeUp d2">
              Join the <em>team.</em>
            </h1>
            <p className="body-text anim-fadeUp d3" style={{ marginTop: '1.5rem' }}>
              We're always looking for driven individuals who want to shape the future of professional hiring. If that sounds like you, we'd like to hear from you.
            </p>
          </div>

          <div className="careers-contact-info">
            <p>
              Send your resume via email or WhatsApp.
            </p>
            <p>
              <a href="mailto:careers@cubicleconnect.com">careers@cubicleconnect.com</a>
            </p>
            <p>
              <a href="https://wa.me/919372824348">+91 93728 24348</a>
            </p>
          </div>
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

    </div>
  );
}

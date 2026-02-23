import { Link } from 'react-router-dom';
import './Home.css';

const pillars = [
  { label: 'Executive Hiring', desc: 'Placing senior professionals across finance, technology, and operations.' },
  { label: 'Mid-Level Talent', desc: 'Connecting skilled specialists with companies ready to scale.' },
  { label: 'Cross-Industry', desc: 'From Startups to Enterprises - providing tailored & scalable solutions to all.' },
];

export default function Home() {
  return (
    <div className="page">

      {/* HERO */}
      <section className="home-hero">
        <div className="container">
          <div className="home-hero__content">
            <span className="overline anim-fadeUp d1">Professional Recruitment</span>
            <h1 className="display anim-fadeUp d2">
              Talent that <em>moves</em><br />companies forward.
            </h1>
            <p className="body-text anim-fadeUp d3">
              We are a specialized Human Capital consulting firm in Mumbai providing expert recruitment, compliance, and training & development services. Our professionally qualified founders bring deep cross-industry insight to drive growth for both emerging startups and established enterprises.
            </p>
            <div className="home-hero__actions anim-fadeUp d4">
              <Link to="/job-board" className="btn btn-gold">View Open Roles</Link>
              <Link to="/employers" className="btn btn-outline">Hire with Us</Link>
            </div>
          </div>
        </div>
        <div className="home-hero__line anim-fadeIn d5" />
      </section>

      <hr className="rule" />

      {/* PILLARS */}
      <section className="section">
        <div className="container">
          <span className="overline">What We Do</span>
          <h2 className="headline" style={{ marginBottom: '3.5rem' }}>
            Precision hiring,<br /><em>every time.</em>
          </h2>
          <div className="home-pillars">
            {pillars.map((p, i) => (
              <div key={i} className="home-pillar">
                <div className="home-pillar__num">0{i + 1}</div>
                <h3>{p.label}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* CTA */}
      <section className="section-sm">
        <div className="container">
          <div className="home-cta">
            <h2 className="headline"><em>Ready… Set… Go</em></h2>
            <div className="home-cta__actions">
              <Link to="/job-seekers" className="btn btn-gold">I'm Looking for Work</Link>
              <Link to="/employers" className="btn btn-outline">I'm Looking to Hire</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
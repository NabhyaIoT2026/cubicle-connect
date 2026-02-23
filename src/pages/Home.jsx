import { Link } from 'react-router-dom';
import './Home.css';

/* ── Animated SVG Icons ── */
const IconExec = () => (
  <svg className="pillar-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="15" r="7" stroke="currentColor" strokeWidth="1.4" className="ico-draw" />
    <path d="M8 42c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="ico-draw ico-d2" />
    <path d="M36 8l3 3-3 3M39 11h-8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="ico-draw ico-d3" />
  </svg>
);

const IconMid = () => (
  <svg className="pillar-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="28" width="8" height="14" rx="1" stroke="currentColor" strokeWidth="1.4" className="ico-draw" />
    <rect x="20" y="18" width="8" height="24" rx="1" stroke="currentColor" strokeWidth="1.4" className="ico-draw ico-d2" />
    <rect x="34" y="8" width="8" height="34" rx="1" stroke="currentColor" strokeWidth="1.4" className="ico-draw ico-d3" />
    <path d="M10 24l10-8 8 6 10-12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="ico-draw ico-d4" />
  </svg>
);

const IconGlobe = () => (
  <svg className="pillar-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.4" className="ico-draw" />
    <ellipse cx="24" cy="24" rx="7" ry="16" stroke="currentColor" strokeWidth="1.4" className="ico-draw ico-d2" />
    <line x1="8" y1="24" x2="40" y2="24" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="ico-draw ico-d3" />
    <line x1="11" y1="16" x2="37" y2="16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="ico-draw ico-d3" />
    <line x1="11" y1="32" x2="37" y2="32" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="ico-draw ico-d3" />
  </svg>
);

const pillarIcons = [<IconExec />, <IconMid />, <IconGlobe />];

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

        {/* Abstract geometric background */}
        <div className="home-hero__geo" aria-hidden="true">
          <svg className="geo-svg" viewBox="0 0 900 700" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Large faint circle */}
            <circle cx="680" cy="320" r="260" stroke="rgba(201,169,110,0.07)" strokeWidth="1" className="geo-circle geo-c1" />
            <circle cx="680" cy="320" r="180" stroke="rgba(201,169,110,0.05)" strokeWidth="1" className="geo-circle geo-c2" />
            <circle cx="680" cy="320" r="100" stroke="rgba(201,169,110,0.06)" strokeWidth="1" className="geo-circle geo-c3" />
            {/* Diagonal lines */}
            <line x1="500" y1="0" x2="900" y2="500" stroke="rgba(201,169,110,0.04)" strokeWidth="1" className="geo-line" />
            <line x1="560" y1="0" x2="960" y2="500" stroke="rgba(201,169,110,0.03)" strokeWidth="1" className="geo-line" />
            {/* Corner bracket top-right */}
            <path d="M820 40 L880 40 L880 100" stroke="rgba(201,169,110,0.15)" strokeWidth="1" strokeLinecap="round" className="geo-bracket geo-br1" />
            {/* Corner bracket bottom-right */}
            <path d="M820 650 L880 650 L880 590" stroke="rgba(201,169,110,0.10)" strokeWidth="1" strokeLinecap="round" className="geo-bracket geo-br2" />
            {/* Floating dot grid */}
            {[0,1,2,3,4].map(row =>
              [0,1,2,3].map(col => (
                <circle
                  key={`${row}-${col}`}
                  cx={600 + col * 36}
                  cy={100 + row * 36}
                  r="1.5"
                  fill="rgba(201,169,110,0.18)"
                  className="geo-dot"
                  style={{ animationDelay: `${(row + col) * 0.15}s` }}
                />
              ))
            )}
          </svg>
        </div>

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
                <div className="home-pillar__icon">{pillarIcons[i]}</div>
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
import './About.css';

const values = [
  { label: 'Integrity', desc: 'We act with honesty at every stage of the hiring process — for both candidates and clients.' },
  { label: 'Precision', desc: "We don't flood inboxes. We send the right people to the right roles, and nothing else." },
  { label: 'Long-term Thinking', desc: "Our goal is not to fill a vacancy — it's to build lasting professional relationships." },
];

export default function About() {
  return (
    <div className="page">

      {/* HEADER */}
      <section className="about-hero section">
        <div className="container">
          <span className="overline anim-fadeUp d1">About Us</span>
          <h1 className="display anim-fadeUp d2">
            Built on <em>people</em>,<br />driven by purpose.
          </h1>
          <p className="body-text anim-fadeUp d3" style={{ marginTop: '1.5rem' }}>
            Cubicle Connect was founded by young professionals who believed the hiring industry needed more honesty, more precision, and less noise. We combine the energy of a new firm with the rigour of seasoned professionals.
          </p>
        </div>
      </section>

      <hr className="rule" />

      {/* MISSION */}
      <section className="section">
        <div className="container">
          <div className="about-mission">
            <div>
              <span className="overline">Our Mission</span>
              <h2 className="headline"><em>Smarter</em> hiring,<br />for both sides.</h2>
            </div>
            <div className="about-mission__text">
              <p className="body-text" style={{ maxWidth: '100%' }}>
                We work with professionals at every career stage and with companies of every size. Our process is thorough, our standards are high, and our relationships are built to last.
              </p>
              <p className="body-text" style={{ maxWidth: '100%', marginTop: '1rem' }}>
                Headquartered in Bengaluru, we partner with organisations across India and internationally — bringing together the right people, at the right time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* VALUES */}
      <section className="section">
        <div className="container">
          <span className="overline">Our Values</span>
          <h2 className="headline" style={{ marginBottom: '3rem' }}>What we <em>stand for.</em></h2>
          <div className="about-values">
            {values.map((v, i) => (
              <div key={i} className="about-value">
                <div className="about-value__num">0{i + 1}</div>
                <div>
                  <h3>{v.label}</h3>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
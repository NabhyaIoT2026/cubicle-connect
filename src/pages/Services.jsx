import './Services.css';

const services = [
  {
    num: '01',
    title: 'Recruitment',
    desc: 'We identify, assess, and place the right talent — from entry-level to leadership roles. Our rigorous screening process ensures candidates align with your culture, goals, and growth trajectory.',
  },
  {
    num: '02',
    title: 'Manpower Planning',
    desc: 'Strategic workforce planning tailored to your business cycle. We help you forecast hiring needs, optimize team structures, and build a talent pipeline before the need becomes urgent.',
  },
  {
    num: '03',
    title: 'Trainings',
    desc: 'Customized training programs designed to upskill your workforce and drive performance. From onboarding modules to leadership development, we build learning that sticks.',
  },
  {
    num: '04',
    title: 'Human Capital Compliance',
    desc: 'Stay ahead of evolving labour laws and statutory requirements. We audit, advise, and implement compliant Human Capital frameworks so your business operates without legal risk.',
  },
  {
    num: '05',
    title: 'Payroll',
    desc: 'Accurate, timely, and fully compliant payroll management. We handle salary processing, statutory deductions, payslips, and year-end filings — so you never miss a deadline.',
  },
  {
    num: '06',
    title: 'Resume Writing',
    desc: 'Professionally crafted resumes that make candidates stand out. Our experts translate experience into compelling narratives that resonate with hiring managers and pass ATS filters.',
  },
  {
    num: '07',
    title: 'Corporate Counselling',
    desc: 'Confidential counselling support for employees and leadership teams. We address workplace stress, interpersonal conflicts, and performance concerns to foster a healthier, more productive environment.',
  },
];

export default function Services() {
  return (
    <div className="page">

      {/* HERO */}
      <section className="services-hero">
        <div className="container">
          <span className="overline anim-fadeUp d1">What We Offer</span>
          <h1 className="display anim-fadeUp d2">
            Our <em>Services</em>
          </h1>
          <p className="body-text services-hero__sub anim-fadeUp d3">
            End-to-end Human Capital solutions designed to support every stage of your organisation's journey — from hiring to compliance, training to wellbeing.
          </p>
        </div>
        <div className="services-hero__line anim-fadeIn d4" />
      </section>

      <hr className="rule" />

      {/* SERVICES — flowing timeline list */}
      <section className="services-list">
        <div className="container">
          <div className="services-list__label">
            <span>Our Services</span>
          </div>
          <div className="services-items">
            {services.map((s) => (
              <div key={s.num} className="service-item">
                <div className="service-item__num">{s.num}</div>
                <div className="service-item__body">
                  <h3 className="service-item__title">{s.title}</h3>
                  <p className="service-item__desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* BOTTOM CTA */}
      <section className="section-sm">
        <div className="container">
          <div className="services-cta">
            <div>
              <h2 className="headline"><em>Let's talk about</em><br />your requirements.</h2>
            </div>
            <a href="/contact" className="btn btn-gold">Get in Touch</a>
          </div>
        </div>
      </section>

    </div>
  );
}
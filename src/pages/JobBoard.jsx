import { useState } from 'react';
import './JobBoard.css';

const jobs = [
  { id: 1, title: 'Senior Product Manager', company: 'Fintech Startup', location: 'Bengaluru', type: 'Full-time', experience: '5–8 yrs', domain: 'Product' },
  { id: 2, title: 'Lead UX Designer', company: 'E-commerce Platform', location: 'Remote', type: 'Full-time', experience: '4–6 yrs', domain: 'Design' },
  { id: 3, title: 'Director of Operations', company: 'Manufacturing Co.', location: 'Pune', type: 'Full-time', experience: '10+ yrs', domain: 'Operations' },
  { id: 4, title: 'Full Stack Engineer', company: 'SaaS Company', location: 'Hyderabad', type: 'Full-time', experience: '3–5 yrs', domain: 'Engineering' },
  { id: 5, title: 'Growth Marketing Manager', company: 'D2C Brand', location: 'Mumbai', type: 'Full-time', experience: '4–7 yrs', domain: 'Marketing' },
  { id: 6, title: 'Chief Financial Officer', company: 'Series B Startup', location: 'Bengaluru', type: 'Full-time', experience: '12+ yrs', domain: 'Finance' },
  { id: 7, title: 'Data Engineer', company: 'Analytics Firm', location: 'Remote', type: 'Contract', experience: '3–5 yrs', domain: 'Engineering' },
  { id: 8, title: 'HR Business Partner', company: 'Multinational', location: 'Delhi NCR', type: 'Full-time', experience: '6–9 yrs', domain: 'HR' },
];

const domains = ['All', 'Engineering', 'Product', 'Design', 'Marketing', 'Operations', 'Finance', 'HR'];

export default function JobBoard() {
  const [active, setActive] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = jobs.filter(j => {
    const matchDomain = active === 'All' || j.domain === active;
    const matchQuery = j.title.toLowerCase().includes(query.toLowerCase()) ||
      j.company.toLowerCase().includes(query.toLowerCase()) ||
      j.location.toLowerCase().includes(query.toLowerCase());
    return matchDomain && matchQuery;
  });

  return (
    <div className="page">
      <section className="jb-header section">
        <div className="container">
          <span className="overline anim-fadeUp d1">Open Positions</span>
          <h1 className="display anim-fadeUp d2">
            Roles available<br /><em>right now.</em>
          </h1>
          <p className="body-text anim-fadeUp d3" style={{ marginTop: '1.5rem' }}>
            Every listing is active and verified. Apply directly or reach out — we respond to every inquiry.
          </p>
        </div>
      </section>

      <hr className="rule" />

      {/* FILTERS */}
      <div className="jb-filters">
        <div className="container">
          <div className="jb-filters__inner">
            <div className="jb-search">
              <input
                type="text"
                placeholder="Search by title, company, or location..."
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            </div>
            <div className="jb-pills">
              {domains.map(d => (
                <button
                  key={d}
                  className={`jb-pill ${active === d ? 'jb-pill--active' : ''}`}
                  onClick={() => setActive(d)}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* LIST */}
      <section className="jb-list">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="jb-empty">
              <p>No positions match your search.</p>
            </div>
          ) : (
            <>
              <div className="jb-count">{filtered.length} position{filtered.length !== 1 ? 's' : ''} found</div>
              <div className="jb-items">
                {filtered.map((job, i) => (
                  <div key={job.id} className="jb-item anim-fadeUp" style={{ animationDelay: `${0.05 * i}s` }}>
                    <div className="jb-item__left">
                      <div className="jb-item__title">{job.title}</div>
                      <div className="jb-item__company">{job.company}</div>
                    </div>
                    <div className="jb-item__meta">
                      <span>{job.location}</span>
                      <span>{job.experience}</span>
                      <span>{job.type}</span>
                      <span className="jb-item__domain">{job.domain}</span>
                    </div>
                    <button className="btn btn-outline jb-item__apply">Apply</button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

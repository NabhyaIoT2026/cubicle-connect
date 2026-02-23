import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './JobBoard.css';

const SHEET_ID = '1eWBd2OC8RknwmexsyXDz70OCoKnCqHvaX0OwBSA7wds';
const SHEET_NAME = 'Jobs';

export default function JobBoard() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [step, setStep] = useState('jd');
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://opensheet.elk.sh/${SHEET_ID}/${encodeURIComponent(SHEET_NAME)}`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const normalized = data.map(row => {
            const n = {};
            Object.keys(row).forEach(k => { n[k.trim()] = row[k]; });
            return {
              Title:       n.Title       || n.title       || '',
              Company:     n.Company     || n.company     || '',
              Location:    n.Location    || n.location    || '',
              Type:        n.Type        || n.type        || '',
              Experience:  n.Experience  || n.experience  || '',
              Domain:      n.Domain      || n.domain      || '',
              Description: n.Description || n.description || '',
            };
          });
          setJobs(normalized);
        } else {
          setJobs([]);
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Could not load jobs. Please try again later.');
        setLoading(false);
      });
  }, []);

  const filtered = jobs.filter(j => {
    const q = query.toLowerCase();
    return (
      (j.Title || '').toLowerCase().includes(q) ||
      (j.Company || '').toLowerCase().includes(q) ||
      (j.Location || '').toLowerCase().includes(q)
    );
  });

  const openJob = (job) => { setSelectedJob(job); setStep('jd'); setAgreed(false); };
  const closeModal = () => { setSelectedJob(null); setStep('jd'); setAgreed(false); };

  const handleSubmit = () => {
    setStep('done');
    setTimeout(() => {
      closeModal();
      navigate('/job-seekers');
    }, 2000);
  };

  return (
    <div className="page">

      {/* HEADER */}
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

      {/* SEARCH */}
      <div className="jb-filters">
        <div className="container">
          <div className="jb-search">
            <div className="jb-search__wrap">
              <svg className="jb-search__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search by title, company, or location..."
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
              {query && (
                <button className="jb-search__clear" onClick={() => setQuery('')}>✕</button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* LIST */}
      <section className="jb-list">
        <div className="container">

          {loading && (
            <div className="jb-empty">
              <div className="jb-spinner" />
              <p>Loading positions...</p>
            </div>
          )}
          {error && <div className="jb-empty"><p>{error}</p></div>}
          {!loading && !error && filtered.length === 0 && (
            <div className="jb-empty"><p>No positions match your search.</p></div>
          )}

          {!loading && !error && filtered.length > 0 && (
            <>
              <div className="jb-count">
                <span className="jb-count__num">{filtered.length}</span>
                &nbsp;position{filtered.length !== 1 ? 's' : ''} found
              </div>
              <div className="jb-items">
                {filtered.map((job, i) => (
                  <div
                    key={i}
                    className="jb-item anim-fadeUp"
                    style={{ animationDelay: `${0.05 * i}s` }}
                  >
                    <div className="jb-item__left">
                      <div className="jb-item__title">{job.Title}</div>
                    </div>
                    <button
                      className="btn btn-outline jb-item__apply"
                      onClick={() => openJob(job)}
                    >
                      Apply →
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      </section>

      {/* MODAL */}
      {selectedJob && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={e => e.stopPropagation()}>

            <button className="modal__close" onClick={closeModal}>✕</button>

            {/* STEPS */}
            <div className="modal__steps">
              {[['jd','Job Details'],['terms','Terms'],['done','Confirm']].map(([key, label], idx) => {
                const stepIdx = ['jd','terms','done'].indexOf(step);
                const isActive = step === key;
                const isDone = stepIdx > idx;
                return (
                  <div key={key} style={{ display: 'flex', alignItems: 'center', flex: idx < 2 ? 1 : 'auto' }}>
                    <div className={`modal__step ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}>
                      <div className="modal__step-dot">{isDone ? '✓' : idx + 1}</div>
                      <span>{label}</span>
                    </div>
                    {idx < 2 && <div className={`modal__step-line ${isDone ? 'done' : ''}`} />}
                  </div>
                );
              })}
            </div>

            {/* STEP 1 — JD */}
            {step === 'jd' && (
              <div className="modal__content">
                <div className="modal__header">
                  <h2>{selectedJob.Title}</h2>
                  <p className="modal__company">{selectedJob.Company}</p>
                </div>

                <div className="modal__tags">
                  {selectedJob.Location && <span className="modal__tag">📍 {selectedJob.Location}</span>}
                  {selectedJob.Type && <span className="modal__tag">{selectedJob.Type}</span>}
                  {selectedJob.Experience && <span className="modal__tag">{selectedJob.Experience}</span>}
                  {selectedJob.Domain && <span className="modal__tag modal__tag--gold">{selectedJob.Domain}</span>}
                </div>

                <div className="modal__divider" />

                <div className="modal__section">
                  <h4>About This Role</h4>
                  <p>{selectedJob.Description || 'No description provided.'}</p>
                </div>

                <div className="modal__footer">
                  <button className="btn btn-outline" onClick={closeModal}>Cancel</button>
                  <button className="btn btn-gold" onClick={() => setStep('terms')}>Continue →</button>
                </div>
              </div>
            )}

            {/* STEP 2 — TERMS */}
            {step === 'terms' && (
              <div className="modal__content">
                <div className="modal__header">
                  <h2>Terms & Conditions</h2>
                  <p className="modal__company">Please read carefully before applying</p>
                </div>

                <div className="modal__terms-box">
                  <p><strong>1. Accuracy of Information</strong><br />By applying, you confirm that all information provided is accurate. Any misrepresentation may result in disqualification.</p>
                  <p><strong>2. Data Usage</strong><br />Your details will be shared with the hiring company solely for recruitment purposes. Cubicle Connect will not sell or misuse your personal data.</p>
                  <p><strong>3. No Guarantee of Employment</strong><br />Submission does not guarantee an interview or offer. All hiring decisions rest with the employer.</p>
                  <p><strong>4. Communication Consent</strong><br />By applying, you consent to being contacted by Cubicle Connect and the hiring company via email or phone.</p>
                  <p><strong>5. Professional Conduct</strong><br />You agree to maintain professional conduct throughout the hiring process.</p>
                </div>

                <label className="modal__checkbox">
                  <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} />
                  <span>I have read and agree to the Terms & Conditions</span>
                </label>

                <div className="modal__footer">
                  <button className="btn btn-outline" onClick={() => setStep('jd')}>← Back</button>
                  <button className="btn btn-gold" disabled={!agreed} onClick={handleSubmit}>
                    Confirm
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 — DONE */}
            {step === 'done' && (
              <div className="modal__content modal__content--center">
                <div className="modal__success-icon">✓</div>
                <h2>Redirecting You !!!</h2>
                <p>Your application for <strong>{selectedJob.Title}</strong> at <strong>{selectedJob.Company}</strong> will be received after uploading resume.</p>
                <p className="modal__redirect-note">Redirecting you to Job Seekers page — please upload your resume there.</p>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
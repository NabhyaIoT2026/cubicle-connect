import { useEffect, useState } from "react";
import FormPage from '../components/FormPage';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx4BhQJ4AinK5wSw-ljWVgAP9N-WUG9XEbkPgd8nxSd_PMuxzD9GR7S0WMPfJ1z8863/exec';

export default function JobSeekers() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);   // auto-open on page load
  }, []);

  return (
    <>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Disclaimer ⚠️</h2>
            <p>
              Cubicle Connect does not charge candidates any fee at any stage of the recruitment process. Any request for payment claiming association with us is fraudulent.
            </p>
            <button onClick={() => setShowPopup(false)}>
              Continue
            </button>
          </div>
        </div>
      )}

      <FormPage
        overline="Job Seekers"
        title={<>Your next role<br />starts <em>here.</em></>}
        subtitle="Share your details and we'll match you with opportunities that align with your skills, ambitions, and career trajectory."
        label="Submit Your Profile"
        sheetUrl={SCRIPT_URL}
        sheetName="Job Seekers"
        hideResume={false}
      />
    </>
  );
}
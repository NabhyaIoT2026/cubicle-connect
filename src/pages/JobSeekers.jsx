import FormPage from '../components/FormPage';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx4BhQJ4AinK5wSw-ljWVgAP9N-WUG9XEbkPgd8nxSd_PMuxzD9GR7S0WMPfJ1z8863/exec';

export default function JobSeekers() {
  return (
    <FormPage
      overline="Job Seekers"
      title={<>Your next role<br />starts <em>here.</em></>}
      subtitle="Share your details and we'll match you with opportunities that align with your skills, ambitions, and career trajectory."
      label="Submit Your Profile"
      sheetUrl={SCRIPT_URL}
      sheetName="Job Seekers"
      hideResume={false}
    />
  );
}
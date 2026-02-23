import FormPage from '../components/FormPage';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx4BhQJ4AinK5wSw-ljWVgAP9N-WUG9XEbkPgd8nxSd_PMuxzD9GR7S0WMPfJ1z8863/exec';

export default function Employers() {
  return (
    <FormPage
      overline="Employers"
      title={<>Find talent that<br /><em>fits.</em></>}
      subtitle="Tell us about your organisation and we'll begin sourcing candidates who meet your exact requirements — fast, discreet, and precise."
      label="Submit Your Enquiry"
      sheetUrl={SCRIPT_URL}
      sheetName="Employers"
      hideResume={true}
    />
  );
}
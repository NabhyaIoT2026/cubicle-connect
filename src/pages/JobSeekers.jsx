import FormPage from '../components/FormPage';

const FORM_ACTION = 'https://docs.google.com/forms/d/e/1E-MhaL8pjZlk6rvbP-vmLeMlJlxV2TGcTkBJ50U813k/formResponse';

const FIELD_MAP = {
  name:      'entry.XXXXXXXXX',
  email:     'entry.XXXXXXXXX',
  phone:     'entry.XXXXXXXXX',
  location:  'entry.XXXXXXXXX',
  resumeUrl: 'entry.XXXXXXXXX',
};

export default function JobSeekers() {
  return (
    <FormPage
      overline="Job Seekers"
      title={<>Your next role<br />starts <em>here.</em></>}
      subtitle="Share your details and we'll match you with opportunities that align with your skills, ambitions, and career trajectory."
      label="Submit Your Profile"
      formAction={FORM_ACTION}
      fieldMap={FIELD_MAP}
    />
  );
}
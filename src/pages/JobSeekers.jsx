import FormPage from '../components/FormPage';

export default function JobSeekers() {
  return (
    <FormPage
      overline="Job Seekers"
      title={<>Your next role<br />starts <em>here.</em></>}
      subtitle="Share your details and we'll match you with opportunities that align with your skills, ambitions, and career trajectory."
      label="Submit Your Profile"
    />
  );
}

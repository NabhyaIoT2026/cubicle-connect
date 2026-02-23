import './Contact.css';

export default function Contact() {
  return (
    <div className="page">
      <section className="contact-hero section">
        <div className="container">
          <div className="contact-hero__content">
            <span className="overline anim-fadeUp d1">Contact</span>
            <h1 className="display anim-fadeUp d2">
              Get in <em>touch.</em>
            </h1>
            <p className="body-text anim-fadeUp d3" style={{ marginTop: '1.5rem' }}>
              Whether you're looking for talent or your next opportunity — we're here to help.
            </p>
          </div>

          <div className="contact-info">
            <div className="contact-detail">
              <span className="contact-detail__label">Email</span>
              <a href="mailto:careers@cubicleconnect.com" className="contact-link">careers@cubicleconnect.com</a>
            </div>
            <div className="contact-detail">
              <span className="contact-detail__label">Phone</span>
              <a href="tel:+919372824348" className="contact-link">+91 93728 24348</a>
            </div>
            <div className="contact-detail">
              <span className="contact-detail__label">Office</span>
              <span>Mumbai, India</span>
            </div>
            <div className="contact-detail">
              <span className="contact-detail__label">Hours</span>
              <span>Mon – Fri, 9:00 AM – 5:00 PM IST</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="rule" />
    </div>
  );
}

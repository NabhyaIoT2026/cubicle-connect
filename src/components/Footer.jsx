import { Link } from 'react-router-dom';
import './Footer.css';
import logoIcon from '../assets/logo.png';
import companyName from '../assets/name.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">

          <div className="footer__brand">
            <div className="footer__logo">
              <img src={companyName} alt="Company Name" className="footer__logo-text" />
            </div>
            <p>Connecting exceptional professionals with companies that value talent.</p>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/careers">Join Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="footer__col">
            <h4>Opportunities</h4>
            <Link to="/services">Services</Link>
            <Link to="/job-seekers">Job Seekers</Link>
            <Link to="/employers">Employers</Link>
            <Link to="/job-board">Job Board</Link>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <span>Mumbai, India</span>
            <span>careers@cubicleconnect.com</span>
            <span>+91 93728 24348</span>
          </div>

        </div>

        <hr className="rule" />

        <div className="footer__bottom">
          <span>© 2026 Cubicle Connect. All rights reserved.</span>
          <span>Privacy Policy · Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
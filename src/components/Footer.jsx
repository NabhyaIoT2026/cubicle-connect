import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <div className="footer__logo">Cubicle<span>Connect</span></div>
            <p>Connecting exceptional professionals with companies that value talent.</p>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer__col">
            <h4>Services</h4>
            <Link to="/job-seekers">Job Seekers</Link>
            <Link to="/employers">Employers</Link>
            <Link to="/job-board">Job Board</Link>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <span>Bengaluru, India</span>
            <span>hello@cubicleconnect.in</span>
            <span>+91 98000 00000</span>
          </div>
        </div>

        <hr className="rule" />
        <div className="footer__bottom">
          <span>© 2025 Cubicle Connect. All rights reserved.</span>
          <span>Privacy Policy · Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}

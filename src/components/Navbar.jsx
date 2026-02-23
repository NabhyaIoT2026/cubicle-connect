import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Job Seekers', to: '/job-seekers' },
  { label: 'Employers', to: '/employers' },
  { label: 'Job Board', to: '/job-board' },
  { label: 'Join Us', to: '/careers' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Gallery', to: '/gallery' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__logo">
          <img src={logo} alt="Cubicle Connect Logo" className="nav__logo-img" />
          Cubicle<span>Connect</span>
        </Link>

        <ul className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {links.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`nav__link ${pathname === l.to ? 'nav__link--active' : ''}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={`nav__burger ${open ? 'nav__burger--open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
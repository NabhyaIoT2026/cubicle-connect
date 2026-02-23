import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

import logoIcon from '../assets/logo.png';
import companyName from '../assets/name.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Job Seekers', to: '/job-seekers' },
  { label: 'Employers', to: '/employers' },
  { label: 'Job Board', to: '/job-board' },
  { label: 'Join Us', to: '/careers' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const fn = (e) => {
      if (open && navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const navbar = (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`} ref={navRef}>
      <div className="nav__inner">

        <Link to="/" className="nav__logo">
          <img src={logoIcon} alt="Company Logo" className="nav__logo-icon" />
          <img src={companyName} alt="Company Name" className="nav__logo-text" />
        </Link>

        <ul className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {links.map((l) => (
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
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

      </div>
    </nav>
  );

  return createPortal(navbar, document.getElementById('navbar-root'));
}
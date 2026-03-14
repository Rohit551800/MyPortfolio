import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const links = [
  { to: '/',            label: 'Home'     },
  { to: '/about',       label: 'About'    },
  { to: '/projects',    label: 'Projects' },
  { to: '/skills',      label: 'Skills'   },
  { to: '/experience',  label: 'Experience' },
  { to: '/contact',     label: 'Contact'  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-brand">
        RSG<span>.</span>
      </Link>

      <div className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
        <a
          href="https://github.com/Rohit551800"
          target="_blank"
          rel="noreferrer"
          className="nav-cta"
          onClick={() => setOpen(false)}
        >
          GitHub ↗
        </a>
      </div>

      <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="menu">
        <span className={open ? 'open' : ''} />
        <span className={open ? 'open' : ''} />
        <span className={open ? 'open' : ''} />
      </button>
    </nav>
  );
}
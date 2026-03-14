import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Link to="/" className="footer-brand">RSG<span>.</span></Link>
        <p className="footer-copy">
          Built with React · Designed by Rohit Singh Gouria
        </p>
        <div className="footer-links">
          <a href="https://github.com/Rohit551800" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:rohitsingh139915@gmail.com">Email</a>
          <a href="https://rsgshopzone.netlify.app/" target="_blank" rel="noreferrer">ShopZone ↗</a>
        </div>
      </div>
    </footer>
  );
}
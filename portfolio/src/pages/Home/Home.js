import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import profilePhoto from '../../assets/photo.jpeg';
import data from '../../data/resume';   // ✅ correct path: pages/ → src/ → data/resume
import './Home.css';

// data fields used in this file:
//   data.name            → "Rohit Singh Gouria"
//   data.title           → "Frontend Developer"
//   data.subtitle        → "CS Undergrad · Intern @ ProDesk IT · Problem Solver"
//   data.email           → "rohitsingh139915@gmail.com"
//   data.github          → "https://github.com/Rohit551800"
//   data.education[0].score → "GPA: 9.45 / 10.0"
//   data.projects.length → 4
//   data.certifications.length → 5
//   data.projects[0]     → ShopZone (latest project)

function FloatingOrb({ style }) {
  return <div className="orb" style={style} />;
}

export default function Home() {
  const heroRef = useRef(null);

  // Split name into parts for display: "ROHIT" / "SINGH GOURIA"
  const nameParts = data.name.split(' ');
  const firstName = nameParts[0].toUpperCase();                       // "ROHIT"
  const restName  = nameParts.slice(1).join(' ').toUpperCase();       // "SINGH GOURIA"

  // Pull GPA number out of "GPA: 9.45 / 10.0"
  const gpaRaw  = data.education[0]?.score ?? 'GPA: 9.45 / 10.0';
  const gpaNum  = gpaRaw.replace('GPA: ', '').split(' /')[0];        // "9.45"

  // Latest project = first item in projects array
  const latestProject = data.projects[0];

  // Card skill tags — pulled from languages + first framework
  const cardTags = [
    ...data.skills.frameworks.slice(0, 2),                            // React, React Router v6
    data.skills.languages[2],                                         // JavaScript ES6+
    data.skills.languages[0],                                         // C
    data.skills.tools[0],                                             // Git
  ];

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e) => {
      const { clientX: x, clientY: y } = e;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const rotX = ((y - cy) / cy) * -8;
      const rotY = ((x - cx) / cx) *  8;
      el.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    };
    const onLeave = () => {
      el.style.transform = 'perspective(1200px) rotateX(0) rotateY(0)';
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className="home page-enter">
      {/* Background orbs */}
      <FloatingOrb style={{ width: 500, height: 500, top: '-10%', left: '-5%', background: 'radial-gradient(circle, rgba(230,57,70,0.12) 0%, transparent 70%)', animationDelay: '0s' }} />
      <FloatingOrb style={{ width: 400, height: 400, bottom: '10%', right: '-5%', background: 'radial-gradient(circle, rgba(76,201,240,0.1) 0%, transparent 70%)', animationDelay: '-3s' }} />
      <FloatingOrb style={{ width: 300, height: 300, top: '40%', left: '50%', background: 'radial-gradient(circle, rgba(244,162,97,0.08) 0%, transparent 70%)', animationDelay: '-6s' }} />

      <div className="hero-grid">
        {/* Left — Text */}
        <div className="hero-text" ref={heroRef}>
          <p className="hero-tag">
            <span className="tag-dot" />
            Available for opportunities
          </p>

          <h1 className="hero-name">
            <span className="name-first">{firstName}</span>
            <span className="name-last">{restName.replace(' ', '\n')}</span>
          </h1>

          <p className="hero-role">
            {data.title} <span className="role-divider">/</span> CS Undergrad
            <br />
            <span className="hero-sub">{data.subtitle}</span>
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="btn-primary">View Projects →</Link>
            <Link to="/contact"  className="btn-outline">Get In Touch</Link>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">{gpaNum}</span>
              <span className="stat-label">GPA</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">{data.projects.length}+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">{data.certifications.length}+</span>
              <span className="stat-label">Certs</span>
            </div>
          </div>
        </div>

        {/* Right — 3D Card */}
        <div className="hero-card-wrap">
          <div className="hero-card">
            <div className="card-glow" />
            {(() => {
              const PHOTO_SRC = profilePhoto; // ← PUT YOUR IMAGE PATH OR URL HERE

              return (
                <div className="card-photo-section">
                  {PHOTO_SRC ? (
                    <img
                      src={PHOTO_SRC}
                      alt={data.name}
                      className="card-big-photo"
                    />
                  ) : (
                    <div className="card-big-placeholder">
                      <span className="placeholder-initials">
                        {nameParts.map(w => w[0]).join('')}
                      </span>
                      <span className="placeholder-hint">
                        Add your photo →<br/>set PHOTO_SRC in Home.js
                      </span>
                    </div>
                  )}
                  <div className="photo-ring" />
                  <div className="photo-badge">
                    <span className="badge-dot" /> Available
                  </div>
                </div>
              );
            })()}

            <div className="card-identity">
              <p className="card-name">{data.name}</p>
              <p className="card-title">{data.title}</p>
            </div>

            <div className="card-divider" />

            <div className="card-stack">
              {cardTags.map(t => (
                <span key={t} className="card-tag">{t}</span>
              ))}
            </div>

            <div className="card-project">
              <p className="cp-label">Latest Project</p>
              <a
                href={latestProject.live}
                target="_blank"
                rel="noreferrer"
                className="cp-link"
              >
                {latestProject.name} — {latestProject.tagline} ↗
              </a>
            </div>

            <div className="card-footer">
              <a href={data.github} target="_blank" rel="noreferrer" className="cf-item">
                ⌨ GitHub
              </a>
              <a href={`mailto:${data.email}`} className="cf-item">
                ✉ Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </div>
  );
}
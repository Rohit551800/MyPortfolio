import React from 'react';
import resume from "../../data/resume";
import './About.css';

export default function About() {
  return (
    <div className="about page-enter">
      <div className="page-container">
        <div className="page-label">WHO I AM</div>
        <h1 className="page-title">About <span>Me</span></h1>

        <div className="about-grid">
          {/* Left — Bio */}
          <div className="about-bio">
            <div className="about-avatar-block">
              <div className="big-avatar">RSG</div>
              <div className="avatar-glow" />
            </div>
            <p className="about-desc">{resume.about}</p>
            <p className="about-desc" style={{ marginTop: '1rem' }}>
              Currently interning at <strong style={{ color: 'var(--accent)' }}>ProDesk IT</strong> where
              I built <strong>ShopZone</strong> — a full e-commerce SPA demonstrating routing, global state,
              auth, and persistence. I actively share DSA resources with peers and maintain a 9.45 GPA at ACEIT Jaipur.
            </p>
            <div className="about-links">
              <a href={resume.github} target="_blank" rel="noreferrer" className="alink">⌨ GitHub</a>
              <a href={`mailto:${resume.email}`} className="alink">✉ Email</a>
              <a href={resume.linkedin} target="_blank" rel="noreferrer" className="alink">in LinkedIn</a>
            </div>
          </div>

          {/* Right — Education */}
          <div className="about-right">
            <h2 className="section-sub">Education</h2>
            <div className="edu-list">
              {resume.education.map((e, i) => (
                <div className={`edu-card ${e.highlight ? 'highlight' : ''}`} key={i}>
                  {e.highlight && <div className="edu-glow" />}
                  <div className="edu-top">
                    <span className="edu-year">{e.year}</span>
                    <span className="edu-score">{e.score}</span>
                  </div>
                  <h3 className="edu-degree">{e.degree}</h3>
                  <p className="edu-school">{e.school}</p>
                  <p className="edu-loc">{e.location}</p>
                </div>
              ))}
            </div>

            {/* Quick facts */}
            <h2 className="section-sub" style={{ marginTop: '2.5rem' }}>Quick Facts</h2>
            <div className="facts-grid">
              {[
                { icon: '📍', label: 'Location',  val: 'Jammu , J&K' },
                { icon: '🎓', label: 'College',   val: 'ACEIT Jaipur' },
                { icon: '💼', label: 'Internship',val: 'ProDesk IT' },
                { icon: '📊', label: 'GPA',        val: '9.45 / 10.0' },
              ].map(f => (
                <div className="fact-item" key={f.label}>
                  <span className="fact-icon">{f.icon}</span>
                  <div>
                    <p className="fact-label">{f.label}</p>
                    <p className="fact-val">{f.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
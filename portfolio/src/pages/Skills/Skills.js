import React, { useEffect, useRef } from 'react';
import data from '../../data/resume';
import './Skills.css';

const skillLevels = {
  'C': 80,
  'C++': 82,
  'JavaScript ES6+': 88,
  'SQL': 78,
  'HTML5': 92,
  'CSS3': 90,
  'Git': 80,
  'GitHub': 82,
  'MySQL': 75,
  'VS Code': 90,
};

const skillColors = {
  'C': '#00599C',
  'C++': '#00599C',
  'JavaScript ES6+': '#F7DF1E',
  'HTML5': '#E34F26',
  'CSS3': '#1572B6',
  'SQL': '#4479A1',
  'Git': '#F05032',
  'GitHub': '#888',
  'MySQL': '#4479A1',
  'VS Code': '#007ACC',
};

function SkillBar({ name, level, color, delay }) {
  const barRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (barRef.current) {
        barRef.current.style.width = level + '%';
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [level, delay]);

  return (
    <div className="skill-bar-item">
      <div className="skill-bar-top">
        <span className="skill-bar-name">{name}</span>
        <span className="skill-bar-pct" style={{ color }}>{level}%</span>
      </div>

      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          ref={barRef}
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
        />
      </div>
    </div>
  );
}

function SkillCard({ title, skills }) {
  return (
    <div className="skill-card">
      <h3 className="skill-card-title">{title}</h3>

      <div className="skill-tags">
        {skills.map(s => (
          <span
            key={s}
            className="skill-tag"
            style={{ '--c': skillColors[s] || '#e63946' }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="skills-page page-enter">

      <div className="page-container">
        <div className="page-label">WHAT I KNOW</div>
        <h1 className="page-title">My <span>Skills</span></h1>

        {/* Skill Bars */}
        <div className="skills-layout">

          <div className="skills-bars-section">
            <h2 className="section-sub">Proficiency</h2>

            <div className="skills-bars">

              {data.skills.languages.map((s, i) => (
                <SkillBar
                  key={s}
                  name={s}
                  level={skillLevels[s] || 75}
                  color={skillColors[s] || '#e63946'}
                  delay={i * 80}
                />
              ))}

            </div>
          </div>

          {/* Skill Cards */}

          <div className="skills-cards-section">
            <h2 className="section-sub">Categories</h2>

            <SkillCard
              title="Programming Languages"
              skills={data.skills.languages}
            />

            <SkillCard
              title="Tools & Platforms"
              skills={data.skills.tools}
            />

          </div>
        </div>

        {/* Certifications */}

        <div className="certs-section">
          <h2 className="section-sub" style={{ marginBottom: '1.5rem' }}>
            Certifications
          </h2>

          <div className="certs-grid">

            {data.certifications.map((c, i) => (
              <div
                className="cert-card"
                key={i}
                style={{ '--cc': c.color }}
              >

                <div className="cert-dot" />

                <div className="cert-body">
                  <p className="cert-name">{c.name}</p>
                  <p className="cert-meta">{c.org} · {c.year}</p>
                </div>

                {c.url && (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-view-btn"
                  >
                    View ↗
                  </a>
                )}

              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}
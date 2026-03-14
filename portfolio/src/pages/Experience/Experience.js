import React from 'react';
import resume from "../../data/resume";
import './Experience.css';

export default function Experience() {
  return (
    <div className="experience-page page-enter">
      <div className="page-container">
        <div className="page-label">WHERE I'VE WORKED</div>
        <h1 className="page-title">Experience <span>&</span> Roles</h1>

        <div className="timeline">
          {resume.experience.map((exp, i) => (
            <div className="tl-item" key={i}>
              <div className="tl-left">
                <div className="tl-dot">
                  <div className="tl-dot-inner" />
                </div>
                {i < resume.experience.length - 1 && <div className="tl-line" />}
              </div>
              <div className="tl-card">
                <div className="tl-card-glow" />
                <div className="tl-header">
                  <div>
                    <h3 className="tl-role">{exp.role}</h3>
                    <p className="tl-company">{exp.company}</p>
                  </div>
                  <span className="tl-period">{exp.period}</span>
                </div>
                <ul className="tl-points">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="tl-point">
                      <span className="tl-bullet" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Education timeline entries */}
          <div className="tl-divider">
            <span>Education</span>
          </div>

          {resume.education.map((edu, i) => (
            <div className="tl-item" key={`edu-${i}`}>
              <div className="tl-left">
                <div className="tl-dot edu">
                  <div className="tl-dot-inner" />
                </div>
                {i < resume.education.length - 1 && <div className="tl-line" />}
              </div>
              <div className="tl-card edu-tl">
                <div className="tl-header">
                  <div>
                    <h3 className="tl-role">{edu.degree}</h3>
                    <p className="tl-company">{edu.school} · {edu.location}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span className="tl-period">{edu.year}</span>
                    <p className="tl-score">{edu.score}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
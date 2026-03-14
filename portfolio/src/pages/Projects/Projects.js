import React, { useRef } from 'react';
import resume from "../../data/resume";
import './Projects.css';

function ProjectCard({ project }) {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -10;
    const rotY = ((x - cx) / cx) *  10;
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
    card.style.setProperty('--mx', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--my', `${(y / rect.height) * 100}%`);
  };

  const handleLeave = () => {
    const card = cardRef.current;
    if (card) card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
  };

  return (
    <div
      className="proj-card"
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ '--accent-color': project.color }}
    >
      <div className="proj-shine" />
      <div className="proj-top">
        <span className="proj-emoji">{project.emoji}</span>
        <div className="proj-badges">
          <a href={project.live} target="_blank" rel="noreferrer" className="proj-badge live">Live ↗</a>
          <a href={project.github} target="_blank" rel="noreferrer" className="proj-badge gh">GitHub</a>
        </div>
      </div>
      <h3 className="proj-name">{project.name}</h3>
      <p className="proj-tagline">{project.tagline}</p>
      <p className="proj-desc">{project.description}</p>
      <div className="proj-tech">
        {project.tech.map(t => (
          <span key={t} className="proj-tech-tag">{t}</span>
        ))}
      </div>
      <div className="proj-bar" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />
    </div>
  );
}

export default function Projects() {
  return (
    <div className="projects page-enter">
      <div className="page-container">
        <div className="page-label">WHAT I'VE BUILT</div>
        <h1 className="page-title">My <span>Projects</span></h1>
        <p className="projects-intro">
          A collection of projects built during my internship and personal learning. Each one tackles real problems with clean code.
        </p>
        <div className="projects-grid">
          {resume.projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </div>
  );
}
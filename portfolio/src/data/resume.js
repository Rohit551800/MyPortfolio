const data = {
  name: "Rohit Singh Gouria",
  title: "Frontend Developer",
  subtitle: "CS Undergrad · Intern @ ProDesk IT · Problem Solver",
  email: "rohitsingh139915@gmail.com",
  phone: "+91 7006423692",
  location: "Jaipur, Rajasthan",
  github: "https://github.com/Rohit551800",
  linkedin: "https://www.linkedin.com/in/rohit-singh-gouria-475923278/",
  leetcode: "https://leetcode.com/u/rohitgouria_/",
  about:
    "Motivated engineering student with a strong interest in problem-solving and software development. Skilled in programming fundamentals and eager to apply technical knowledge in real-world projects. Quick learner with a passion for continuous improvement.",

  education: [
    {
      degree: "B.Tech — Computer Science",
      school: "Arya College of Engineering & IT",
      location: "Jaipur, Rajasthan",
      score: "GPA: 9.45 / 10.0",
      year: "2023 – 2027",
      highlight: true,
    },
    {
      degree: "Senior Secondary (Class XII)",
      school: "Kendriya Vidyalaya No. 1",
      location: "Jammu, J&K",
      score: "75%",
      year: "2022",
    },
    {
      degree: "Secondary (Class X)",
      school: "Kamal Academy High School",
      location: "Ramban, J&K",
      score: "88%",
      year: "2020",
    },
  ],

  skills: {
    languages:  ["C", "C++", "JavaScript ES6+",  "HTML5", "CSS3" , "SQL",],
    frameworks: [""],
    tools:      ["Git", "GitHub", "MySQL", "VS Code", "Netlify"],
    concepts:   ["DSA", "OOP", "Responsive Design", "LocalStorage"],
  },

  projects: [
    {
      id: 1,
      name: "ShopZone",
      emoji: "🛍️",
      tagline: "E-Commerce SPA",
      description:
        "A fully functional multi-page e-commerce frontend. No page reloads, global cart state via Context API, protected checkout, persistent order history via localStorage.",
      tech: ["React", "React Router", "Context API", "CSS3", "DummyJSON API"],
      live: "https://rsgshopzone.netlify.app/",
      github: "https://github.com/Rohit551800/ProDesk-IT-internship-2026/tree/main/shopzone",
      color: "#e63946",
    },
    {
      id: 2,
      name: "Dev-Detective",
      emoji: "🔍",
      tagline: "GitHub User Search & Battle",
      description:
        "Search GitHub users and compare two developers in Battle Mode based on total stars. Async/await API calls, error handling, loading states, mobile-first design.",
      tech: ["JavaScript", "GitHub API", "HTML5", "CSS3", "Async/Await"],
      live: "https://rohitsinghgouriaweek3assignment.netlify.app",
      github: "https://github.com/Rohit551800/ProDesk-IT-internship-2026/tree/main/Week-03",
      color: "#4cc9f0",
    },
    {
      id: 3,
      name: "Thapa Technical Clone",
      emoji: "🎨",
      tagline: "Pixel-perfect Frontend Clone",
      description:
        "Responsive frontend clone of Thapa Technical using HTML & CSS. Focused on layout accuracy, modern web design principles, and optimal user experience.",
      tech: ["HTML5", "CSS3", "Responsive Design"],
      live: "https://rohitgouriaproject1.netlify.app/",
      github: "https://github.com/Rohit551800/THAPA-TECHNICAL-FRONTED",
      color: "#f4a261",
    },
    {
      id: 4,
      name: "STRIVER DSA Notes",
      emoji: "📒",
      tagline: "Open-Source DSA Resource",
      description:
        "Personal notes for the Striver DSA Sheet written in Hinglish + English. Made from scratch while solving problems. Shared with peers to help in interview prep.",
      tech: ["Markdown", "DSA", "Documentation"],
      live: "https://github.com/Rohit551800/STRIVER-DSA-NOTES",
      github: "https://github.com/Rohit551800/STRIVER-DSA-NOTES",
      color: "#a78bfa",
    },
  ],

  certifications: [
    {
      name:  "Salesforce Programming Architect Internship",
      org:   "TechForce Academy",
      year:  "2025",
      color: "#00a1e0",
      url:   "https://drive.google.com/file/d/1lkjLmcT89iJtKgIIGvk2YFDg3wccePFB/view?usp=sharing",
    },
    {
      name:  "Object-Oriented Programming",
      org:   "NPTEL",
      year:  "2025",
      color: "#f4a261",
      url:   "https://drive.google.com/file/d/1tMfydq1GDITacROLag6f4kPfU35zezyL/view?usp=sharing",
    },
    {
      name:  "Problem Solving Through Programming in C",
      org:   "NPTEL",
      year:  "2024",
      color: "#f4a261",
      url:   "https://drive.google.com/file/d/1fWdVtcnh9doF7wuyrKtcA3dKecY9mEjt/view?usp=sharing",
    },
    {
      name:  "MySQL for Beginners to Expert",
      org:   "Udemy",
      year:  "2025",
      color: "#a435f0",
      url:   "https://drive.google.com/file/d/1GGWm0qf16NGuGbCLGqBeVobgA1RB3bO3/view?usp=sharing",
    },
    {
      name:  "SQL (Intermediate)",
      org:   "HackerRank",
      year:  "2025",
      color: "#2ec866",
      url:   "https://drive.google.com/file/d/1RwanDsL6_zmwI2L6BBYP9aY7Fo-VJPo6/view?usp=sharing",
    },
  ],

  experience: [
    {
      role: "Frontend Developer Intern",
      company: "ProDesk IT",
      period: "2025 – Present",
      points: [
        "Building real-world React applications as part of internship projects",
        "Developed ShopZone — a full e-commerce SPA with routing, global state, and auth",
        "Practising industry-standard code structure, component design, and deployment",
      ],
    },
    {
      role: "Student Placement Coordinator",
      company: "Arya College of Engineering & IT",
      period: "2025 – Present",
      points: [
        "Coordinate campus placement drives and organize training sessions for students",
        "Maintain student databases and facilitate recruitment processes with corporate partners",
      ],
    },
  ],
};

export default data;
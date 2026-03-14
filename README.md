# 🧑‍💻 Rohit Singh Gouria — Personal Portfolio

> A multi-page, interactive developer portfolio built with React — featuring 3D UI effects, custom cursor, animated skill bars, and a working contact form.

[![Formspree](https://img.shields.io/badge/Contact-Formspree-e63946?style=flat-square)](https://formspree.io)
[![Deployed on Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://netlify.com)

---

## 📸 Pages Overview

| Page | Route | What's On It |
|---|---|---|
| 🏠 Home | `/` | 3D hero card, floating orbs, name reveal, stats |
| 👨‍💻 About | `/about` | Bio, education timeline, quick facts |
| 🚀 Projects | `/projects` | 3D tilt cards with holographic shine, live links |
| 🛠️ Skills | `/skills` | Animated progress bars, skill tags, cert cards |
| 💼 Experience | `/experience` | Vertical timeline — internship + education |
| 📬 Contact | `/contact` | Info panel + live form (Formspree) |

---

## ✨ Features

- 🖱️ **Custom cursor** — red dot with a lagging ring
- 🎭 **3D mouse-tilt effects** — hero section and project cards tilt toward the cursor
- ✨ **Holographic card shine** — project cards show a light sheen that follows the mouse
- 🌑 **Floating background orbs** — soft glowing radial gradients that drift on the hero page
- 📊 **Animated skill bars** — fill from 0% with staggered delays on page load
- 📜 **Vertical timeline** — work experience and education on one clean page
- 📬 **Working contact form** — real submissions via Formspree, with loading + error states
- 🔖 **Certificate links** — every certification card links to the Google Drive certificate
- 💾 **Single data source** — all personal info lives in `src/data/resume.js`; edit once, updates everywhere
- 📱 **Responsive** — mobile hamburger menu, stacked layouts on small screens
- 🎨 **ShopZone aesthetic** — Bebas Neue display font, DM Sans body, `#e63946` red accent, deep dark theme

---

## 📁 File Structure

```
portfolio/
├── public/
│   └── index.html                  ← fonts loaded here (Bebas Neue + DM Sans)
└── src/
    ├── index.js                    ← entry point
    ├── index.css                   ← CSS variables, custom cursor, noise overlay
    ├── App.js                      ← BrowserRouter + all 6 routes
    │
    ├── assets/
    │   └── photo.jpeg              ← your profile photo (add this yourself)
    │
    ├── data/
    │   └── resume.js               ← ✏️ EDIT THIS — all personal info in one place
    │
    ├── components/
    │   ├── Cursor.js               ← custom red dot cursor + lag ring
    │   ├── Navbar.js / .css        ← sticky glass navbar, mobile hamburger
    │   └── Footer.js / .css        ← footer with links
    │
    └── pages/
        ├── Home.js / .css          ← 3D hero, floating orbs, stats, profile card
        ├── About.js / .css         ← bio, education cards, facts grid
        ├── Projects.js / .css      ← 3D tilt project cards with shine effect
        ├── Skills.js / .css        ← animated bars, skill tags, cert cards + links
        ├── Experience.js / .css    ← vertical timeline (work + education)
        └── Contact.js / .css       ← contact info + Formspree form
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 16
- npm

### Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/Rohit551800/MyPortfolio/portfolio.git

# 2. Go into the project folder
cd portfolio

# 3. Install dependencies
npm install

# 4. Start the dev server
npm start
```

Opens at **http://localhost:3000**

### Build for Production

```bash
npm run build
```

---

## ✏️ How to Customise

### Update your personal info
All content — name, links, projects, skills, education, certifications — lives in **one file**:

```
src/data/resume.js
```

Edit it and every page updates automatically. No hunting through JSX.

### Add your profile photo
1. Create the folder `src/assets/`
2. Drop your photo in as `photo.jpeg`
3. It's already imported in `Home.js` — nothing else to change

### Add / remove a skill
Open `src/data/resume.js` lines 39–44:
```js
skills: {
  languages:  ["C", "C++", "JavaScript ES6+", "SQL", "HTML5", "CSS3"],
  tools:      ["Git", "GitHub", "MySQL", "VS Code", "Netlify"],
  concepts:   ["DSA", "OOP", "Responsive Design", "LocalStorage"],
},
```
Then add the matching entry in `src/pages/Skills.js` for a custom color and progress bar level.

### Add a new project
Add an object to the `projects` array in `resume.js`:
```js
{
  id: 5,
  name: "My New Project",
  emoji: "⚡",
  tagline: "Short description",
  description: "Full description here.",
  tech: ["React", "Node.js"],
  live: "https://your-live-link.com",
  github: "https://github.com/Rohit551800/your-repo",
  color: "#4cc9f0",
}
```

### Update the contact form endpoint
The form submits to Formspree. The endpoint is in `src/pages/Contact.js`:
```js
const res = await fetch('https://formspree.io/f/xlgplpyd', { ... });
```
Replace the ID if you change your Formspree form.

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#080810` |
| Surface | `#111118` / `#1a1a28` |
| Border | `#2a2a40` |
| Text | `#f0eee8` |
| Muted | `#7a7a9a` |
| Accent (red) | `#e63946` |
| Accent (orange) | `#f4a261` |
| Accent (blue) | `#4cc9f0` |
| Display font | Bebas Neue |
| Body font | DM Sans |

CSS variables are declared in `src/index.css` — change them there to retheme the whole site at once.

---

## 🌐 Deployment (Netlify)

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Select your repo, set build command to `npm run build`, publish directory to `build`
4. Click **Deploy**

> ⚠️ Add a `_redirects` file inside `/public` so React Router works on Netlify:
> ```
> /* /index.html 200
> ```

---

## 📡 Tech Stack

| Tech | Purpose |
|---|---|
| React 18 | UI framework |
| React Router v6 | Client-side routing |
| CSS3 + Variables | Styling, theming, animations |
| Formspree | Contact form backend |
| Google Drive | Certificate hosting |
| Netlify | Deployment |

---

## 📬 Contact

**Rohit Singh Gouria**
- 📧 rohitsingh139915@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/rohit-singh-gouria-475923278/)
- ⌨️ [GitHub](https://github.com/Rohit551800)

---

<div align="center">
  Built with React · Designed by Rohit Singh Gouria
</div>

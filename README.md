# Cubicle Connect

A clean, premium React recruitment website.

## Project Structure

```
cubicleconnect/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css     — Fixed top nav, mobile hamburger
│   │   ├── Footer.jsx / .css     — Links + contact info
│   │   └── FormPage.jsx / .css   — Shared form layout (Job Seekers + Employers)
│   ├── pages/
│   │   ├── Home.jsx / .css       → /
│   │   ├── About.jsx / .css      → /about
│   │   ├── JobSeekers.jsx        → /job-seekers  (uses FormPage)
│   │   ├── Employers.jsx         → /employers    (uses FormPage)
│   │   ├── JobBoard.jsx / .css   → /job-board   (filterable listings)
│   │   ├── Careers.jsx / .css    → /careers
│   │   └── Contact.jsx / .css    → /contact
│   ├── styles/
│   │   └── global.css            — CSS variables, typography, buttons, forms
│   ├── App.jsx                   — Router
│   └── index.js                  — Entry point
└── package.json
```

## Setup

```bash
npm install
npm start
```

## Design

- **Fonts**: Cormorant Garamond (display/serif) + Jost (body/sans)
- **Palette**: Near-black backgrounds, warm gold accents (#c9a96e), off-white text
- **Style**: Editorial, minimal, premium — no emojis, clean whitespace
- **Animations**: Subtle fade-up on load, hover transitions throughout

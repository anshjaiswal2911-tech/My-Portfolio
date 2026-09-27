<div align="center">

  # 🌌 Ansh Jaiswal — Developer Portfolio

  **Modern • High-Performance • Interactive 3D Cosmic Experience**

  [![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://my-portfolio-seven-murex-99.vercel.app/)
  [![GitHub](https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/anshjaiswal2911-tech)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ansh-jaiswal-4bb5243a2/)
  [![X / Twitter](https://img.shields.io/badge/X-Follow-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/AnshJaiswa62344)

  ---

  <p align="center">
    A production-grade, full-stack personal engineering portfolio showcasing real-world full-stack applications, interactive UI/UX animations, and scalable backend pipelines.
  </p>

  [![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
  [![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
  [![Supabase](https://img.shields.io/badge/Supabase_PostgreSQL-3ECF8E?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com/)
  [![EmailJS](https://img.shields.io/badge/EmailJS_API-FF6C37?style=flat-square&logo=mailgun&logoColor=white)](https://www.emailjs.com/)

</div>

---

## 🌟 Executive Summary

This portfolio represents a blend of **creative frontend engineering** and **scalable backend architecture**. Rather than relying on static templates, every component—from the custom HTML5 Canvas particle system to the bidirectional infinite skills marquee and sticky scroll-stacked project showcase—is engineered from scratch for **sub-50ms performance**, seamless touch responsiveness, and zero layout shift.

---

## ✨ Key Architectural Highlights

### 🎨 1. Dynamic UI & Creative Engineering
- **🌌 HTML5 Cosmic Canvas Stars**: Custom particle engine with real-time twinkling, physics drift, and ambient glow effects rendered via `requestAnimationFrame`.
- **🔤 Dynamic Role Typing Engine**: Smooth character-by-character typewriter loop showcasing engineering specializations.
- **♾️ Bidirectional Infinite Skills Marquee**: Scroll-direction-aware infinite sliding marquee (moves right-to-left on scroll down, left-to-right on scroll up).
- **🃏 Sticky Scroll-Stacked Project Cards**: Sticky stacking showcase using Framer Motion `useScroll` and `useTransform` with live browser mockup frames and one-click demo links.
- **⏱️ Dual-Mode Career Timeline**: Horizontal milestone timeline for desktop screens and adaptive vertical timeline for mobile devices.

### ⚡ 2. Dual-Sync Backend & Communication Pipeline
- **🗄️ Supabase PostgreSQL Integration**: Every contact submission is securely validated and inserted into the `inquiries` PostgreSQL table in real time.
- **📧 Automated EmailJS Notification**: Instant formatted inquiry notification dispatched directly to the engineer's inbox with categorized service and budget data.
- **🛡️ Row-Level Security (RLS)**: Fine-grained security policies on PostgreSQL tables for authenticated & anonymous endpoints.

### 🚀 3. Performance & Asset Optimization (98.2% Reduction)
- **Modern WebP Pipeline**: All heavy artwork (`Astra`, `Avator`, `Logo`, Project screenshots) converted to optimized `.webp`, slashing total asset payload from **~8.5 MB down to ~157 KB**.
- **Non-blocking Async Decoding**: `loading="lazy"` and `decoding="async"` applied across all image nodes to eliminate main-thread blocking.
- **Mobile Touch Optimization**: 16px iOS auto-zoom prevention, touch target ergonomics, and hardware-accelerated CSS animations.

---

## 📂 Project Architecture

```plaintext
my-project/
├── public/
│   └── Resume.pdf                # Downloadable Engineer Resume
├── src/
│   ├── assets/                   # Optimized WebP assets & vector icons
│   │   ├── Astra.webp            # Floating Cosmic Astronaut
│   │   ├── avator.webp           # Hero Avatar Artwork
│   │   ├── collabnest.webp       # CollabNest Screenshot
│   │   ├── gramvoice.webp        # GramVoice AI Screenshot
│   │   ├── taskflow.webp         # TaskFlow Pro Screenshot
│   │   ├── Logo.webp             # Vector Brand Mark
│   │   └── P.webp                # Profile Avatar
│   ├── components/               # Reusable Modular UI Components
│   │   ├── CustomUser.jsx        # Ambient Glow Cursor (Desktop only)
│   │   ├── Navbar.jsx            # Glassmorphic Sticky Header
│   │   ├── overlaymenue.jsx      # Fullscreen Circular Radial Menu
│   │   ├── introanimation.jsx    # Multi-language Greeting Intro
│   │   └── particlebackground.jsx# Background Canvas Starfield
│   ├── lib/
│   │   └── supabase.js           # Supabase PostgreSQL Client Configuration
│   ├── sections/                 # Main Single-Page Application Sections
│   │   ├── home.jsx              # Hero Section & Action CTAs
│   │   ├── about.jsx             # Bio, Metrics, Education & Experience
│   │   ├── skills.jsx            # Infinite Directional Skills Marquee
│   │   ├── project.jsx           # Sticky Stacked Project Showcase
│   │   ├── experience.jsx        # Interactive Milestone Timeline
│   │   ├── testimonial.jsx       # Glassmorphism Endorsements Grid
│   │   ├── contact.jsx           # Dual-Sync Contact Form & Astronaut Art
│   │   └── footer.jsx            # Social Channels, Quote & Copyright
│   ├── App.jsx                   # Master Application Layout
│   ├── index.css                 # Tailwind CSS v4 & Global Directives
│   └── main.jsx                  # React 19 Root Entry Point
├── .env.example                  # Environment Variables Template
├── package.json                  # Dependencies & Scripts
├── vite.config.js                # Vite Bundler Configuration
└── README.md                     # Documentation
```

---

## 🚀 Featured Projects on Showcase

| # | Project | Category | Tech Stack | Live Demo | Repository |
| :-: | :--- | :--- | :--- | :--- | :--- |
| **01** | **CollabNest** | AI Team Matchmaking | `React.js` • `Tailwind` • `Gemini AI` • `Node.js` • `Vercel` | [Live Demo](https://find-teammates.vercel.app) | [Source Code](https://github.com/anshjaiswal2911-tech/find-teammates) |
| **02** | **GramVoice AI** | Full-Stack Voice AI | `React.js` • `Node.js` • `Express` • `Gemini AI` • `Web Speech API` | [Live Demo](https://gram-voice-ai.vercel.app) | [Source Code](https://github.com/anshjaiswal2911-tech/GramVoice-Ai) |
| **03** | **TaskFlow Pro** | SaaS Productivity Dashboard | `React.js` • `TypeScript` • `Tailwind CSS` • `Lucide Icons` | [Live Demo](https://taskflow-dashboard-kohl.vercel.app) | [Source Code](https://github.com/anshjaiswal2911-tech/taskflow-dashboard) |

---

## 🛠️ Technology Stack Breakdown

| Domain | Tools & Technologies |
| :--- | :--- |
| **Frontend** | React 19, JavaScript (ESNext), HTML5 Canvas, JSX |
| **Styling & Design** | Tailwind CSS v4, Glassmorphism, CSS Modules, Responsive Design |
| **Animation Engine** | Framer Motion (Scroll Transform, Spring Physics, Layout Animations) |
| **Database** | Supabase, PostgreSQL, Row Level Security (RLS) |
| **Email & Communications** | EmailJS Browser SDK, REST API |
| **Build & Tooling** | Vite 8, ESLint, Node.js, Sharp |
| **Hosting & CI/CD** | Vercel Global Edge Network, GitHub Actions |

---

## ⚙️ Getting Started Locally

To run this project on your local machine:

### 1. Clone the repository
```bash
git clone https://github.com/anshjaiswal2911-tech/My-Portfolio.git
cd My-Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory and add your credentials:
```env
# EmailJS Configuration
VITE_SERVICE_ID=your_emailjs_service_id
VITE_TEMPLATE_ID=your_emailjs_template_id
VITE_PUBLIC_KEY=your_emailjs_public_key

# Supabase PostgreSQL Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_public_key
```

### 4. Start Development Server
```bash
npm run dev
```
Open **`http://localhost:5173`** in your browser to view the application.

---

## 👨‍💻 About the Author

**Ansh Jaiswal** — *Computer Engineering Student & Full-Stack Developer*

- 🌐 **Live Portfolio**: [my-portfolio-seven-murex-99.vercel.app](https://my-portfolio-seven-murex-99.vercel.app/)
- 💼 **LinkedIn**: [linkedin.com/in/ansh-jaiswal-4bb5243a2](https://www.linkedin.com/in/ansh-jaiswal-4bb5243a2/)
- 🐙 **GitHub**: [github.com/anshjaiswal2911-tech](https://github.com/anshjaiswal2911-tech)
- 🐦 **X (Twitter)**: [@AnshJaiswa62344](https://x.com/AnshJaiswa62344)

---

<div align="center">
  <sub>Designed & Developed with ❤️ by <b>Ansh Jaiswal</b> • © 2026 All Rights Reserved</sub>
</div>

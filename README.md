# GlowLab Tech — AI Software & Digital Product Agency

<div align="center">

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node](https://img.shields.io/badge/Node.js-%3E%3D20-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue?style=flat-square)](LICENSE)

**Engineering resilient AI automation, custom software architectures, and high-converting digital products for ambitious operators.**

[Live Site](https://glowlabtech.com/) • [Explore Services](https://glowlabtech.com/services) • [Field Notes](https://glowlabtech.com/blog) • [Contact Us](https://glowlabtech.com/contact)

</div>

---

## ✦ Overview

**GlowLab Tech** is a modern systems engineering and digital product agency. We bridge the gap between bleeding-edge AI models and rock-solid production pipelines. From autonomous workflow automation and custom cloud architectures to high-performance web applications, we design systems that eliminate bottlenecks and turn attention into measurable revenue.

---

## ⚡ Key Features

- **Production-Grade AI & Workflow Automation**: Deep integration with state-of-the-art LLMs, automated multi-step orchestrations, and intelligent agent workflows.
- **Modern Responsive Architecture**: Fluid, mobile-first design built with React 19, Tailwind CSS v4, and Motion for buttery-smooth interactions.
- **Comprehensive Route Structure**:
  - **Home**: Strategic agency overview, problem-solution framing, 4-step delivery pipeline, and social proof.
  - **About**: Agency philosophy, team workstations, multi-industry battle-tested playbooks, and multi-tool technical fluency.
  - **Services**: Detailed breakdown of AI Engineering, Automation Systems, Cloud Architecture, and Product Development.
  - **Testimonials & Outcomes**: Measurable case studies with operational and revenue impact metrics.
  - **Field Notes (Blog)**: Technical playbooks, systems engineering articles, and automation blueprints.
  - **Products**: Incubated internal tools and upcoming SaaS solutions.
  - **Contact Desk**: Streamlined project inquiry desk with field validation.
- **Bottom Cookie Consent Manager**: Modern glassmorphic banner with granular preferences (`Accept All`, `Essential Only`, customizable toggles) persisted via `localStorage`.
- **Dynamic SEO & Structured Data**: Granular meta tags, OpenGraph tags, canonical URLs, and Schema.org JSON-LD structured data for rich search presence.
- **Accessible & Privacy-Minded**: Semantic HTML5 markup, WCAG-compliant contrast ratios, and keyboard-friendly interactive elements.

---

## 🛠 Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling & Design System** | [Tailwind CSS v4](https://tailwindcss.com/), `@tailwindcss/vite` |
| **Animation** | [Motion](https://motion.dev/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Build Tool & Bundler** | [Vite 6](https://vitejs.dev/) |
| **AI Integration** | [@google/genai](https://github.com/google/genai) |
| **Server & Utilities** | Express, dotenv, tsx |

---

## 📁 Project Structure

```bash
growLab/
├── public/                # Static assets, logos, and illustrations
│   └── images/            # Brand imagery and workstations
├── src/
│   ├── components/        # Reusable UI modules & page components
│   │   ├── AboutPage.tsx           # Agency story & multi-industry playbooks
│   │   ├── BlogDetailPage.tsx      # Field notes / article view
│   │   ├── BlogListingPage.tsx     # Field notes index & category filters
│   │   ├── ContactPage.tsx         # Project inquiry form
│   │   ├── CookieBanner.tsx        # Bottom cookie consent banner
│   │   ├── Footer.tsx              # Global footer & legal links
│   │   ├── Navigation.tsx          # Responsive navbar & mobile menu
│   │   ├── ProductsPage.tsx        # Product lineup & roadmap
│   │   ├── ServiceDetailPage.tsx   # Deep-dive service specifications
│   │   ├── ServicesOverview.tsx    # Services grid
│   │   └── TestimonialsPage.tsx    # Client outcomes & metrics
│   ├── data/              # Structured CMS data (blog posts, services, cases)
│   ├── utils/             # SEO utilities, schemas, and helpers
│   ├── App.tsx            # Main application router & state manager
│   ├── index.css          # Tailwind CSS directives & global typography
│   └── main.tsx           # React root mounting & fetch polyfill
├── package.json           # Scripts and dependency specifications
├── tsconfig.json          # TypeScript compiler configuration
├── vite.config.ts         # Vite build and plugin configuration
└── README.md              # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20.x` or later
- **npm**: `v10.x` or later

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rahulkumar8285/glowlabtech.git
   cd glowlabtech
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables (Optional):**
   Create a `.env.local` file in the root directory:
   ```env
   VITE_APP_URL=http://localhost:3000
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to **[http://localhost:3000](http://localhost:3000)**.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite dev server on port `3000` with hot module replacement (HMR) |
| `npm run build` | Compiles TypeScript and builds production bundles into `dist/` |
| `npm run preview` | Locally previews the production build from `dist/` |
| `npm run lint` | Runs `tsc --noEmit` to validate all TypeScript types |
| `npm run clean` | Removes build artifacts (`dist/`) and temporary files |

---

## 🎨 Design System & Palette

GlowLab Tech uses a warm, editorial dark aesthetic with tactile terracotta accents:

- **Background Canvas**: `#FAF9F6` (Alabaster / Warm White) & `#141413` (Deep Onyx)
- **Primary Accent**: `#C84826` (Terracotta Flame)
- **Accent Hover**: `#B33E1D` / `#9E3416`
- **Text & Headlines**: `#1A1A1A` / `#FAF9F6`
- **Muted Borders**: `rgba(255, 255, 255, 0.08)` / `rgba(0, 0, 0, 0.08)`

---

## 🔒 Security & Privacy

- **Cookie Management**: Visitors have granular control over analytical and marketing cookie persistence.
- **Privacy by Design**: No telemetry or third-party cookies are set without prior consent.
- **Safe Input Handling**: Form inputs are validated with sanitized states before handling.

---

## 📄 License

This project is licensed under the [Apache-2.0 License](LICENSE).

---

<div align="center">
  <sub>Engineered with care by <strong>GlowLab Tech</strong>.</sub>
</div>

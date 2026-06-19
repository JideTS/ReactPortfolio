# ReactPortfolio

![Logo Jidé Tidjani-Serpos](https://github.com/JideTS/ReactPortfolio/assets/20988563/b77bb7cd-567a-409f-b5fa-7621a8bf2e97)

## Professional Portfolio — React, Product Design & AI-Assisted Development

Welcome to the repository for my professional portfolio: a React-based digital product presenting my work at the intersection of **Business Strategy**, **Product Design**, and **Computer Science**.

This portfolio showcases selected client work, case studies, expertise areas, testimonials, and AI-assisted product experiments. It is designed both as a public-facing professional website and as a modular React codebase that can evolve with future projects.

The current version was re-engineered from an earlier Figma-generated implementation into a cleaner, more maintainable, data-driven architecture. The goal was to preserve the visual identity and user experience while improving component reuse, routing, styling consistency, accessibility, responsiveness, and code integrity.

---

## Live Portfolio

[Visit the deployed portfolio on Render](https://jide.onrender.com)

---

## Preview

<img width="1728" alt="Portfolio Preview Picture" src="https://github.com/JideTS/ReactPortfolio/assets/20988563/35ba1dcf-cea0-4cc5-a67f-7ceb4c5ecd68">

---

## Key Improvements

This version introduces several structural and technical improvements:

- Modular React components for cards, sections, case-study pages, expertise areas, quotes, and footer content.
- Centralized data files for homepage content, assets, portfolio cards, and case studies.
- Clean React Router configuration for internal case-study navigation.
- Consolidated global styling with responsive layouts and container queries.
- Self-hosted font loading for consistent rendering across browsers.
- Responsive hero banner alignment across mobile, tablet, and desktop.
- Dependency updates resolving npm audit vulnerabilities.
- Improved maintainability for future portfolio updates and product experiments.

---

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Technology Stack](#technology-stack)
5. [Project Structure](#project-structure)
6. [Credits](#credits)
7. [License](#license)
8. [Contact](#contact)

---

## Description

ReactPortfolio is a professional portfolio website built with React and Vite.

It presents my work across:

- Business and product strategy
- Product design and UX/UI
- Frontend development
- AI-assisted product experimentation
- Client projects and case studies
- Testimonials and professional references

The portfolio is structured to make content easy to update, extend, and reuse. Instead of hardcoding every section directly into page components, the project relies on centralized content files and reusable React components.

---

## Installation

You can either clone the repository and run it locally, or access the deployed portfolio directly.

### 1. Clone the Repository

```bash
git clone https://github.com/JideTS/ReactPortfolio.git
```

### 2. Navigate to the Project Directory

```bash
cd ReactPortfolio
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Local Development Server

```bash
npm run start
```

Once the application is running, open it in your browser:

```text
http://localhost:10000/
```

### 5. Build for Production

```bash
npm run build
```

### 6. Run Lint Checks

```bash
npm run lint
```

### 7. Check Dependencies for Vulnerabilities

```bash
npm audit
```

---

## Usage

This portfolio is designed to present my professional profile, selected projects, case studies, consulting expertise, and product initiatives in a focused and accessible way.

You are welcome to explore the codebase for inspiration, especially if you are interested in:

- Building a modular React portfolio
- Organizing website content through structured data
- Refactoring a Figma-generated frontend into a maintainable codebase
- Creating reusable portfolio sections and case-study templates
- Combining design, business strategy, and technical implementation in one professional website

---

## Technology Stack

This project uses:

- [React](https://react.dev/) — Frontend library
- [Vite](https://vitejs.dev/) — Frontend tooling and build system
- [React Router](https://reactrouter.com/) — Client-side routing
- JavaScript
- CSS
- Container queries
- [Fontsource](https://fontsource.org/) — Self-hosted fonts
- [ESLint](https://eslint.org/) — Code quality and linting
- [Render](https://render.com/) — Hosting and deployment

---

## Project Structure

The codebase is organized around reusable components and centralized content data.

```text
src/
  components/
    CaseStudyCard.jsx
    ExpertiseCard.jsx
    Footer.jsx
    PortfolioSection.jsx
    QuoteCard.jsx
    icons.jsx

  data/
    assets.js
    cards.js
    caseStudies.js
    homepage.js

  pages/
    CasePage.jsx
    ErrorPage.jsx
    Homepage.jsx

  App.jsx
  main.jsx
  routes.jsx
  styles.css
```

This structure keeps the project easier to maintain and extend by separating:

- Presentation components
- Page-level views
- Routing logic
- Portfolio content
- Shared assets
- Global styling

---

## Credits

I would like to acknowledge the following tools, platforms, and resources:

- [React](https://react.dev/) — Frontend library used to build the interface
- [Vite](https://vitejs.dev/) — Fast frontend tooling and production build system
- [React Router](https://reactrouter.com/) — Client-side routing for internal navigation
- [Fontsource](https://fontsource.org/) — Self-hosted font packages for consistent typography
- [Render](https://render.com/) — Hosting and deployment platform
- [Figma](https://www.figma.com/) — Design exploration and visual system work
- AutoHTML Figma Plugin — Early React code generation from Figma mockups
- [Node.js](https://nodejs.org/) — JavaScript runtime and package ecosystem
- [Stack Overflow](https://stackoverflow.com/) — Community references used during earlier implementation iterations

---

## License

<img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT License">

This project is licensed under the MIT License.

---

## Contact

For questions, collaboration opportunities, or professional inquiries, feel free to reach out:

**Jidé Tidjani-Serpos**  
[jide@tidjani-serpos.com](mailto:jide@tidjani-serpos.com)




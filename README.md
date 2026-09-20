# AkashSL Portfolio Website

The official portfolio website for **Akash Software Limited (AkashSL)**, built with [Astro](https://astro.build/) and designed for fast, modern, and responsive web experiences.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** `22.12.0` or later
- **npm**

### Installation

Clone the repository and install the project dependencies:

```bash
git clone <repository-url>
cd asl-portfolio
npm install
```

### Start the Development Server

Run the local development server:

```bash
npm run dev
```

The site will be available at:

**<http://localhost:4321>**

## Building for Production

Create an optimized production build:

```bash
npm run build
```

The generated website will be available in:

```text
dist/
```

### Preview the Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
.
├── public/
│   ├── favicon.ico
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   │   └── asl_logo.svg
│   │
│   ├── components/
│   │   ├── cards/
│   │   ├── layout/
│   │   └── ui/
│   │
│   ├── data/
│   │   ├── projects.ts
│   │   └── services.ts
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   ├── projects/
│   │   └── services/
│   │
│   └── styles/
│       └── global.css
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── astro.config.mjs
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## Available Commands

All commands should be run from the project root.

| Command | Description |
| :--- | :--- |
| `npm install` | Install project dependencies |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production website |
| `npm run preview` | Preview the production build locally |
| `npm run astro ...` | Run Astro CLI commands |
| `npm run astro -- --help` | Display Astro CLI help |

## Deployment

The website is configured for deployment to **GitHub Pages** using GitHub Actions.

Every push to the configured production branch triggers the deployment workflow:

```text
GitHub Repository
       ↓
GitHub Actions
       ↓
npm ci
       ↓
npm run build
       ↓
dist/
       ↓
GitHub Pages
```

The deployment workflow is located at:

```text
.github/workflows/deploy.yml
```

## Technology

- [Astro](https://astro.build/)
- TypeScript
- CSS
- GitHub Pages
- GitHub Actions

## License

Copyright © Akash Software Limited. All rights reserved.

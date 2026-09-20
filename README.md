# Akash Software Limited

A modern, professional company website built with Astro.

## Getting Started

Follow these steps to run the project locally:

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

### 3. View Your Site

Open your browser and go to `http://localhost:4321`.

## Building for Production

To create a production build:

```bash
npm run build
```

Your built files will be available in the `dist/` directory.

## Project Structure

```text
/
├── public/                  # Static assets (images, favicons)
├── src/
│   ├── components/        # Reusable UI components
│   ├── layouts/           # Page layouts
│   ├── pages/             # Astro pages (routed by file name)
│   └── styles/            # Global styles and Tailwind
├── tailwind.config.mjs     # Tailwind CSS configuration
└──astro.config.mjs         # Astro configuration
```

## Commands

| Command | Description |
| --------- | ------------- |
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run astro check` | Run type checking |

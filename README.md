# Editorial Portfolio

A responsive one-page portfolio inspired by editorial product-design sites. Built with semantic HTML, modular JavaScript, and plain CSS so the visual system is easy to customize.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Architecture

```text
Portfolio/
├── index.html                 # Page shell, metadata, fonts
├── package.json               # Vite scripts
├── public/
├── src/
│   ├── assets/
│   │   ├── textureee.png      # Supplied texture overlay
│   │   ├── gallery-coral-3d.jpg
│   │   ├── gallery-blue-3d.jpg
│   │   └── gallery-lime-3d.jpg
│   ├── components/            # One focused file per page section
│   │   ├── About.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── HomeGallery.js
│   │   ├── Playground.js
│   │   ├── ProjectCard.js
│   │   ├── Work.js
│   │   └── icons.js
│   ├── data/
│   │   └── projects.js        # Edit project content here
│   ├── styles/
│   │   ├── components.css     # Cards and UI elements
│   │   ├── layout.css         # Section/layout styles
│   │   ├── main.css           # CSS entry point
│   │   ├── responsive.css     # Tablet/mobile behavior
│   │   └── tokens.css         # Colors, fonts, global styles
│   ├── utils/
│   │   └── interactions.js    # Menu, reveals, scroll states
│   └── main.js                # App composition
└── README.md
```

## Customize

- Replace names, email, and social links in the section files under `src/components/`.
- Edit all project text once in `src/data/projects.js`.
- Replace the `.placeholder-window` markup in `ProjectCard.js` with an `<img>` when final images are ready.
- Change global colors and typography in `src/styles/tokens.css`.
# Portfolio

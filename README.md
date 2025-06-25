# Project Single: Microfrontend Example

This repository contains two main applications:
- `navbar-app`: A React microfrontend built with Vite.
- `root-nextjs`: The root-config/container app built with Next.js and single-spa.

---

## Simple Architecture Diagram

```
+-------------------+         +-------------------+
|                   |         |                   |
|   navbar-app      |         |   dashboard-app   |
| (Microfrontend)   |         | (Microfrontend)   |
|  React + Vite     |         |  (example)        |
+---------+---------+         +---------+---------+
          |                             |
          |                             |
          +-------------+---------------+
                        |
                        v
            +-----------------------------+
            |      root-nextjs            |
            |  (single-spa root-config)   |
            |      Next.js App            |
            +-----------------------------+
                        |
                        v
            +-----------------------------+
            |         Browser             |
            +-----------------------------+
```

- Each microfrontend (e.g., `navbar-app`) is built and served independently.
- The `root-nextjs` app acts as the single-spa root-config/container, loading microfrontends dynamically via SystemJS import maps.
- The browser loads the root app, which then loads and mounts the microfrontends as needed.

---

## Prerequisites
- Node.js (v16 or higher recommended)
- npm (v8 or higher)

---

## Running Each App Individually

### 1. Navbar App
Navigate to the `navbar-app` folder and run:

```bash
cd navbar-app
npm install
npm run dev
```

- The app will be available at [http://localhost:5173](http://localhost:5173).

#### Production Build & Serve
```bash
npm run build
npm run serve
```
- The production build will be served at [http://localhost:4173](http://localhost:4173).

---

### 2. Root Next.js App
Navigate to the `root-nextjs` folder and run:

```bash
cd root-nextjs
npm install
npm run dev
```

- The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Running Both Apps Together (Integrated)

1. **Start the Navbar App in production mode:**
   ```bash
   cd navbar-app
   npm install
   npm run build
   npm run serve
   # Runs at http://localhost:4173
   ```

2. **Start the Root Next.js App:**
   ```bash
   cd root-nextjs
   npm install
   npm run dev
   # Runs at http://localhost:3000
   ```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser.**
   - The root app will load the navbar microfrontend from [http://localhost:4173/navbar-app.js](http://localhost:4173/navbar-app.js) as configured in the import map.

---

## Notes
- Make sure both apps are running for the integration to work.
- You can add more microfrontends by updating the import map in `root-nextjs/src/app/layout.js` and registering them in `root-nextjs/src/app/singleSpa/registerMicrofrontends.js`.

---

## Known Issues / Troubleshooting

### Microfrontend Lifecycle Exports (bootstrap, mount, unmount)
- When running the navbar-app as a microfrontend with single-spa, it must export the `bootstrap`, `mount`, and `unmount` lifecycle functions from its entry file (`src/index.js`).
- If you want to run the navbar-app standalone (for local development), you need a separate entry file (e.g., `src/standalone.js`) that renders the component directly. Do **not** change the lifecycle exports in `src/index.js`, or single-spa integration will break.
- The Vite config can be set up to use the correct entry file depending on the mode (see project setup for details).
- If you see errors about missing `bootstrap`, `mount`, or `unmount` when integrating, make sure your build is exporting these functions and you are not running the standalone entry.
- **Note:** This issue is not yet fully resolved and may require further configuration or troubleshooting for seamless development and integration.

For more details, see the individual `README.md` files in each app folder.

# Project Single: Microfrontend Example

This repository contains two main applications:
- `navbar-app`: A React microfrontend built with Vite.
- `root-nextjs`: The root-config/container app built with Next.js and single-spa.

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

For more details, see the individual `README.md` files in each app folder.

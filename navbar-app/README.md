# Navbar App (Microfrontend)

This is a React app built with Vite, designed to be used as a microfrontend (navbar) in a single-spa setup.

## Prerequisites
- Node.js (v16 or higher recommended)
- npm (v8 or higher)

## Installation & Running the App
Follow these steps to set up and run the app:

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will start on the default Vite port (usually 5173). You can access it at [http://localhost:5173](http://localhost:5173).
3. **Build for production:**
   ```bash
   npm run build
   ```
   This will generate a `dist` folder with the production build.
4. **Preview the production build locally:**
   ```bash
   npm run serve
   ```
   This will serve the production build at [http://localhost:4173](http://localhost:4173) by default.

## Usage as Microfrontend
This app is intended to be registered and loaded by a single-spa root-config. Make sure the module name matches the one used in your root-config (e.g., `navbarApp`).

## Development Notes
- Edit `src/root.component.jsx` for the main navbar component.
- For microfrontend integration, ensure module federation or SystemJS configuration matches your setup.

# Root Next.js App (single-spa root-config)

This is a [Next.js](https://nextjs.org) project that acts as the root-config for a microfrontend architecture using [single-spa](https://single-spa.js.org/).

## Prerequisites
- Node.js (v16 or higher recommended)
- npm (v8 or higher)

## Installation
```bash
npm install
```

## Running the App
```bash
npm run dev
```

The app will start on [http://localhost:3000](http://localhost:3000).

## Microfrontend Integration
- Microfrontends (like `navbar-app`) are registered in `src/app/singleSpa/registerMicrofrontends.js`.
- Make sure each microfrontend is running on its own dev server and is configured to be loaded by SystemJS or module federation as needed.

## Development Notes
- Edit `src/app/singleSpa/registerMicrofrontends.js` to register or update microfrontends.
- This project can be deployed as a regular Next.js app.

## Learn More
- [single-spa Documentation](https://single-spa.js.org/docs/getting-started-overview)
- [Next.js Documentation](https://nextjs.org/docs)

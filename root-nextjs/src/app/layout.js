'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function RootLayout({ children }) {
  useEffect(() => {
    import('../app/singleSpa/registerMicrofrontends.js');
  }, []);

  return (
    <html lang="en">
      <head>
        {/* ✅ Load SystemJS first */}
        <Script
          src="https://ga.jspm.io/npm:systemjs@6.14.1/dist/system.min.js"
          strategy="beforeInteractive"
        />

        {/* ✅ Register import map after SystemJS is loaded */}
      <Script
  id="systemjs-importmap"
  type="systemjs-importmap"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      imports: {
        navbarApp: 'http://localhost:4173/navbar-app.js',
        react: 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js',
        'react-dom': 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js',
        'single-spa-react': 'https://cdn.jsdelivr.net/npm/single-spa-react@4.6.0/lib/system/single-spa-react.min.js',
      },
    }),
  }}
/>


      </head>
      <body>
        <div id="single-spa-container" />
        {children}
      </body>
    </html>
  );
}

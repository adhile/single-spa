import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    modulePreload: false,
    outDir: 'dist',
    rollupOptions: {
      input: './src/index.js',
      external: ['react', 'react-dom', 'single-spa-react'],
      output: {
        format: 'system',
        entryFileNames: 'navbar-app.js',
        preserveEntrySignatures: 'exports-only',
        exports: 'named',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'single-spa-react': 'singleSpaReact',
        },
      },
    
    },
  },
  server: {
    port: 4173,
    cors: true,
  },
});

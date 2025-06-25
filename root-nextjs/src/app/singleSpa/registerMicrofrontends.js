import { registerApplication, start } from 'single-spa';

registerApplication({
  name: 'navbar-app',
    app: () => System.import('navbarApp'), // ✅ Named module, not a URL
  activeWhen: ['/']
});

registerApplication({
  name: 'dashboard-app',
  app: () => System.import('dashboardApp'),
  activeWhen: ['/dashboard']
});

start();

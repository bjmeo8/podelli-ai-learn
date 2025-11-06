import { HomePage, PodePage, PlayPage, AccountPage } from './pages.js';

// Router - Simple SPA routing
class Router {
  constructor(routes) {
    this.routes = routes;
    this.init();
  }

  init() {
    // Handle initial page load
    this.loadRoute();

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => this.loadRoute());

    // Handle link clicks
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-link]') || e.target.closest('[data-link]')) {
        e.preventDefault();
        const link = e.target.matches('[data-link]') ? e.target : e.target.closest('[data-link]');
        const path = link.getAttribute('href');
        this.navigateTo(path);
      }
    });
  }

  navigateTo(path) {
    window.history.pushState(null, null, path);
    this.loadRoute();
  }

  loadRoute() {
    const path = window.location.pathname;
    const route = this.routes[path] || this.routes['/'];

    // Get the root element
    const root = document.getElementById('root');
    if (root) {
      root.innerHTML = route();
      // Scroll to top on route change
      window.scrollTo(0, 0);
    }
  }
}

// Routes configuration
const routes = {
  '/': HomePage,
  '/pode': PodePage,
  '/play': PlayPage,
  '/account': AccountPage,
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new Router(routes);
});

// Export for potential use in other modules
export { Router, routes };

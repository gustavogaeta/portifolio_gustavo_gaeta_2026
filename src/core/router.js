/* ============================================================
   DEV ELITE — Router
   Hash-based SPA router with clean transitions
   ============================================================ */

import appState from './state.js';
import { eventBus } from './eventBus.js';

class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    this.isTransitioning = false;
  }

  register(path, handler) {
    this.routes[path] = handler;
  }

  async navigate(path) {
    if (this.isTransitioning) return;

    if (!this.routes[path]) {
      console.warn(`[Router] Route not found: ${path}, falling back to dashboard`);
      path = 'dashboard';
    }

    if (path === this.currentRoute) return; // skip if same route

    this.isTransitioning = true;
    appState.set('currentPage', path);
    eventBus.emit('navigation:start', { path });

    const root = document.getElementById('app');
    if (!root) {
      this.isTransitioning = false;
      return;
    }

    // Update hash without triggering hashchange
    const currentHash = window.location.hash.slice(1);
    if (currentHash !== path) {
      history.replaceState(null, '', '#' + path);
    }

    // Fade out
    root.style.opacity = '0';
    root.style.transform = 'translateY(8px)';

    await this._delay(150);

    // Execute handler
    try {
      await this.routes[path]();
    } catch (err) {
      console.error(`[Router] Error in handler for "${path}":`, err);
    }

    // Ensure visibility
    root.style.transition = 'opacity 0.3s cubic-bezier(0.16,1,0.3,1), transform 0.3s cubic-bezier(0.16,1,0.3,1)';
    root.style.opacity = '1';
    root.style.transform = 'translateY(0)';

    // Scroll to top
    root.scrollTop = 0;

    // Update active nav
    this._updateActiveNav(path);

    this.currentRoute = path;
    this.isTransitioning = false;
    eventBus.emit('navigation:end', { path });
  }

  _updateActiveNav(path) {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.page === path);
    });
  }

  start() {
    // Listen for hash changes
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1) || 'dashboard';
      this.navigate(hash);
    });

    // Navigate to initial route
    const initial = window.location.hash.slice(1) || 'dashboard';
    this.navigate(initial);
  }

  _delay(ms) {
    return new Promise(r => setTimeout(r, ms));
  }
}

const router = new Router();
export default router;

/* ============================================================
   DEV ELITE — App Controller
   Orchestrates initialization, sidebar, theme
   ============================================================ */

import appState from './state.js';

class App {
  constructor() {
    this.initialized = false;
  }

  async init() {
    if (this.initialized) return;

    this._setupTheme();
    this._setupGlobalListeners();

    this.initialized = true;
  }

  // Theme
  _setupTheme() {
    const theme = appState.get('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);

    appState.subscribe('theme', (newTheme) => {
      document.documentElement.setAttribute('data-theme', newTheme);
    });
  }

  toggleTheme() {
    const current = appState.get('theme') || 'dark';
    appState.set('theme', current === 'dark' ? 'light' : 'dark');
  }

  // Sidebar
  toggleSidebar(forceState = null) {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.mobile-overlay');

    if (!sidebar) return;

    const isOpen = forceState !== null ? forceState : !sidebar.classList.contains('open');

    if (isOpen) {
      sidebar.classList.add('open');
      if (overlay) overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      sidebar.classList.remove('open');
      if (overlay) overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    appState.set('sidebarOpen', isOpen);
  }

  // Global listeners
  _setupGlobalListeners() {
    // Escape closes sidebar
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (appState.get('sidebarOpen')) {
          this.toggleSidebar(false);
        }
      }
    });

    // Auto-close sidebar if resized to desktop
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth >= 1024 && appState.get('sidebarOpen')) {
          this.toggleSidebar(false);
        }
      }, 100);
    });
  }
}

const app = new App();
export default app;

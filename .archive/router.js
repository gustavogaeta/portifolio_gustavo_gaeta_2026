/* ============================================================
   DEV ELITE - Router
   SPA routing with cinematic transitions and ES Modules
   ============================================================ */

import appState from './state.js';
import { eventBus } from './eventBus.js';

class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    this.isTransitioning = false;
  }

  // Register a route
  register(path, handler) {
    this.routes[path] = handler;
  }

  // Navigate to a route
  async navigate(path) {
    console.log('🧭 Router: Navigating to', path);
    
    if (this.isTransitioning) {
      console.warn('⚠️ Router: Already transitioning, ignoring navigation');
      return;
    }
    
    if (!this.routes[path]) {
      console.warn(`⚠️ Router: Route not found: ${path}`);
      // Fallback to dashboard
      path = 'dashboard';
    }

    this.isTransitioning = true;

    // Update state
    appState.set('currentPage', path);

    // Emit navigation event
    eventBus.emit('navigation:start', { path });

    // Get root container
    const root = document.getElementById('app');
    if (!root) {
      console.error('❌ Router: Root #app element not found');
      this.isTransitioning = false;
      return;
    }

    // Update URL hash
    window.location.hash = path;

    // Call route handler
    const handler = this.routes[path];
    if (handler) {
      try {
        console.log('📄 Router: Executing handler for', path);
        await handler();
        console.log('✅ Router: Handler executed successfully');
      } catch (error) {
        console.error(`❌ Router: Error executing route handler for ${path}:`, error);
      }
    }

    // Ensure content is visible and properly styled
    root.style.opacity = '1';
    root.style.display = 'block';
    root.style.visibility = 'visible';
    root.style.filter = 'none';
    root.style.transform = 'none';

    // Update active nav item
    this._updateActiveNav(path);

    this.isTransitioning = false;
    this.currentRoute = path;

    // Emit navigation complete event
    eventBus.emit('navigation:end', { path });
    console.log('✅ Router: Navigation complete to', path);
  }

  // Update active navigation item
  _updateActiveNav(path) {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
      if (item.dataset.page === path) {
        item.classList.add('active');
      }
    });
  }

  // Start router (handle browser navigation)
  start() {
    console.log('🚀 Router: Starting router...');
    console.log('📋 Router: Available routes:', Object.keys(this.routes));
    
    // Handle hash changes
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1) || 'dashboard';
      console.log('🔄 Router: Hash changed to', hash);
      this.navigate(hash);
    });

    // Handle initial route
    const initialPath = window.location.hash.slice(1) || appState.get('currentPage') || 'dashboard';
    console.log('🎯 Router: Initial route:', initialPath);
    this.navigate(initialPath);
  }

  // Helper: delay function
  _delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Create global router instance
const router = new Router();

// Export
export default router;

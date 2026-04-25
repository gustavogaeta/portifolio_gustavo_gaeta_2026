/* ============================================================
   DEV ELITE - Core Application
   Main application initialization and orchestration with ES Modules
   ============================================================ */

import router from './router.js';
import appState from './state.js';
import { eventBus } from './eventBus.js';

import CursorComponent from '../components/cursor.js';

class App {
  constructor() {
    this.initialized = false;
    this.components = {};
  }

  // Initialize application
  async init() {
    if (this.initialized) return;

    console.log('🚀 Initializing DEV ELITE Application...');
    
    // Set up theme
    this._setupTheme();
    
    // Set up global event listeners
    this._setupGlobalListeners();
    
    // Initialize components
    await this._initComponents();
    
    // Initialize features
    await this._initFeatures();
    
    this.initialized = true;
    
    console.log('✅ DEV ELITE Application initialized');
  }

  // Setup theme
  _setupTheme() {
    const theme = appState.get('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    
    // Listen for theme changes
    appState.subscribe('theme', (newTheme) => {
      document.documentElement.setAttribute('data-theme', newTheme);
    });
  }

  // Setup global event listeners
  _setupGlobalListeners() {
    // Handle keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      // Escape to close sidebar/modals
      if (e.key === 'Escape') {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar && sidebar.classList.contains('open')) {
          this.toggleSidebar(false);
        }
      }
      
      // Cmd/Ctrl + K for search (future feature)
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // TODO: Implement search
      }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
      this._handleResize();
    });
  }

  // Handle window resize
  _handleResize() {
    // Close sidebar on mobile when window is resized
    if (window.innerWidth >= 768) {
      const sidebar = document.querySelector('.sidebar');
      if (sidebar) {
        sidebar.classList.remove('open');
      }
      const overlay = document.querySelector('.overlay');
      if (overlay) {
        overlay.classList.remove('active');
      }
    }
  }

  // Initialize components
  async _initComponents() {
    console.log('📦 Initializing components...');
    
    // Components will be registered here
    // This is a placeholder for component initialization
    
    console.log('✅ Components initialized');
  }

  // Initialize features
  async _initFeatures() {
    console.log('⚡ Initializing features...');
    
    // Features are initialized in index.html
    console.log('✅ Features initialized');
  }

  // Toggle sidebar
  toggleSidebar(forceState = null) {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    
    if (!sidebar || !overlay) return;
    
    const isOpen = forceState !== null ? forceState : !sidebar.classList.contains('open');
    
    if (isOpen) {
      sidebar.classList.add('open');
      overlay.classList.add('active');
      appState.set('sidebarOpen', true);
    } else {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
      appState.set('sidebarOpen', false);
    }
  }

  // Toggle theme
  toggleTheme() {
    const currentTheme = appState.get('theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    appState.set('theme', newTheme);
  }

  // Register component
  registerComponent(name, component) {
    this.components[name] = component;
  }

  // Get component
  getComponent(name) {
    return this.components[name];
  }
}

// Create global app instance
const app = new App();

// Export
export default app;

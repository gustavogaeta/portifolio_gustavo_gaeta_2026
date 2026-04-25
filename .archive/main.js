/* ============================================================
   DEV ELITE - Main Entry Point
   Initializes the entire application with modular architecture
   ============================================================ */

import app from './core/app.js';
import router from './core/router.js';
import appState from './core/state.js';
import { eventBus } from './core/eventBus.js';

// Components
import { renderSidebar } from './components/sidebar.js';
import { renderTopbar } from './components/topbar.js';
import CursorComponent from './components/cursor.js';

// Pages
import { renderDashboard } from './pages/dashboard.js';
import { renderPortfolios } from './pages/portfolios.js';
import { renderSubjectPage, initSubjectPage } from './pages/subject-page.js';

// Features
import AnimationSystem from './features/animations.js';
import TransitionSystem from './features/transitions.js';

// Initialize feature systems
const animationSystem = new AnimationSystem();
const transitionSystem = new TransitionSystem();
const cursorComponent = new CursorComponent();

// Page titles mapping
const pageTitles = {
  dashboard: 'Dashboard',
  portfolios: 'Portfólios',
  matematica: 'Matemática',
  natureza: 'Ciências da Natureza',
  humanas: 'Ciências Humanas',
  linguagens: 'Linguagens',
  modelagem: 'Modelagem de Sistemas',
  'banco-de-dados': 'Banco de Dados',
  iot: 'IoT'
};

// Register all routes
router.register('dashboard', async () => {
  const root = document.getElementById('app');
  if (root) {
    root.innerHTML = renderDashboard();
    updateTopbar('Dashboard');
    // Re-initialize animations after content render
    setTimeout(() => animationSystem.init(), 50);
  }
});

router.register('portfolios', async () => {
  const root = document.getElementById('app');
  if (root) {
    root.innerHTML = renderPortfolios();
    updateTopbar('Portfólios');
    // Re-initialize animations after content render
    setTimeout(() => animationSystem.init(), 50);
  }
});

// Register subject routes
router.register('matematica', async () => {
  initSubjectPage('matematica');
  updateTopbar('Matemática');
  setTimeout(() => animationSystem.init(), 50);
});

router.register('natureza', async () => {
  initSubjectPage('natureza');
  updateTopbar('Ciências da Natureza');
  setTimeout(() => animationSystem.init(), 50);
});

router.register('humanas', async () => {
  initSubjectPage('humanas');
  updateTopbar('Ciências Humanas');
  setTimeout(() => animationSystem.init(), 50);
});

router.register('linguagens', async () => {
  initSubjectPage('linguagens');
  updateTopbar('Linguagens');
  setTimeout(() => animationSystem.init(), 50);
});

router.register('modelagem', async () => {
  initSubjectPage('modelagem');
  updateTopbar('Modelagem de Sistemas');
  setTimeout(() => animationSystem.init(), 50);
});

router.register('banco-de-dados', async () => {
  initSubjectPage('bancoDeDados');
  updateTopbar('Banco de Dados');
  setTimeout(() => animationSystem.init(), 50);
});

router.register('iot', async () => {
  initSubjectPage('iot');
  updateTopbar('IoT');
  setTimeout(() => animationSystem.init(), 50);
});

// Update topbar title
function updateTopbar(title) {
  const topbarContainer = document.getElementById('topbar-container');
  if (topbarContainer) {
    topbarContainer.innerHTML = renderTopbar(title);
    setupThemeToggle();
  }
}

// Setup theme toggle
function setupThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      app.toggleTheme();
    });
  }
}

// Setup navigation
function setupNavigation() {
  document.addEventListener('click', (e) => {
    const navItem = e.target.closest('[data-page]');
    if (navItem) {
      e.preventDefault();
      const page = navItem.dataset.page;
      
      // Update active state
      document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
      });
      navItem.classList.add('active');
      
      // Navigate
      router.navigate(page);
      
      // Close sidebar on mobile
      closeSidebar();
    }
    
    // Handle explore cards
    const exploreCard = e.target.closest('.explore-card');
    if (exploreCard && exploreCard.dataset.page) {
      e.preventDefault();
      const page = exploreCard.dataset.page;
      router.navigate(page);
    }
  });
}

// Setup sidebar toggle
function setupSidebarToggle() {
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.querySelector('.mobile-overlay');
  const closeBtn = document.getElementById('sidebar-close');
  
  if (menuToggle && sidebar && overlay) {
    menuToggle.addEventListener('click', () => {
      app.toggleSidebar(true);
    });
    
    overlay.addEventListener('click', () => {
      app.toggleSidebar(false);
    });
    
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        app.toggleSidebar(false);
      });
    }
  }
}

// Close sidebar
function closeSidebar() {
  app.toggleSidebar(false);
}

// Render sidebar
function renderSidebarComponent() {
  const sidebarContainer = document.getElementById('sidebar-container');
  if (sidebarContainer) {
    sidebarContainer.innerHTML = renderSidebar();
  }
}

// Render initial topbar
function renderInitialTopbar() {
  const topbarContainer = document.getElementById('topbar-container');
  if (topbarContainer) {
    topbarContainer.innerHTML = renderTopbar('Dashboard');
  }
}

// Initialize application
async function initialize() {
  console.log('🚀 Initializing DEV ELITE Application...');
  
  // Initialize app core
  await app.init();
  
  // Initialize feature systems
  transitionSystem.init();
  
  // Render components
  renderSidebarComponent();
  renderInitialTopbar();
  
  // Setup event listeners
  setupNavigation();
  setupSidebarToggle();
  setupThemeToggle();
  
  // Initialize cursor
  cursorComponent.init();
  
  // Start router
  router.start();
  
  console.log('✅ DEV ELITE Application initialized successfully');
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize);
} else {
  initialize();
}

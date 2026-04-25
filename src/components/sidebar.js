/* ============================================================
   DEV ELITE — Sidebar Component
   Premium nav with SVG icons (Linear-style)
   ============================================================ */

export function renderSidebar() {
  return `
    <div class="sidebar-header">
      <div class="sidebar-logo">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="logo-icon">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
        <span class="logo-text">DEV ELITE</span>
      </div>
      <button class="sidebar-close" id="sidebar-close" aria-label="Fechar menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>

    <nav class="sidebar-nav">
      <div class="nav-section">
        <span class="nav-section-title">Principal</span>
        <a href="#dashboard" class="nav-item active" data-page="dashboard">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="nav-icon">
            <rect x="3" y="3" width="7" height="7" rx="1"></rect>
            <rect x="14" y="3" width="7" height="7" rx="1"></rect>
            <rect x="14" y="14" width="7" height="7" rx="1"></rect>
            <rect x="3" y="14" width="7" height="7" rx="1"></rect>
          </svg>
          <span>Dashboard</span>
        </a>
        <a href="#portfolios" class="nav-item" data-page="portfolios">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="nav-icon">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Portfólios</span>
        </a>
      </div>

      <div class="nav-section">
        <span class="nav-section-title">Ensino Médio</span>
        <a href="#matematica" class="nav-item" data-page="matematica">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="nav-icon">
            <line x1="4" y1="20" x2="20" y2="4"></line>
            <line x1="4" y1="4" x2="20" y2="20"></line>
          </svg>
          <span>Matemática</span>
        </a>
        <a href="#natureza" class="nav-item" data-page="natureza">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="nav-icon">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          <span>Natureza</span>
        </a>
        <a href="#humanas" class="nav-item" data-page="humanas">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="nav-icon">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span>Humanas</span>
        </a>
        <a href="#linguagens" class="nav-item" data-page="linguagens">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="nav-icon">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
          <span>Linguagens</span>
        </a>
      </div>

      <div class="nav-section">
        <span class="nav-section-title">Técnico</span>
        <a href="#modelagem" class="nav-item" data-page="modelagem">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="nav-icon">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
          <span>Modelagem</span>
        </a>
        <a href="#banco-de-dados" class="nav-item" data-page="banco-de-dados">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="nav-icon">
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          </svg>
          <span>Banco de Dados</span>
        </a>
        <a href="#iot" class="nav-item" data-page="iot">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="nav-icon">
            <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
            <line x1="12" y1="2" x2="12" y2="12"></line>
          </svg>
          <span>IoT</span>
        </a>
      </div>
    </nav>

    <div class="sidebar-footer">
      <div class="sidebar-footer-text">© 2025 DEV ELITE</div>
    </div>
  `;
}

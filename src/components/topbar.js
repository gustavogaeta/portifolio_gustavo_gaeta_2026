/* ============================================================
   DEV ELITE — Topbar Component
   Minimal header with page title and actions
   ============================================================ */

export function renderTopbar(pageTitle = 'Dashboard') {
  return `
    <div class="topbar-content">
      <button class="menu-toggle" id="menu-toggle" aria-label="Abrir menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      
      <span class="topbar-title">${pageTitle}</span>
      
      <div class="topbar-actions">
        <button class="theme-toggle" id="theme-toggle" aria-label="Alternar tema">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </svg>
        </button>
      </div>
    </div>
  `;
}

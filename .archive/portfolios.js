/* ============================================================
   DEV ELITE - Portfolios Page
   Premium portfolio evolution page
   ============================================================ */

export function renderPortfolios() {
  return `
    <div class="portfolios-page">
      <div class="page-header">
        <h1 class="page-title">Portfólios Anteriores</h1>
        <p class="page-description">Evolução dos meus portfólios ao longo dos anos: Canva (1º ano), Google Sites (2º ano) e DEV ELITE (3º ano).</p>
      </div>

      <div class="portfolios-grid">
        <!-- 1º Ano - Canva -->
        <div class="portfolio-card">
          <div class="portfolio-header">
            <div class="portfolio-info">
              <h3 class="portfolio-title">1º Ano - Canva</h3>
              <span class="portfolio-badge">Canva</span>
            </div>
          </div>
          <div class="portfolio-content">
            <p class="portfolio-description">
              Portfólio criado utilizando a plataforma Canva para apresentar as atividades e projetos do primeiro ano do ensino médio.
            </p>
            <div class="portfolio-link">
              <a href="https://www.canva.com/design/seu-link" target="_blank" rel="noopener noreferrer" class="portfolio-btn">
                <span>Abrir Portfólio</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- 2º Ano - Google Sites -->
        <div class="portfolio-card">
          <div class="portfolio-header">
            <div class="portfolio-info">
              <h3 class="portfolio-title">2º Ano - Google Sites</h3>
              <span class="portfolio-badge">Google Sites</span>
            </div>
          </div>
          <div class="portfolio-content">
            <p class="portfolio-description">
              Portfólio desenvolvido com Google Sites para documentar as atividades e aprendizados do segundo ano, com maior interatividade.
            </p>
            <div class="portfolio-link">
              <a href="https://sites.google.com/view/seu-link" target="_blank" rel="noopener noreferrer" class="portfolio-btn">
                <span>Abrir Portfólio</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- 3º Ano - Atual -->
        <div class="portfolio-card featured">
          <div class="portfolio-header">
            <div class="portfolio-info">
              <h3 class="portfolio-title">3º Ano - DEV ELITE</h3>
              <span class="portfolio-badge premium">Versão Programada</span>
            </div>
          </div>
          <div class="portfolio-content">
            <p class="portfolio-description">
              Portfólio totalmente programado com arquitetura moderna, design system Linear, animações Apple-level e sistema reativo.
              Esta é a versão mais avançada e profissional.
            </p>
            <div class="portfolio-link">
              <span class="portfolio-current">Você está aqui</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline Section -->
      <section class="timeline-section">
        <h2 class="section-title">Evolução do Portfólio</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker">1</div>
            <div class="timeline-content">
              <h3 class="timeline-title">1º Ano - Canva</h3>
              <p class="timeline-description">Início da jornada com design visual e apresentação criativa.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">2</div>
            <div class="timeline-content">
              <h3 class="timeline-title">2º Ano - Google Sites</h3>
              <p class="timeline-description">Introdução à web e estruturação de conteúdo online.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">3</div>
            <div class="timeline-content">
              <h3 class="timeline-title">3º Ano - DEV ELITE</h3>
              <p class="timeline-description">Portfólio programado com arquitetura profissional e design premium.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

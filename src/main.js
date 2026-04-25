/* ============================================================
   Portfolio — Main v3
   Scene-based orchestrator: scroll, nav, overlay, cursor
   ============================================================ */

import { getActivities } from './data/activities.js';
import CursorComponent from './components/cursor.js';
import WaveBackground from './core/wave-background.js';

// ============ STATE ============

const state = {
  currentScene: 0,
  totalScenes: 6,
  overlayOpen: false,
  theme: localStorage.getItem('dev-elite-theme') || 'dark'
};

// ============ DOM REFS ============

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ============ THEME ============

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  state.theme = theme;
  localStorage.setItem('dev-elite-theme', theme);
}

// ============ SCROLL → SCENE TRACKING ============

// ============ SCROLL → SCENE TRACKING ============

let isScrolling = false;
let scrollTimeout;

function setupSceneTracking() {
  const container = $('#scenes');
  if (!container) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
        const idx = parseInt(entry.target.id.replace('scene-', ''));
        if (!isNaN(idx) && idx !== state.currentScene) {
          state.currentScene = idx;
          updateNavDots(idx);
          revealSceneElements(entry.target);
        }
      }
    });
  }, {
    root: container,
    threshold: [0.35, 0.6]
  });

  $$('.scene').forEach(scene => observer.observe(scene));

  // We exclusively use CSS scroll-snap (y proximity) to avoid javascript jitter and wheel event conflicts.
  // The observer is still used to update the navigation dots and trigger reveal animations.
}

function updateNavDots(idx) {
  $$('.fnav__dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === idx);
  });
}

// ============ NAV DOT CLICKS ============

function setupNavigation() {
  $$('.fnav__dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.scene);
      const target = $(`#scene-${idx}`);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ============ SCENE ELEMENT REVEAL ============

function revealSceneElements(scene) {
  const elements = scene.querySelectorAll('.scene-element:not(.visible), .p-card:not(.visible), .skill-card:not(.visible), .bento-tile:not(.visible)');
  elements.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 80);
  });
}

function setupInitialReveals() {
  const firstScene = $('#scene-0');
  if (firstScene) {
    const elements = firstScene.querySelectorAll('.hero__char, .hero__sub, .hero__actions, .hero__scroll');
    elements.forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 300 + i * 100);
    });
  }
}

// ============ BENTO SPOTLIGHT ============

function setupBentoSpotlight() {
  $$('.bento-tile').forEach(tile => {
    tile.addEventListener('mousemove', (e) => {
      const rect = tile.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      tile.style.setProperty('--mx', x + '%');
      tile.style.setProperty('--my', y + '%');
    });
  });
}

// ============ OVERLAY SYSTEM ============

function openOverlay(subject) {
  const overlay = $('#overlay');
  const content = $('#overlay-content');
  if (!overlay || !content) return;

  state.overlayOpen = true;

  content.innerHTML = renderSubjectContent(subject);
  setupTrimesterButtons(subject, content);

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

window.openOverlay = openOverlay;

function closeOverlay() {
  const overlay = $('#overlay');
  if (!overlay) return;

  state.overlayOpen = false;
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function setupOverlay() {
  const closeBtn = $('#overlay-close');
  if (closeBtn) closeBtn.addEventListener('click', closeOverlay);

  const backdrop = $('.overlay__backdrop');
  if (backdrop) backdrop.addEventListener('click', closeOverlay);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.overlayOpen) closeOverlay();
  });

  $$('.bento-tile').forEach(tile => {
    tile.addEventListener('click', () => {
      const subject = tile.dataset.subject;
      if (subject) openOverlay(subject);
    });
  });
}

// ============ SUBJECT RENDERING ============

const subjectMap = {
  matematica: 'Matemática',
  natureza: 'Ciências da Natureza',
  humanas: 'Ciências Humanas',
  linguagens: 'Linguagens',
  modelagem: 'Modelagem de Sistemas',
  bancoDeDados: 'Banco de Dados',
  iot: 'IoT'
};

function renderSubjectContent(subject) {
  const title = subjectMap[subject] || subject;
  return `
    <div class="subject-page">
      <div class="page-header">
        <h2 class="page-heading">${title}</h2>
        <p class="page-description">Explorando conquistas e habilidades técnicas.</p>
      </div>
      <div class="trimester-selector-container">
        <div class="trimester-selector">
          <span class="selector-label">TRIMESTRE</span>
          <div class="selector-buttons">
            <button class="trimester-btn active" data-trimester="1">1º</button>
            <button class="trimester-btn locked" data-trimester="2" data-tooltip="Ainda não é o 2º trimestre">
              2º
              <svg class="lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </button>
            <button class="trimester-btn locked" data-trimester="3" data-tooltip="Ainda não é o 3º trimestre">
              3º
              <svg class="lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="activities-grid" id="activities-grid">
        ${renderActivities(subject, '1')}
      </div>
    </div>
  `;
}

function renderActivities(subject, trimester) {
  const activities = getActivities(subject, trimester);

  if (!activities || activities.length === 0) {
    return `
      <div class="empty-state">
        <h3 class="empty-title">Nenhuma atividade</h3>
        <p class="empty-description">Aguardando novos conteúdos técnicos.</p>
      </div>
    `;
  }

  return activities.map(a => `
    <div class="activity-card">
      <div class="activity-header">
        <h3 class="activity-title">${a.subject}</h3>
        <span class="activity-badge">${trimester}º TRI</span>
      </div>
      <div class="activity-field">
        <span class="field-label">Descrição</span>
        <p class="field-content">${a.description}</p>
      </div>
      ${a.habilidades?.length ? `
      <div class="activity-field">
        <span class="field-label">HABILIDADES</span>
        <ul class="skills-list">
          ${a.habilidades.map(s => `<li class="skill-item">${s}</li>`).join('')}
        </ul>
      </div>` : ''}
      ${a.preview ? `
      <div class="activity-preview">
        <span class="preview-label">PREVIEW</span>
        ${typeof a.preview === 'object' && a.preview.image ? `
          <a href="${a.preview.link || '#'}" target="_blank" class="preview-image-link" ${!a.preview.link ? 'onclick="return false;"' : ''}>
            <img src="${a.preview.image}" alt="${a.preview.text || 'Preview'}" class="preview-image">
          </a>
        ` : `
          <div class="preview-content">${typeof a.preview === 'string' ? a.preview : a.preview.text}</div>
        `}
      </div>` : ''}
    </div>
  `).join('');
}

function setupTrimesterButtons(subject, container) {
  const btns = container.querySelectorAll('.trimester-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Prevent clicking on locked buttons
      if (btn.classList.contains('locked')) {
        return;
      }
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const grid = container.querySelector('#activities-grid');
      if (grid) {
        grid.style.opacity = '0';
        grid.style.transform = 'translateY(10px)';
        setTimeout(() => {
          grid.innerHTML = renderActivities(subject, btn.dataset.trimester);
          requestAnimationFrame(() => {
            grid.style.transition = 'opacity 0.4s var(--ease-out), transform 0.4s var(--ease-out)';
            grid.style.opacity = '1';
            grid.style.transform = 'translateY(0)';
          });
        }, 200);
      }
    });
  });
}

// ============ AMBIENT CANVAS — Particles ============

function setupAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let w, h;
  const particles = [];
  const count = 35;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function createParticles() {
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.2 + 0.05
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha})`;
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(139, 92, 246, ${0.02 * (1 - dist / 180)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }

  resize(); createParticles(); draw();
  window.addEventListener('resize', resize);
}

// ============ CARD TILT ============

function setupCardTilt() {
  $$('.p-card, .skill-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translateY(-4px) perspective(1000px) rotateX(${y * -4}deg) rotateY(${x * 4}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ============ INITIALIZE ============

function init() {
  applyTheme(state.theme);

  const themeBtn = $('#theme-toggle');
  if (themeBtn) themeBtn.addEventListener('click', () => applyTheme(state.theme === 'dark' ? 'light' : 'dark'));

  setupSceneTracking();
  setupNavigation();
  setupInitialReveals();
  setupBentoSpotlight();
  setupOverlay();
  setupCardTilt();
  setupAmbientCanvas();
  setupWaveBackground();

  const cursor = new CursorComponent();
  cursor.init();
}

// ============ WAVE BACKGROUND ============

function setupWaveBackground() {
  const canvas = document.getElementById('wave-canvas');
  if (!canvas) return;

  const waveBg = new WaveBackground(canvas, {
    colors: [
      { r: 0, g: 150, b: 255, a: 0.4 },  // Blue
      { r: 0, g: 100, b: 200, a: 0.35 }, // Deep blue
      { r: 50, g: 80, b: 200, a: 0.3 },  // Purple-blue
      { r: 0, g: 80, b: 180, a: 0.25 },   // Cyan-blue
      { r: 30, g: 60, b: 180, a: 0.2 },  // Dark blue
      { r: 0, g: 60, b: 160, a: 0.15 }   // Deepest blue
    ],
    waveCount: 6,
    pointsPerWave: 200,
    amplitude: 100,
    frequency: 0.004,
    speed: 0.0005,
    glowEnabled: false,
    mouseInteraction: true,
    mouseInfluence: 40
  });

  // Expose to window for debugging
  window.waveBackground = waveBg;
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();

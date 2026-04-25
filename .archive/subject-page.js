/* ============================================================
   DEV ELITE - Subject Page Generator
   Gerador de páginas de matérias (ESTRUTURA PRESERVADA) com ES Modules
   ============================================================ */

import { getActivities } from '../data/activities.js';
import appState from '../core/state.js';

export function renderSubjectPage(subjectName, subjectTitle, subjectIcon) {
  return `
    <div class="subject-page">
      <div class="page-header">
        <h1 class="page-title">${subjectTitle}</h1>
        <p class="page-description">Explore todas as atividades organizadas por trimestre.</p>
      </div>

      <div class="trimester-selector-container">
        <div class="trimester-selector">
          <span class="selector-label">Trimestre:</span>
          <div class="selector-buttons">
            <button class="trimester-btn active" data-trimester="1">1º</button>
            <button class="trimester-btn" data-trimester="2">2º</button>
            <button class="trimester-btn" data-trimester="3">3º</button>
          </div>
        </div>
      </div>

      <div class="activities-grid" id="activities-grid">
        <!-- Activities will be rendered dynamically -->
      </div>
    </div>
  `;
}

export function renderActivitiesByTrimester(subject, trimester) {
  const activities = getActivities(subject, trimester);
  
  if (activities.length === 0) {
    return `
      <div class="empty-state">
        <h3 class="empty-title">Nenhuma atividade</h3>
        <p class="empty-description">Não há atividades cadastradas para o ${trimester}º trimestre.</p>
      </div>
    `;
  }
  
  return activities.map((activity, index) => {
    return `
      <div class="activity-card">
        <div class="activity-header">
          <h3 class="activity-title">${activity.subject}</h3>
          <span class="activity-badge">${trimester}º Trimestre</span>
        </div>
        <div class="activity-field">
          <span class="field-label">Descrição</span>
          <p class="field-content">${activity.description}</p>
        </div>
        ${activity.skills && activity.skills.length > 0 ? `
        <div class="activity-field">
          <span class="field-label">Habilidades</span>
          <ul class="skills-list">
            ${activity.skills.map(skill => `<li class="skill-item">${skill}</li>`).join('')}
          </ul>
        </div>
        ` : ''}
        ${activity.preview ? `
        <div class="activity-preview">
          <span class="preview-label">Preview</span>
          <div class="preview-content">${activity.preview}</div>
        </div>
        ` : ''}
      </div>
    `;
  }).join('');
}

export function updateActivitiesGrid(subject, trimester) {
  const grid = document.getElementById('activities-grid');
  if (grid) {
    grid.innerHTML = renderActivitiesByTrimester(subject, trimester);
  }
}

// Initialize subject page
export function initSubjectPage(subject) {
  const subjectMap = {
    matematica: { title: 'Matemática', icon: '📐' },
    natureza: { title: 'Ciências da Natureza', icon: '🔬' },
    humanas: { title: 'Ciências Humanas', icon: '🌍' },
    linguagens: { title: 'Linguagens', icon: '📚' },
    modelagem: { title: 'Modelagem de Sistemas', icon: '🏗️' },
    bancoDeDados: { title: 'Banco de Dados', icon: '🗄️' },
    iot: { title: 'IoT', icon: '🔌' }
  };

  const info = subjectMap[subject] || { title: subject, icon: '📚' };
  const currentTrimester = appState.get('currentTrimester') || '1';
  
  // Render page to #app container
  const pageContent = document.getElementById('app');
  if (pageContent) {
    pageContent.innerHTML = renderSubjectPage(subject, info.title, info.icon);
    
    // Force visibility
    pageContent.style.opacity = '1';
    pageContent.style.display = 'block';
    pageContent.style.visibility = 'visible';
    pageContent.style.transform = 'none';
    
    // Update page title
    document.title = `${info.title} — Portfólio Escolar`;
    
    // Initialize trimester selector
    const selectorContainer = document.querySelector('.trimester-selector');
    if (selectorContainer) {
      const buttons = selectorContainer.querySelectorAll('.trimester-btn');
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          const trimester = btn.dataset.trimester;
          buttons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          appState.set('currentTrimester', trimester);
          updateActivitiesGrid(subject, trimester);
        });
      });
    }
    
    // Render initial activities
    updateActivitiesGrid(subject, currentTrimester);
  }
}

/* ============================================================
   DEV ELITE - Activity Card Component
   Componente de card de atividade (ESTRUTURA PRESERVADA)
   ============================================================ */

const activityCardComponent = `
  <div class="activity-card" data-animate="fadeInUp">
    <div class="activity-header">
      <h3 class="activity-title">{{title}}</h3>
      <span class="activity-badge">{{trimester}}</span>
    </div>
    
    <div class="activity-field">
      <span class="field-label">Assunto</span>
      <p class="field-content">{{subject}}</p>
    </div>
    
    <div class="activity-field">
      <span class="field-label">Habilidades</span>
      <ul class="skills-list">
        {{skills}}
      </ul>
    </div>
    
    <div class="activity-field">
      <span class="field-label">Descrição</span>
      <p class="field-content">{{description}}</p>
    </div>
    
    {{preview}}
  </div>
`;

const skillItemComponent = `
  <li class="skill-item">{{skill}}</li>
`;

renderer.register('activity-card', activityCardComponent);
renderer.register('skill-item', skillItemComponent);

// Helper function to render activity card with data
function renderActivityCard(activity) {
  const skillsHtml = activity.skills.map(skill => 
    renderer.render('skill-item', { skill })
  ).join('');
  
  const previewHtml = activity.preview ? `
    <div class="activity-preview">
      <span class="preview-label">Preview</span>
      ${activity.preview}
    </div>
  ` : '';
  
  return renderer.render('activity-card', {
    title: activity.title,
    trimester: activity.trimester,
    subject: activity.subject,
    skills: skillsHtml,
    description: activity.description,
    preview: previewHtml
  });
}

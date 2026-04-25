/* ============================================================
   DEV ELITE - Trimester Selector Component
   Componente de seletor de trimestre
   ============================================================ */

const trimesterSelectorComponent = `
  <div class="trimester-selector">
    <span class="selector-label">Trimestre:</span>
    <div class="selector-buttons">
      <button class="trimester-btn" data-trimester="1">1º</button>
      <button class="trimester-btn" data-trimester="2">2º</button>
      <button class="trimester-btn" data-trimester="3">3º</button>
    </div>
  </div>
`;

renderer.register('trimester-selector', trimesterSelectorComponent);

// Helper function to initialize trimester selector
function initTrimesterSelector(container, onChange) {
  const buttons = container.querySelectorAll('.trimester-btn');
  const currentTrimester = appState.get('trimester') || '1';
  
  // Set active state
  buttons.forEach(btn => {
    if (btn.dataset.trimester === currentTrimester) {
      btn.classList.add('active');
    }
    
    btn.addEventListener('click', () => {
      // Remove active from all
      buttons.forEach(b => b.classList.remove('active'));
      // Add active to clicked
      btn.classList.add('active');
      // Update state
      appState.set('trimester', btn.dataset.trimester);
      // Call onChange callback
      if (onChange) onChange(btn.dataset.trimester);
    });
  });
}

/* ============================================================
   DEV ELITE - Tabs Component
   Animated tabs with smooth transitions
   ============================================================ */

class TabsComponent {
  constructor() {
    this.tabs = [];
  }

  // Create tabs component
  create(options = {}) {
    const {
      tabs = [],
      defaultTab = 0,
      onChange = null
    } = options;

    const container = document.createElement('div');
    container.className = 'tabs-container';

    // Create tab buttons
    const tabButtons = document.createElement('div');
    tabButtons.className = 'tab-buttons';

    tabs.forEach((tab, index) => {
      const button = document.createElement('button');
      button.className = `tab-button ${index === defaultTab ? 'active' : ''}`;
      button.textContent = tab.label;
      button.dataset.index = index;
      
      button.addEventListener('click', () => {
        this._activateTab(container, index, onChange);
      });

      tabButtons.appendChild(button);
    });

    container.appendChild(tabButtons);

    // Create tab content
    const tabContent = document.createElement('div');
    tabContent.className = 'tab-content';

    tabs.forEach((tab, index) => {
      const content = document.createElement('div');
      content.className = `tab-panel ${index === defaultTab ? 'active' : ''}`;
      content.innerHTML = tab.content;
      tabContent.appendChild(content);
    });

    container.appendChild(tabContent);

    // Add styles
    this._addStyles();

    return container;
  }

  // Activate a specific tab
  _activateTab(container, index, onChange) {
    const buttons = container.querySelectorAll('.tab-button');
    const panels = container.querySelectorAll('.tab-panel');

    buttons.forEach((button, i) => {
      if (i === index) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });

    panels.forEach((panel, i) => {
      if (i === index) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });

    // Call onChange callback
    if (onChange) {
      onChange(index);
    }
  }

  // Add tabs styles
  _addStyles() {
    if (document.querySelector('#tabs-styles')) return;

    const style = document.createElement('style');
    style.id = 'tabs-styles';
    style.textContent = `
      .tabs-container {
        width: 100%;
      }

      .tab-buttons {
        display: flex;
        gap: var(--space-2);
        margin-bottom: var(--space-6);
        border-bottom: 1px solid var(--border-primary);
        padding-bottom: var(--space-2);
      }

      .tab-button {
        padding: var(--space-3) var(--space-6);
        background: transparent;
        border: none;
        border-radius: var(--radius-lg);
        color: var(--text-secondary);
        font-size: var(--text-sm);
        font-weight: 500;
        cursor: pointer;
        transition: all var(--duration-200) var(--ease-out);
        position: relative;
      }

      .tab-button::after {
        content: '';
        position: absolute;
        bottom: calc(var(--space-2) * -1);
        left: 0;
        right: 0;
        height: 2px;
        background: var(--accent-primary);
        transform: scaleX(0);
        transition: transform var(--duration-300) var(--ease-spring);
      }

      .tab-button:hover {
        color: var(--text-primary);
        background: var(--bg-tertiary);
      }

      .tab-button.active {
        color: var(--accent-primary);
        background: var(--accent-primary-light);
      }

      .tab-button.active::after {
        transform: scaleX(1);
      }

      .tab-content {
        position: relative;
      }

      .tab-panel {
        display: none;
        opacity: 0;
        transform: translateY(10px);
        transition: opacity var(--duration-300) var(--ease-out), transform var(--duration-300) var(--ease-out);
      }

      .tab-panel.active {
        display: block;
        opacity: 1;
        transform: translateY(0);
      }

      /* Trimester Tabs Specific */
      .trimester-tabs .tab-button {
        min-width: 80px;
      }
    `;
    document.head.appendChild(style);
  }

  // Initialize trimester tabs
  initTrimesterTabs(container, onChange) {
    const tabs = [
      { label: '1º Trimestre', content: '' },
      { label: '2º Trimestre', content: '' },
      { label: '3º Trimestre', content: '' }
    ];

    const tabsComponent = this.create({
      tabs,
      defaultTab: 0,
      onChange: (index) => {
        const trimester = (index + 1).toString();
        appState.set('currentTrimester', trimester);
        if (onChange) {
          onChange(trimester);
        }
      }
    });

    container.innerHTML = '';
    container.appendChild(tabsComponent);
    container.classList.add('trimester-tabs');
  }
}

// Export
export default TabsComponent;

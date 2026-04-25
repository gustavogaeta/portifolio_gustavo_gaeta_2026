/* ============================================================
   DEV ELITE - Modal Component
   Modern modal with backdrop blur and smooth animations
   ============================================================ */

class ModalComponent {
  constructor() {
    this.activeModal = null;
    this.modals = [];
  }

  // Create a modal
  create(options = {}) {
    const {
      title = '',
      content = '',
      footer = '',
      size = 'medium', // small, medium, large
      onClose = null
    } = options;

    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';

    // Create modal container
    const modal = document.createElement('div');
    modal.className = `modal modal-${size}`;

    // Build modal HTML
    let html = '';

    if (title) {
      html += `
        <div class="modal-header">
          <h2 class="modal-title">${title}</h2>
          <button class="modal-close" aria-label="Fechar modal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      `;
    }

    html += `
      <div class="modal-body">
        ${content}
      </div>
    `;

    if (footer) {
      html += `
        <div class="modal-footer">
          ${footer}
        </div>
      `;
    }

    modal.innerHTML = html;

    // Add close button handler
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.close(overlay);
      });
    }

    // Close on overlay click
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        this.close(overlay);
      }
    });

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.close(overlay);
      }
    });

    overlay.appendChild(modal);

    // Add styles
    this._addStyles();

    return overlay;
  }

  // Open a modal
  open(modal) {
    if (this.activeModal) {
      this.close(this.activeModal);
    }

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Trigger animation
    requestAnimationFrame(() => {
      modal.classList.add('active');
    });

    this.activeModal = modal;
  }

  // Close a modal
  close(modal) {
    modal.classList.remove('active');

    setTimeout(() => {
      modal.remove();
      document.body.style.overflow = '';
    }, 300);

    if (this.activeModal === modal) {
      this.activeModal = null;
    }
  }

  // Close active modal
  closeActive() {
    if (this.activeModal) {
      this.close(this.activeModal);
    }
  }

  // Add modal styles
  _addStyles() {
    if (document.querySelector('#modal-styles')) return;

    const style = document.createElement('style');
    style.id = 'modal-styles';
    style.textContent = `
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        z-index: var(--z-modal);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--space-6);
        opacity: 0;
        transition: opacity var(--duration-300) var(--ease-out);
        pointer-events: none;
      }

      .modal-overlay.active {
        opacity: 1;
        pointer-events: auto;
      }

      .modal {
        background: var(--bg-secondary);
        border: 1px solid var(--border-primary);
        border-radius: var(--radius-2xl);
        box-shadow: var(--shadow-3xl);
        max-width: 100%;
        max-height: 100%;
        overflow: hidden;
        opacity: 0;
        transform: scale(0.95) translateY(20px);
        transition: opacity var(--duration-300) var(--ease-out), transform var(--duration-300) var(--ease-spring);
      }

      .modal-overlay.active .modal {
        opacity: 1;
        transform: scale(1) translateY(0);
      }

      .modal-small {
        width: 400px;
      }

      .modal-medium {
        width: 600px;
      }

      .modal-large {
        width: 900px;
      }

      .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--space-6);
        border-bottom: 1px solid var(--border-primary);
      }

      .modal-title {
        font-size: var(--text-xl);
        font-weight: 600;
        color: var(--text-primary);
        letter-spacing: var(--tracking-tight);
        margin: 0;
      }

      .modal-close {
        width: 36px;
        height: 36px;
        background: transparent;
        border: 1px solid var(--border-secondary);
        border-radius: var(--radius-md);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all var(--duration-200) var(--ease-out);
        color: var(--text-secondary);
      }

      .modal-close:hover {
        background: var(--bg-tertiary);
        color: var(--text-primary);
        border-color: var(--accent-primary);
      }

      .modal-close svg {
        width: 20px;
        height: 20px;
      }

      .modal-body {
        padding: var(--space-6);
        overflow-y: auto;
        max-height: calc(100vh - 200px);
      }

      .modal-footer {
        padding: var(--space-6);
        border-top: 1px solid var(--border-primary);
        display: flex;
        gap: var(--space-3);
        justify-content: flex-end;
      }

      @media (max-width: 768px) {
        .modal {
          width: 100% !important;
          margin: var(--space-4);
        }

        .modal-small,
        .modal-medium,
        .modal-large {
          width: 100%;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// Export
export default ModalComponent;

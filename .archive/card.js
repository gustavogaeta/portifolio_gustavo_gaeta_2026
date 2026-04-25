/* ============================================================
   DEV ELITE - Card Component
   Reusable card component with modern design
   ============================================================ */

class CardComponent {
  constructor() {
    this.cards = [];
  }

  // Create a card element
  create(options = {}) {
    const {
      title = '',
      description = '',
      icon = '',
      badge = '',
      skills = [],
      preview = '',
      onClick = null,
      className = ''
    } = options;

    const card = document.createElement('div');
    card.className = `card ${className}`;
    card.classList.add('magnetic');

    // Build card HTML
    let html = '';

    if (icon || title) {
      html += `
        <div class="card-header">
          ${icon ? `<div class="card-icon">${icon}</div>` : ''}
          <div class="card-title-group">
            ${title ? `<h3 class="card-title">${title}</h3>` : ''}
            ${badge ? `<span class="card-badge">${badge}</span>` : ''}
          </div>
        </div>
      `;
    }

    if (description) {
      html += `<p class="card-description">${description}</p>`;
    }

    if (skills && skills.length > 0) {
      html += `
        <div class="card-skills">
          ${skills.map(skill => `<span class="card-skill">${skill}</span>`).join('')}
        </div>
      `;
    }

    if (preview) {
      html += `
        <div class="card-preview">
          <span class="preview-label">Preview</span>
          <div class="preview-content">${preview}</div>
        </div>
      `;
    }

    card.innerHTML = html;

    // Add click handler
    if (onClick) {
      card.addEventListener('click', onClick);
    }

    return card;
  }

  // Create activity card
  createActivityCard(activity) {
    const {
      subject = '',
      description = '',
      skills = [],
      preview = '',
      trimester = ''
    } = activity;

    const card = this.create({
      title: subject,
      description,
      skills,
      preview,
      badge: trimester ? `${trimester}º Trimestre` : '',
      className: 'activity-card'
    });

    return card;
  }

  // Initialize all cards on page
  init() {
    this._addStyles();
    this._animateCards();
  }

  // Add card styles
  _addStyles() {
    if (document.querySelector('#card-styles')) return;

    const style = document.createElement('style');
    style.id = 'card-styles';
    style.textContent = `
      .card {
        background: var(--bg-secondary);
        border: 1px solid var(--border-primary);
        border-radius: var(--radius-2xl);
        padding: var(--space-6);
        transition: all var(--duration-300) var(--ease-out);
        position: relative;
        overflow: hidden;
        box-shadow: var(--shadow-sm);
      }

      .card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
        opacity: 0;
        transition: opacity var(--duration-300) var(--ease-out);
      }

      .card:hover {
        transform: translateY(-8px);
        border-color: var(--accent-primary);
        box-shadow: var(--shadow-2xl), 0 0 30px rgba(139, 92, 246, 0.2);
      }

      .card:hover::before {
        opacity: 1;
      }

      .card-header {
        display: flex;
        align-items: center;
        gap: var(--space-4);
        margin-bottom: var(--space-4);
      }

      .card-icon {
        font-size: var(--text-3xl);
        filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.5));
      }

      .card-title-group {
        flex: 1;
      }

      .card-title {
        font-size: var(--text-lg);
        font-weight: 600;
        color: var(--text-primary);
        letter-spacing: var(--tracking-tight);
        margin: 0;
      }

      .card-badge {
        display: inline-block;
        font-size: var(--text-xs);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--accent-primary);
        background: var(--accent-primary-light);
        padding: var(--space-1) var(--space-3);
        border-radius: var(--radius-full);
        margin-left: var(--space-2);
      }

      .card-description {
        font-size: var(--text-sm);
        color: var(--text-secondary);
        line-height: var(--leading-relaxed);
        margin-bottom: var(--space-4);
      }

      .card-skills {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-2);
        margin-bottom: var(--space-4);
      }

      .card-skill {
        padding: var(--space-1) var(--space-3);
        background: var(--accent-secondary-light);
        color: var(--text-secondary);
        border-radius: var(--radius-md);
        font-size: var(--text-sm);
        font-weight: 500;
        transition: all var(--duration-200) var(--ease-out);
      }

      .card-skill:hover {
        background: var(--accent-primary);
        color: var(--text-primary);
      }

      .card-preview {
        margin-top: var(--space-4);
        padding-top: var(--space-4);
        border-top: 1px solid var(--border-primary);
      }

      .preview-label {
        display: block;
        font-size: var(--text-xs);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--text-tertiary);
        margin-bottom: var(--space-2);
      }

      .preview-content {
        font-size: var(--text-sm);
        color: var(--text-secondary);
        line-height: var(--leading-normal);
      }

      /* Activity Card Specific */
      .activity-card {
        background: var(--bg-secondary);
      }

      /* Skill Card */
      .skill-card {
        text-align: center;
        padding: var(--space-8);
      }

      .skill-card .card-icon {
        font-size: var(--text-4xl);
        margin-bottom: var(--space-4);
      }

      /* Explore Card */
      .explore-card {
        cursor: pointer;
      }

      .explore-card .card-icon {
        font-size: var(--text-4xl);
        margin-bottom: var(--space-4);
      }

      .explore-card .card-title {
        font-size: var(--text-xl);
        margin-bottom: var(--space-2);
      }
    `;
    document.head.appendChild(style);
  }

  // Animate cards on scroll
  _animateCards() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideInUp');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card').forEach(card => {
      observer.observe(card);
    });
  }
}

// Export
export default CardComponent;

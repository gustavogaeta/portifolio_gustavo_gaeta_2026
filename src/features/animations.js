/* ============================================================
   DEV ELITE — Animation System v2
   Scroll-driven reveal, staggered entrance, parallax
   ============================================================ */

class AnimationSystem {
  constructor() {
    this.observer = null;
    this.parallaxElements = [];
    this.scrollContainer = null;
    this.ticking = false;
  }

  init() {
    this._setupReveal();
    this._setupParallax();
    this._setupCardTilt();
  }

  _setupReveal() {
    if (this.observer) this.observer.disconnect();

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          this.observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -60px 0px'
    });

    // Auto-tag elements for reveal
    const selectors = [
      '.hero-section',
      '.skills-section',
      '.explore-section',
      '.section-title',
      '.skill-card',
      '.explore-card',
      '.activity-card',
      '.portfolio-card',
      '.timeline-item',
      '.page-header',
      '.trimester-selector-container',
      '.timeline-section',
      '.portfolios-grid'
    ];

    document.querySelectorAll(selectors.join(',')).forEach((el, i) => {
      if (!el.classList.contains('reveal') && !el.classList.contains('reveal-scale')) {
        el.classList.add('reveal');
        // Smart stagger based on grid position
        const stagger = Math.min(i % 8, 7);
        el.classList.add(`stagger-${stagger + 1}`);
      }
      this.observer.observe(el);
    });

    // Also observe explicit .reveal elements
    document.querySelectorAll('.reveal, .reveal-scale').forEach(el => {
      this.observer.observe(el);
    });
  }

  _setupParallax() {
    this.scrollContainer = document.querySelector('.page-content');
    if (!this.scrollContainer) return;

    this.scrollContainer.addEventListener('scroll', () => {
      if (!this.ticking) {
        requestAnimationFrame(() => {
          this._onScroll();
          this.ticking = false;
        });
        this.ticking = true;
      }
    }, { passive: true });
  }

  _onScroll() {
    const scrollTop = this.scrollContainer?.scrollTop || 0;

    // Parallax ambient orbs
    document.querySelectorAll('.ambient-orb').forEach((orb, i) => {
      const speed = 0.02 + i * 0.01;
      orb.style.transform = `translateY(${scrollTop * speed}px)`;
    });
  }

  _setupCardTilt() {
    // Subtle 3D tilt on cards
    document.addEventListener('mousemove', (e) => {
      const cards = document.querySelectorAll('.skill-card, .portfolio-card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distX = e.clientX - centerX;
        const distY = e.clientY - centerY;
        const dist = Math.sqrt(distX * distX + distY * distY);

        if (dist < 300) {
          const rotateX = (distY / 300) * -3;
          const rotateY = (distX / 300) * 3;
          card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
        } else {
          card.style.transform = '';
        }
      });
    }, { passive: true });

    // Reset on mouse leave
    document.addEventListener('mouseleave', () => {
      document.querySelectorAll('.skill-card, .portfolio-card').forEach(card => {
        card.style.transform = '';
      });
    });
  }

  destroy() {
    if (this.observer) this.observer.disconnect();
  }
}

export default AnimationSystem;

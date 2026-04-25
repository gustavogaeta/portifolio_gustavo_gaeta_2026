/* ============================================================
   DEV ELITE - Animation System
   Apple-level animations with scroll reveal and spring physics
   ============================================================ */

class AnimationSystem {
  constructor() {
    this.observers = [];
    this.animatedElements = new Set();
  }

  // Initialize animation system
  init() {
    this._setupScrollReveal();
    this._setupParallax();
    this._setupSpringAnimations();
  }

  // Setup scroll reveal animations
  _setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this._revealElement(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe elements with animation classes
    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
      this.observers.push(observer);
    });
  }

  // Reveal element with animation
  _revealElement(element) {
    if (this.animatedElements.has(element)) return;

    const animation = element.dataset.animate || 'fadeInUp';
    const delay = element.dataset.delay || 0;

    setTimeout(() => {
      element.classList.add('animate-' + animation);
      this.animatedElements.add(element);
    }, parseInt(delay));
  }

  // Setup parallax effects
  _setupParallax() {
    window.addEventListener('scroll', () => {
      this._applyParallax();
    }, { passive: true });
  }

  // Apply parallax to elements
  _applyParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    const scrollY = window.pageYOffset;

    parallaxElements.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.5;
      const yPos = -(scrollY * speed);
      el.style.transform = `translateY(${yPos}px)`;
    });
  }

  // Setup spring animations
  _setupSpringAnimations() {
    // Add spring animation styles
    this._addSpringStyles();
  }

  // Add spring animation styles
  _addSpringStyles() {
    if (document.querySelector('#animation-styles')) return;

    const style = document.createElement('style');
    style.id = 'animation-styles';
    style.textContent = `
      /* ===== ANIMATIONS ===== */
      
      /* Fade In Up */
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Fade In Down */
      @keyframes fadeInDown {
        from {
          opacity: 0;
          transform: translateY(-30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Fade In Left */
      @keyframes fadeInLeft {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      /* Fade In Right */
      @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      /* Scale In */
      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.9);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      /* Slide In */
      @keyframes slideIn {
        from {
          transform: translateX(-100%);
        }
        to {
          transform: translateX(0);
        }
      }

      /* Spring Bounce */
      @keyframes springBounce {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
        100% {
          transform: scale(1);
        }
      }

      /* Animation Classes */
      .animate-fadeInUp {
        animation: fadeInUp 0.6s var(--ease-spring) forwards;
      }

      .animate-fadeInDown {
        animation: fadeInDown 0.6s var(--ease-spring) forwards;
      }

      .animate-fadeInLeft {
        animation: fadeInLeft 0.6s var(--ease-spring) forwards;
      }

      .animate-fadeInRight {
        animation: fadeInRight 0.6s var(--ease-spring) forwards;
      }

      .animate-scaleIn {
        animation: scaleIn 0.4s var(--ease-spring) forwards;
      }

      .animate-slideIn {
        animation: slideIn 0.5s var(--ease-spring) forwards;
      }

      .animate-springBounce {
        animation: springBounce 0.6s var(--ease-spring);
      }

      /* Stagger Animation */
      .stagger-children > * {
        opacity: 0;
      }

      .stagger-children.animate > * {
        animation: fadeInUp 0.5s var(--ease-spring) forwards;
      }

      .stagger-children.animate > *:nth-child(1) { animation-delay: 0ms; }
      .stagger-children.animate > *:nth-child(2) { animation-delay: 100ms; }
      .stagger-children.animate > *:nth-child(3) { animation-delay: 200ms; }
      .stagger-children.animate > *:nth-child(4) { animation-delay: 300ms; }
      .stagger-children.animate > *:nth-child(5) { animation-delay: 400ms; }
      .stagger-children.animate > *:nth-child(6) { animation-delay: 500ms; }
    `;
    document.head.appendChild(style);
  }

  // Animate element with specific animation
  animate(element, animation, delay = 0) {
    element.classList.add('animate-' + animation);
    if (delay > 0) {
      element.style.animationDelay = delay + 'ms';
    }
  }

  // Stagger animate children
  staggerAnimate(container, animation = 'fadeInUp', delay = 100) {
    const children = container.children;
    Array.from(children).forEach((child, index) => {
      child.style.opacity = '0';
      setTimeout(() => {
        child.classList.add('animate-' + animation);
      }, index * delay);
    });
  }

  // Destroy animation system
  destroy() {
    this.observers.forEach(observer => observer.disconnect());
    this.animatedElements.clear();
  }
}

// Export
export default AnimationSystem;

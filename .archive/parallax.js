/* ============================================================
   DEV ELITE - Parallax System
   Advanced parallax effects with cursor tracking
   ============================================================ */

class ParallaxSystem {
  constructor() {
    this.elements = [];
    this.cursorX = 0;
    this.cursorY = 0;
    this.scrollY = 0;
  }

  // Initialize parallax system
  init() {
    this._findElements();
    this._setupEventListeners();
    this._animate();
  }

  // Find parallax elements
  _findElements() {
    this.elements = document.querySelectorAll('[data-parallax]');
  }

  // Setup event listeners
  _setupEventListeners() {
    document.addEventListener('mousemove', (e) => {
      this.cursorX = e.clientX;
      this.cursorY = e.clientY;
    });

    window.addEventListener('scroll', () => {
      this.scrollY = window.pageYOffset;
    }, { passive: true });
  }

  // Animate parallax effects
  _animate() {
    this.elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = (this.cursorX - centerX) / window.innerWidth;
      const dy = (this.cursorY - centerY) / window.innerHeight;

      const speed = parseFloat(element.dataset.parallax) || 0.5;
      const scrollSpeed = parseFloat(element.dataset.parallaxScroll) || 0;

      const moveX = dx * 20 * speed;
      const moveY = dy * 20 * speed + (this.scrollY * scrollSpeed * 0.1);

      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      element.style.transition = 'transform 0.1s ease-out';
    });

    requestAnimationFrame(() => this._animate());
  }

  // Refresh parallax elements (call after DOM changes)
  refresh() {
    this._findElements();
  }

  // Destroy parallax system
  destroy() {
    this.elements.forEach(element => {
      element.style.transform = '';
      element.style.transition = '';
    });
    this.elements = [];
  }
}

// Export
export default ParallaxSystem;

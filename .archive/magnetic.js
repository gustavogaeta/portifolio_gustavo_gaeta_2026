/* ============================================================
   DEV ELITE - Magnetic Effect
   Advanced magnetic cursor effect for interactive elements
   ============================================================ */

class MagneticEffect {
  constructor() {
    this.elements = [];
    this.cursorX = 0;
    this.cursorY = 0;
    this.targetX = 0;
    this.targetY = 0;
  }

  // Initialize magnetic effect
  init() {
    this._findElements();
    this._setupEventListeners();
    this._animate();
  }

  // Find magnetic elements
  _findElements() {
    this.elements = document.querySelectorAll('.magnetic, button, .card, .activity-card, .explore-card, .skill-card, .nav-item');
  }

  // Setup event listeners
  _setupEventListeners() {
    document.addEventListener('mousemove', (e) => {
      this.cursorX = e.clientX;
      this.cursorY = e.clientY;
    });
  }

  // Animate magnetic effect
  _animate() {
    this.elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = this.cursorX - centerX;
      const dy = this.cursorY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Check if cursor is within magnetic range
      const magneticRange = Math.max(rect.width, rect.height) / 2 + 50;

      if (distance < magneticRange) {
        const strength = (magneticRange - distance) / magneticRange;
        const moveX = dx * strength * 0.2;
        const moveY = dy * strength * 0.2;

        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        element.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      } else {
        element.style.transform = '';
        element.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      }
    });

    requestAnimationFrame(() => this._animate());
  }

  // Refresh magnetic elements (call after DOM changes)
  refresh() {
    this._findElements();
  }

  // Destroy magnetic effect
  destroy() {
    this.elements.forEach(element => {
      element.style.transform = '';
      element.style.transition = '';
    });
    this.elements = [];
  }
}

// Export
export default MagneticEffect;

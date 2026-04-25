/* ============================================================
   DEV ELITE - Custom Cursor Component
   Magnetic cursor with advanced hover effects and parallax
   ============================================================ */

class CursorComponent {
  constructor() {
    this.cursor = null;
    this.cursorDot = null;
    this.cursorRing = null;
    this.isHovering = false;
    this.magneticElements = [];
    this.cursorX = 0;
    this.cursorY = 0;
    this.targetX = 0;
    this.targetY = 0;
    this.currentElement = null;
    this.parallaxElements = [];
  }

  // Initialize cursor
  init() {
    this._createCursor();
    this._setupEventListeners();
    this._findParallaxElements();
    this._animate();
  }

  // Create cursor elements
  _createCursor() {
    // Main cursor dot
    this.cursorDot = document.createElement('div');
    this.cursorDot.className = 'cursor-dot';
    this.cursorDot.innerHTML = '<div class="cursor-dot-inner"></div>';
    document.body.appendChild(this.cursorDot);

    // Magnetic ring
    this.cursorRing = document.createElement('div');
    this.cursorRing.className = 'cursor-ring';
    document.body.appendChild(this.cursorRing);

    // Add CSS
    this._addStyles();
  }

  // Add cursor styles
  _addStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .cursor-dot {
        position: fixed;
        top: 0;
        left: 0;
        width: 8px;
        height: 8px;
        background: var(--accent-primary);
        border-radius: 50%;
        pointer-events: none;
        z-index: 99999;
        transform: translate(-50%, -50%);
        transition: transform 0.1s ease-out;
        mix-blend-mode: difference;
      }

      .cursor-dot-inner {
        width: 100%;
        height: 100%;
        background: var(--accent-primary);
        border-radius: 50%;
        box-shadow: 0 0 10px var(--accent-primary), 0 0 20px var(--accent-primary);
      }

      .cursor-ring {
        position: fixed;
        top: 0;
        left: 0;
        width: 40px;
        height: 40px;
        border: 2px solid var(--accent-primary);
        border-radius: 50%;
        pointer-events: none;
        z-index: 99998;
        transform: translate(-50%, -50%);
        transition: transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94), width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), height 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), border-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        opacity: 0.5;
      }

      .cursor-ring.hover {
        width: 60px;
        height: 60px;
        border-color: var(--accent-secondary);
        opacity: 0.8;
        border-width: 3px;
      }

      .cursor-ring.click {
        width: 30px;
        height: 30px;
        opacity: 1;
        transform: translate(-50%, -50%) scale(0.8);
      }

      @media (max-width: 768px) {
        .cursor-dot,
        .cursor-ring {
          display: none;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Setup event listeners
  _setupEventListeners() {
    // Track cursor position
    document.addEventListener('mousemove', (e) => {
      this.cursorX = e.clientX;
      this.cursorY = e.clientY;
      this._applyParallax();
    });

    // Track hover states
    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('a, button, .magnetic, .card, .activity-card, .explore-card, .skill-card, .nav-item');
      if (target) {
        this._onHoverEnter(target);
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest('a, button, .magnetic, .card, .activity-card, .explore-card, .skill-card, .nav-item');
      if (target) {
        this._onHoverLeave(target);
      }
    });

    // Track click
    document.addEventListener('mousedown', () => {
      if (this.cursorRing) {
        this.cursorRing.classList.add('click');
      }
    });

    document.addEventListener('mouseup', () => {
      if (this.cursorRing) {
        this.cursorRing.classList.remove('click');
      }
    });

    // Find magnetic elements
    this._findMagneticElements();
  }

  // Find parallax elements
  _findParallaxElements() {
    this.parallaxElements = document.querySelectorAll('.parallax, .skill-card, .explore-card, .activity-card, .portfolio-card');
  }

  // Apply parallax effect
  _applyParallax() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    this.parallaxElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const elementCenterX = rect.left + rect.width / 2;
      const elementCenterY = rect.top + rect.height / 2;
      
      const deltaX = (this.cursorX - elementCenterX) / centerX;
      const deltaY = (this.cursorY - elementCenterY) / centerY;
      
      const moveX = deltaX * 10;
      const moveY = deltaY * 10;
      
      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  }

  // Find magnetic elements
  _findMagneticElements() {
    this.magneticElements = document.querySelectorAll('.magnetic, button, .card, .activity-card, .explore-card, .skill-card, .nav-item');
  }

  // On hover enter
  _onHoverEnter(element) {
    this.isHovering = true;
    this.currentElement = element;
    if (this.cursorRing) {
      this.cursorRing.classList.add('hover');
    }
  }

  // On hover leave
  _onHoverLeave(element) {
    this.isHovering = false;
    this.currentElement = null;
    if (this.cursorRing) {
      this.cursorRing.classList.remove('hover');
    }
  }

  // Animate cursor
  _animate() {
    // Smooth follow with spring physics
    this.targetX += (this.cursorX - this.targetX) * 0.2;
    this.targetY += (this.cursorY - this.targetY) * 0.2;

    if (this.cursorDot) {
      this.cursorDot.style.left = `${this.cursorX}px`;
      this.cursorDot.style.top = `${this.cursorY}px`;
    }

    if (this.cursorRing) {
      // Add slight delay for ring with spring physics
      const ringX = this.targetX + (this.cursorX - this.targetX) * 0.4;
      const ringY = this.targetY + (this.cursorY - this.targetY) * 0.4;
      
      this.cursorRing.style.left = `${ringX}px`;
      this.cursorRing.style.top = `${ringY}px`;
    }

    // Magnetic effect
    if (this.isHovering && this.currentElement) {
      this._applyMagneticEffect();
    }

    requestAnimationFrame(() => this._animate());
  }

  // Apply magnetic effect
  _applyMagneticEffect() {
    if (!this.currentElement) return;
    
    const rect = this.currentElement.getBoundingClientRect();
    const elementCenterX = rect.left + rect.width / 2;
    const elementCenterY = rect.top + rect.height / 2;
    
    const dx = this.cursorX - elementCenterX;
    const dy = this.cursorY - elementCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    const maxDistance = 150;
    
    if (distance < maxDistance) {
      const strength = (maxDistance - distance) / maxDistance;
      const magneticPull = 0.4;
      
      const offsetX = dx * strength * magneticPull;
      const offsetY = dy * strength * magneticPull;
      
      if (this.cursorRing) {
        this.cursorRing.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;
      }
      
      // Apply magnetic effect to element
      this.currentElement.style.transform = `translate(${offsetX * 0.3}px, ${offsetY * 0.3}px)`;
    }
  }

  // Destroy cursor
  destroy() {
    if (this.cursorDot) {
      this.cursorDot.remove();
    }
    if (this.cursorRing) {
      this.cursorRing.remove();
    }
  }
}

// Export
export default CursorComponent;

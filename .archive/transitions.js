/* ============================================================
   DEV ELITE - Transition System
   Cinematic page transitions with fade, blur, and scale
   ============================================================ */

class TransitionSystem {
  constructor() {
    this.transitioning = false;
  }

  // Initialize transition system
  init() {
    this._addStyles();
  }

  // Add transition styles
  _addStyles() {
    if (document.querySelector('#transition-styles')) return;

    const style = document.createElement('style');
    style.id = 'transition-styles';
    style.textContent = `
      /* ===== PAGE TRANSITIONS ===== */
      
      .page-transition-enter {
        opacity: 0;
        transform: scale(0.98);
        filter: blur(4px);
      }

      .page-transition-enter-active {
        opacity: 1;
        transform: scale(1);
        filter: blur(0);
        transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                    transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                    filter 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }

      .page-transition-exit {
        opacity: 1;
        transform: scale(1);
        filter: blur(0);
      }

      .page-transition-exit-active {
        opacity: 0;
        transform: scale(0.98);
        filter: blur(4px);
        transition: opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                    transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                    filter 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }

      /* ===== SIDEBAR TRANSITIONS ===== */
      
      .sidebar-transition-enter {
        transform: translateX(-100%);
      }

      .sidebar-transition-enter-active {
        transform: translateX(0);
        transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }

      .sidebar-transition-exit {
        transform: translateX(0);
      }

      .sidebar-transition-exit-active {
        transform: translateX(-100%);
        transition: transform 0.3s cubic-bezier(0.4, 0, 1, 1);
      }

      /* ===== OVERLAY TRANSITIONS ===== */
      
      .overlay-transition-enter {
        opacity: 0;
      }

      .overlay-transition-enter-active {
        opacity: 1;
        transition: opacity 0.3s ease-out;
      }

      .overlay-transition-exit {
        opacity: 1;
      }

      .overlay-transition-exit-active {
        opacity: 0;
        transition: opacity 0.3s ease-in;
      }

      /* ===== CARD HOVER TRANSITIONS ===== */
      
      .card-hover-transition {
        transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
                    box-shadow 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
                    border-color 0.3s ease-out;
      }

      /* ===== TEXT TRANSITIONS ===== */
      
      .text-reveal {
        opacity: 0;
        transform: translateY(10px);
      }

      .text-reveal-active {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                    transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }

      /* ===== GLITCH TRANSITION ===== */
      
      @keyframes glitch {
        0% {
          transform: translate(0);
        }
        20% {
          transform: translate(-2px, 2px);
        }
        40% {
          transform: translate(-2px, -2px);
        }
        60% {
          transform: translate(2px, 2px);
        }
        80% {
          transform: translate(2px, -2px);
        }
        100% {
          transform: translate(0);
        }
      }

      .glitch-transition {
        animation: glitch 0.3s ease-in-out;
      }
    `;
    document.head.appendChild(style);
  }

  // Transition page out
  async pageOut(element) {
    if (this.transitioning) return;
    this.transitioning = true;

    element.classList.add('page-transition-exit');
    element.classList.add('page-transition-exit-active');

    await this._delay(300);

    return true;
  }

  // Transition page in
  async pageIn(element) {
    element.classList.remove('page-transition-exit');
    element.classList.remove('page-transition-exit-active');
    
    element.classList.add('page-transition-enter');
    
    // Trigger reflow
    element.offsetHeight;
    
    element.classList.add('page-transition-enter-active');

    await this._delay(400);

    element.classList.remove('page-transition-enter');
    element.classList.remove('page-transition-enter-active');

    this.transitioning = false;
  }

  // Transition sidebar in
  sidebarIn(element) {
    element.classList.remove('sidebar-transition-exit');
    element.classList.remove('sidebar-transition-exit-active');
    
    element.classList.add('sidebar-transition-enter');
    
    // Trigger reflow
    element.offsetHeight;
    
    element.classList.add('sidebar-transition-enter-active');

    setTimeout(() => {
      element.classList.remove('sidebar-transition-enter');
      element.classList.remove('sidebar-transition-enter-active');
    }, 400);
  }

  // Transition sidebar out
  sidebarOut(element) {
    element.classList.remove('sidebar-transition-enter');
    element.classList.remove('sidebar-transition-enter-active');
    
    element.classList.add('sidebar-transition-exit');
    element.classList.add('sidebar-transition-exit-active');

    setTimeout(() => {
      element.classList.remove('sidebar-transition-exit');
      element.classList.remove('sidebar-transition-exit-active');
    }, 300);
  }

  // Helper: delay function
  _delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Export
export default TransitionSystem;

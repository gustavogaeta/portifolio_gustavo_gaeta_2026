/* ============================================================
   DEV ELITE — Transition System
   Lightweight page transition support (CSS-driven)
   ============================================================ */

class TransitionSystem {
  constructor() {
    // Pure CSS transitions — no JS injection needed
  }

  init() {
    // Set up initial page transition style on #app
    const root = document.getElementById('app');
    if (root) {
      root.style.transition = 'opacity 0.3s cubic-bezier(0.16,1,0.3,1), transform 0.3s cubic-bezier(0.16,1,0.3,1)';
    }
  }
}

export default TransitionSystem;

/* ============================================================
   Portfolio — Cursor v3
   Custom interactive dot/ring with magnetic effects
   ============================================================ */

class CursorComponent {
  constructor() {
    this.dot = null;
    this.ring = null;
    this.glow = null;
    this.mx = -100;
    this.my = -100;
    this.rx = -100;
    this.ry = -100;
    this.gx = -100;
    this.gy = -100;
    this.hovering = false;
    this.clicking = false;
    this.vx = 0;
    this.vy = 0;
    this.px = 0;
    this.py = 0;
    this.raf = null;
    this.magneticTarget = null;
    this.magneticPull = 0.35;
  }

  init() {
    if (matchMedia('(pointer:coarse)').matches || innerWidth < 768) return;

    this._create();
    this._bind();
    this._loop();
  }

  _create() {
    if (document.getElementById('cursor-v3')) return;

    const s = document.createElement('style');
    s.id = 'cursor-v3';
    s.textContent = `
      .c-dot{position:fixed;top:0;left:0;width:5px;height:5px;background:#a78bfa;border-radius:50%;pointer-events:none;z-index:100000;transform:translate(-50%,-50%);mix-blend-mode:difference;will-change:left,top;transition:width .3s var(--ease-out),height .3s var(--ease-out)}
      .c-dot.h{width:12px;height:12px;background:#8b5cf6}
      .c-dot.k{width:4px;height:4px}
      .c-ring{position:fixed;top:0;left:0;width:36px;height:36px;border:1px solid rgba(167,139,250,.2);border-radius:50%;pointer-events:none;z-index:99999;transform:translate(-50%,-50%);will-change:left,top,width,height;transition:width .4s var(--ease-out),height .4s var(--ease-out),border-color .3s,opacity .3s,background .3s;opacity:.4}
      .c-ring.h{width:64px;height:64px;border-color:rgba(139,92,246,.4);opacity:.7;background:rgba(139,92,246,0.02)}
      .c-ring.k{width:28px;height:28px;opacity:.9;border-color:rgba(139,92,246,.6)}
      .c-glow{position:fixed;top:0;left:0;width:320px;height:320px;border-radius:50%;pointer-events:none;z-index:-1;transform:translate(-50%,-50%);background:radial-gradient(circle,rgba(139,92,246,.04) 0%,transparent 70%);will-change:left,top}
      @media(max-width:768px),(pointer:coarse){.c-dot,.c-ring,.c-glow{display:none!important}}
    `;
    document.head.appendChild(s);

    this.dot = document.createElement('div');
    this.dot.className = 'c-dot';
    this.ring = document.createElement('div');
    this.ring.className = 'c-ring';
    this.glow = document.createElement('div');
    this.glow.className = 'c-glow';

    document.body.append(this.glow, this.ring, this.dot);
  }

  _bind() {
    document.addEventListener('mousemove', e => {
      this.mx = e.clientX;
      this.my = e.clientY;
    }, { passive: true });

    const interactive = 'a,button,.bento-tile,.p-card,.skill-card,.contact-tile,.fnav__dot,.hero__char';

    document.addEventListener('mouseover', e => {
      const target = e.target.closest(interactive);
      if (target) {
        this.hovering = true;
        this.dot?.classList.add('h');
        this.ring?.classList.add('h');
        
        // Magnetic check
        if (target.classList.contains('fnav__dot') || target.classList.contains('btn-primary')) {
          this.magneticTarget = target;
        }
      }
    });

    document.addEventListener('mouseout', e => {
      const target = e.target.closest(interactive);
      if (target) {
        this.hovering = false;
        this.dot?.classList.remove('h');
        this.ring?.classList.remove('h');
        this.magneticTarget = null;
      }
    });

    document.addEventListener('mousedown', () => {
      this.clicking = true;
      this.dot?.classList.add('k');
      this.ring?.classList.add('k');
    });

    document.addEventListener('mouseup', () => {
      this.clicking = false;
      this.dot?.classList.remove('k');
      this.ring?.classList.remove('k');
    });
  }

  _loop() {
    this.vx = this.mx - this.px;
    this.vy = this.my - this.py;
    this.px = this.mx;
    this.py = this.my;

    let targetX = this.mx;
    let targetY = this.my;

    // Apply Magnetic Pull
    if (this.magneticTarget) {
      const rect = this.magneticTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      targetX += (centerX - this.mx) * this.magneticPull;
      targetY += (centerY - this.my) * this.magneticPull;

      // Also move the target slightly
      this.magneticTarget.style.transform = `translate(${(this.mx - centerX) * 0.2}px, ${(this.my - centerY) * 0.2}px) scale(1.1)`;
    }

    if (this.dot) {
      this.dot.style.left = targetX + 'px';
      this.dot.style.top = targetY + 'px';
    }

    this.rx += (targetX - this.rx) * 0.15;
    this.ry += (targetY - this.ry) * 0.15;
    
    if (this.ring) {
      this.ring.style.left = this.rx + 'px';
      this.ring.style.top = this.ry + 'px';

      if (!this.hovering && !this.clicking) {
        const spd = Math.sqrt(this.vx ** 2 + this.vy ** 2);
        if (spd > 2) {
          const a = Math.atan2(this.vy, this.vx) * 57.3;
          const s = Math.min(spd * 0.2, 5);
          this.ring.style.transform = `translate(-50%,-50%) rotate(${a}deg) scaleX(${1+s*0.03}) scaleY(${1-s*0.015})`;
        } else {
          this.ring.style.transform = 'translate(-50%,-50%)';
        }
      } else {
        this.ring.style.transform = 'translate(-50%,-50%) scale(1.1)';
      }
    }

    this.gx += (this.mx - this.gx) * 0.05;
    this.gy += (this.my - this.gy) * 0.05;
    if (this.glow) {
      this.glow.style.left = this.gx + 'px';
      this.glow.style.top = this.gy + 'px';
    }

    this.raf = requestAnimationFrame(() => this._loop());
  }

  destroy() {
    if (this.raf) cancelAnimationFrame(this.raf);
    this.dot?.remove();
    this.ring?.remove();
    this.glow?.remove();
  }
}

export default CursorComponent;

/* ============================================================
   Organic 3D Wave Background
   Pure sine/cosine wave animation with additive blending
   Premium AI/data flow aesthetic
   ============================================================ */

class WaveBackground {
  constructor(canvas, options = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    
    // Configuration with defaults
    this.config = {
      // Colors (neon blue, cyan, purple gradient)
      colors: options.colors || [
        { r: 0, g: 150, b: 255, a: 0.6 },   // Blue
        { r: 0, g: 200, b: 255, a: 0.5 },  // Cyan
        { r: 100, g: 100, b: 255, a: 0.4 }, // Purple-blue
        { r: 150, g: 50, b: 255, a: 0.3 },  // Purple
        { r: 0, g: 100, b: 200, a: 0.25 }   // Deep blue
      ],
      
      // Wave parameters
      waveCount: options.waveCount || 8,
      pointsPerWave: options.pointsPerWave || 200,
      amplitude: options.amplitude || 80,
      frequency: options.frequency || 0.008,
      speed: options.speed || 0.001,
      
      // Glow effect
      glowEnabled: options.glowEnabled !== false,
      glowIntensity: options.glowIntensity || 25,
      
      // Mouse interaction
      mouseInteraction: options.mouseInteraction !== false,
      mouseInfluence: options.mouseInfluence || 50,
      
      // Performance
      fps: options.fps || 60
    };
    
    // State
    this.width = 0;
    this.height = 0;
    this.time = 0;
    this.waves = [];
    this.mouse = { x: 0, y: 0, active: false };
    this.animationId = null;
    this.lastFrameTime = 0;
    
    // Initialize
    this.init();
  }
  
  init() {
    this.resize();
    this.createWaves();
    this.setupEventListeners();
    this.start();
  }
  
  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }
  
  createWaves() {
    this.waves = [];
    
    for (let i = 0; i < this.config.waveCount; i++) {
      const wave = {
        // Each wave has different parameters for parallax depth
        amplitude: this.config.amplitude * (0.4 + (i / this.config.waveCount) * 0.6),
        frequency: this.config.frequency * (0.7 + (i / this.config.waveCount) * 0.3),
        speed: this.config.speed * (0.5 + (i / this.config.waveCount) * 0.5),
        phase: Math.random() * Math.PI * 2,
        yOffset: (this.height / 2) + (Math.random() - 0.5) * this.height * 0.4,
        color: this.config.colors[i % this.config.colors.length],
        // Parallax depth factor (simulated Z-axis)
        depth: 0.3 + (i / this.config.waveCount) * 0.7,
        // Dynamic amplitude variation
        amplitudeVariation: Math.random() * 0.3,
        phaseVariation: Math.random() * Math.PI
      };
      
      this.waves.push(wave);
    }
  }
  
  setupEventListeners() {
    window.addEventListener('resize', () => this.resize());
    
    if (this.config.mouseInteraction) {
      window.addEventListener('mousemove', (e) => {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
        this.mouse.active = true;
      });
      
      window.addEventListener('mouseleave', () => {
        this.mouse.active = false;
      });
    }
  }
  
  // Pure sine wave calculation with dynamic amplitude
  getWaveY(wave, x, time) {
    const baseY = wave.yOffset;
    
    // Primary sine wave
    const sine1 = Math.sin(x * wave.frequency + time * wave.speed + wave.phase);
    
    // Secondary cosine wave for complexity
    const cosine1 = Math.cos(x * wave.frequency * 0.5 + time * wave.speed * 0.7 + wave.phase);
    
    // Tertiary sine wave for organic variation
    const sine2 = Math.sin(x * wave.frequency * 0.25 + time * wave.speed * 0.3 + wave.phaseVariation);
    
    // Dynamic amplitude based on time (breathing effect)
    const dynamicAmplitude = wave.amplitude * (1 + Math.sin(time * 0.0005) * wave.amplitudeVariation);
    
    // Combine all waves
    let y = baseY + (sine1 * 0.6 + cosine1 * 0.3 + sine2 * 0.1) * dynamicAmplitude;
    
    // Add mouse interaction (subtle distortion)
    if (this.config.mouseInteraction && this.mouse.active) {
      const dx = x - this.mouse.x;
      const dy = y - this.mouse.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const influence = Math.max(0, 1 - distance / 400);
      y += Math.sin(distance * 0.03 - time * 0.002) * this.config.mouseInfluence * influence * wave.depth;
    }
    
    return y;
  }
  
  // Create edge fade gradient
  createEdgeFade() {
    const gradient = this.ctx.createRadialGradient(
      this.width / 2, this.height / 2, 0,
      this.width / 2, this.height / 2, Math.max(this.width, this.height) * 0.7
    );
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
    gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
    return gradient;
  }
  
  draw() {
    // Clear canvas with pure black
    this.ctx.fillStyle = '#000000';
    this.ctx.fillRect(0, 0, this.width, this.height);
    
    // Draw each wave layer as filled topographic mountains (back to front)
    this.waves.forEach((wave, waveIndex) => {
      const parallaxTime = this.time * wave.depth;
      
      // Create gradient for mountain fill
      const gradient = this.ctx.createLinearGradient(0, 0, 0, this.height);
      const alpha = wave.color.a * wave.depth;
      gradient.addColorStop(0, `rgba(${wave.color.r}, ${wave.color.g}, ${wave.color.b}, ${alpha * 0.8})`);
      gradient.addColorStop(0.5, `rgba(${wave.color.r}, ${wave.color.g}, ${wave.color.b}, ${alpha * 0.4})`);
      gradient.addColorStop(1, `rgba(${wave.color.r}, ${wave.color.g}, ${wave.color.b}, 0)`);
      
      this.ctx.fillStyle = gradient;
      this.ctx.beginPath();
      
      const step = this.width / this.config.pointsPerWave;
      
      // Start from bottom-left
      this.ctx.moveTo(0, this.height);
      
      // Draw wave curve across screen
      for (let x = 0; x <= this.width; x += step) {
        const y = this.getWaveY(wave, x, parallaxTime);
        this.ctx.lineTo(x, y);
      }
      
      // Complete the shape to bottom-right
      this.ctx.lineTo(this.width, this.height);
      this.ctx.closePath();
      
      this.ctx.fill();
      
      // Add subtle outline on top of mountain
      this.ctx.strokeStyle = `rgba(${wave.color.r}, ${wave.color.g}, ${wave.color.b}, ${alpha * 0.5})`;
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      
      for (let x = 0; x <= this.width; x += step) {
        const y = this.getWaveY(wave, x, parallaxTime);
        if (x === 0) {
          this.ctx.moveTo(x, y);
        } else {
          const prevX = x - step;
          const prevY = this.getWaveY(wave, prevX, parallaxTime);
          const cpX = (prevX + x) / 2;
          const cpY = (prevY + y) / 2;
          this.ctx.quadraticCurveTo(prevX, prevY, cpX, cpY);
        }
      }
      
      const lastY = this.getWaveY(wave, this.width, parallaxTime);
      this.ctx.lineTo(this.width, lastY);
      this.ctx.stroke();
    });
    
    // Apply edge fade
    this.ctx.fillStyle = this.createEdgeFade();
    this.ctx.fillRect(0, 0, this.width, this.height);
  }
  
  animate(currentTime) {
    // FPS control
    const deltaTime = currentTime - this.lastFrameTime;
    const targetFrameTime = 1000 / this.config.fps;
    
    if (deltaTime >= targetFrameTime) {
      this.time = currentTime;
      this.lastFrameTime = currentTime;
      this.draw();
    }
    
    this.animationId = requestAnimationFrame((t) => this.animate(t));
  }
  
  start() {
    if (!this.animationId) {
      this.lastFrameTime = performance.now();
      this.animate(this.lastFrameTime);
    }
  }
  
  stop() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }
  
  // Public API for customization
  updateConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    this.createWaves();
  }
  
  setColors(colors) {
    this.config.colors = colors;
    this.waves.forEach((wave, i) => {
      wave.color = colors[i % colors.length];
    });
  }
  
  setSpeed(speed) {
    this.config.speed = speed;
    this.waves.forEach((wave, i) => {
      wave.speed = speed * (0.5 + (i / this.config.waveCount) * 0.5);
    });
  }
  
  setAmplitude(amplitude) {
    this.config.amplitude = amplitude;
    this.waves.forEach((wave, i) => {
      wave.amplitude = amplitude * (0.4 + (i / this.config.waveCount) * 0.6);
    });
  }
}

// Export for module usage
export default WaveBackground;

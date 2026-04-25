/* ============================================================
   DEV ELITE — State Management
   Reactive state with subscriptions and persistence
   ============================================================ */

import { eventBus } from './eventBus.js';

class StateManager {
  constructor(initialState = {}) {
    this._state = { ...initialState };
    this._listeners = {};
  }

  get(key) {
    return key ? this._state[key] : { ...this._state };
  }

  set(key, value) {
    const oldValue = this._state[key];
    if (oldValue === value) return; // no-op for same value
    this._state[key] = value;
    this._notify(key, value, oldValue);
    eventBus.emit(`state:${key}`, { value, oldValue });
    this._persist();
  }

  subscribe(key, callback) {
    if (!this._listeners[key]) this._listeners[key] = [];
    this._listeners[key].push(callback);
    return () => {
      this._listeners[key] = this._listeners[key].filter(cb => cb !== callback);
    };
  }

  _notify(key, newValue, oldValue) {
    if (this._listeners[key]) {
      this._listeners[key].forEach(cb => cb(newValue, oldValue));
    }
  }

  _persist() {
    try {
      localStorage.setItem('dev-elite-state', JSON.stringify(this._state));
    } catch (e) { /* silent */ }
  }

  restore() {
    try {
      const saved = localStorage.getItem('dev-elite-state');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Only restore safe keys
        if (parsed.theme) this._state.theme = parsed.theme;
        if (parsed.currentTrimester) this._state.currentTrimester = parsed.currentTrimester;
      }
    } catch (e) { /* silent */ }
  }
}

const appState = new StateManager({
  theme: 'dark',
  sidebarOpen: false,
  currentPage: 'dashboard',
  currentTrimester: '1'
});

appState.restore();

export default appState;

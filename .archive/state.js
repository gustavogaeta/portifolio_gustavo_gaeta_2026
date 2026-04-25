/* ============================================================
   DEV ELITE - State Management System
   Event-driven reactive state management with ES Modules
   ============================================================ */

import { eventBus } from './eventBus.js';

class StateManager {
  constructor(initialState = {}) {
    this.state = { ...initialState };
    this.listeners = {};
    this.history = [];
    this.maxHistory = 50;
  }

  // Get state value
  get(key) {
    return key ? this.state[key] : this.state;
  }

  // Set state value with notification
  set(key, value) {
    const oldValue = this.state[key];
    
    // Save to history for undo
    this.history.push({ key, oldValue, newValue: value, timestamp: Date.now() });
    if (this.history.length > this.maxHistory) {
      this.history.shift();
    }
    
    this.state[key] = value;
    
    // Notify listeners
    this._notify(key, value, oldValue);
    
    // Emit event
    eventBus.emit(`state:${key}`, { value, oldValue });
    
    // Persist to localStorage
    this._persist();
  }

  // Subscribe to state changes
  subscribe(key, callback) {
    if (!this.listeners[key]) {
      this.listeners[key] = [];
    }
    this.listeners[key].push(callback);
    
    // Return unsubscribe function
    return () => {
      this.listeners[key] = this.listeners[key].filter(cb => cb !== callback);
    };
  }

  // Notify listeners of state change
  _notify(key, newValue, oldValue) {
    if (this.listeners[key]) {
      this.listeners[key].forEach(callback => callback(newValue, oldValue));
    }
  }

  // Persist state to localStorage
  _persist() {
    try {
      localStorage.setItem('dev-elite-state', JSON.stringify(this.state));
    } catch (error) {
      console.warn('Failed to persist state:', error);
    }
  }

  // Restore state from localStorage
  restore() {
    try {
      const saved = localStorage.getItem('dev-elite-state');
      if (saved) {
        this.state = { ...this.state, ...JSON.parse(saved) };
      }
    } catch (error) {
      console.warn('Failed to restore state:', error);
    }
  }

  // Undo last state change
  undo() {
    const lastChange = this.history.pop();
    if (lastChange) {
      this.set(lastChange.key, lastChange.oldValue);
      return true;
    }
    return false;
  }

  // Reset state to initial
  reset(initialState) {
    this.state = { ...initialState };
    this.history = [];
    this._persist();
  }
}

// Create global state instance
const appState = new StateManager({
  theme: 'dark',
  sidebarOpen: false,
  currentPage: 'dashboard',
  currentTrimester: '1',
  activeTab: {}
});

// Restore state from localStorage
appState.restore();

// Export
export default appState;

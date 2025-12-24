/**
 * js/state.js
 * Centralized State Management (Pub/Sub Store)
 */

import { saveToStorage, loadFromStorage } from './storage.js';

const defaultState = {
    tasks: [],
    habits: [],
    focusSessions: [],
    settings: {
        theme: 'light',
        pomodoroDuration: 25,
        breakDuration: 5,
        longBreakDuration: 15
    },
    currentView: 'dashboard'
};

class Store {
    constructor() {
        // Load initial state from local storage or use default
        this.state = loadFromStorage() || defaultState;
        this.listeners = [];
        this.prevState = null;
    }

    /**
     * Get the current state
     * @returns {Object} Deep copy of state
     */
    getState() {
        return JSON.parse(JSON.stringify(this.state));
    }

    /**
     * Update the state
     * @param {Object} partialState - New state properties to merge
     */
    setState(partialState) {
        this.prevState = this.getState();
        this.state = { ...this.state, ...partialState };
        this.notify();
        saveToStorage(this.state);
    }

    /**
     * Subscribe to state changes
     * @param {Function} listener - Callback function
     * @returns {Function} Unsubscribe function
     */
    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    notify() {
        this.listeners.forEach(listener => listener(this.state, this.prevState));
    }

    // --- Specific Actions --

    addTask(task) {
        const tasks = [...this.state.tasks, task];
        this.setState({ tasks });
    }

    updateTask(updatedTask) {
        const tasks = this.state.tasks.map(t => t.id === updatedTask.id ? updatedTask : t);
        this.setState({ tasks });
    }

    deleteTask(taskId) {
        const tasks = this.state.tasks.filter(t => t.id !== taskId);
        this.setState({ tasks });
    }
}

export const store = new Store();

/**
 * js/storage.js
 * LocalStorage wrapper
 */

const STORAGE_KEY = 'smart_productivity_os_v1';

export function saveToStorage(state) {
    try {
        const serialized = JSON.stringify(state);
        localStorage.setItem(STORAGE_KEY, serialized);
    } catch (e) {
        console.error("Failed to save state to localStorage", e);
    }
}

export function loadFromStorage() {
    try {
        const serialized = localStorage.getItem(STORAGE_KEY);
        if (!serialized) return null;
        return JSON.parse(serialized);
    } catch (e) {
        console.error("Failed to load state from localStorage", e);
        return null;
    }
}

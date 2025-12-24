/**
 * js/app.js
 * Main Entry Point
 */

import { store } from './state.js';
import { $ } from './utils.js';
// Import other modules as we build them
// import './tasks.js'; 
// import './pomodoro.js';

function init() {
    console.log('Smart Productivity OS Initializing...');

    // Theme Initialization
    const { settings } = store.getState();
    document.documentElement.setAttribute('data-theme', settings.theme || 'light');

    // Navigation Logic
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const view = btn.dataset.view;

            // UI Update
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // State Update
            store.setState({ currentView: view });

            renderView(view);
        });
    });

    // Theme Toggle
    const themeBtn = $('#theme-toggle');
    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);

        const state = store.getState();
        store.setState({
            settings: { ...state.settings, theme: newTheme }
        });
    });

    // Initial Render
    renderView(store.getState().currentView);
}

function renderView(viewName) {
    const container = $('#view-container');
    const title = $('#page-title');

    title.textContent = viewName.charAt(0).toUpperCase() + viewName.slice(1);

    container.innerHTML = ''; // Clear current view

    // Simple Router (to be expanded)
    switch (viewName) {
        case 'dashboard':
            container.innerHTML = '<h3>Dashboard Overview</h3><p>Coming soon...</p>';
            break;
        case 'tasks':
            container.innerHTML = '<h3>Task Management</h3><p>Task list loading...</p>';
            break;
        case 'calendar':
            container.innerHTML = '<h3>Calendar</h3><p>Calendar view loading...</p>';
            break;
        case 'habits':
            container.innerHTML = '<h3>Habit Tracker</h3><p>Habit view loading...</p>';
            break;
        case 'focus':
            container.innerHTML = '<h3>Focus Mode</h3><p>Pomodoro timer loading...</p>';
            break;
        case 'analytics':
            container.innerHTML = '<h3>Analytics</h3><p>Charts loading...</p>';
            break;
        default:
            container.innerHTML = '<p>View not found</p>';
    }
}

// Start the app
document.addEventListener('DOMContentLoaded', init);

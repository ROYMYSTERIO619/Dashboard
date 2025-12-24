# Smart Productivity OS

A production-grade, offline-first productivity operating system built entirely with Vanilla JavaScript, HTML5, and CSS3. No frameworks, no build tools, just pure web platform power.

## 🚀 Concept
Smart Productivity OS combines the best features of task managers (Todoist), knowledge bases (Notion), and focus tools (Pomodoro) into a single, cohesive dashboard. It is designed to be lightweight, privacy-focused (100% local storage), and aesthetically premium.

## 🛠 Technology Stack
- **Core**: HTML5, CSS3, ES6+ JavaScript Modules
- **State Management**: Custom Centralized Store (Pub/Sub Pattern)
- **Persistence**: `localStorage`
- **Styling**: Vanilla CSS Variables, Grid, Flexbox (No Frameworks)
- **Icons**: Emoji & CSS Shapes (Zero asset dependency)

## 📂 Architecture
The project follows a clean, modular architecture:

```
/smart-productivity-os
├── css/                # Modular Styling
│   ├── base.css        # Variables & Reset
│   ├── layout.css      # Grid/Flex Structures
│   ├── components.css  # Reusable UI classes
│   └── themes.css      # Dark/Light mode logic
├── js/                 # Application Logic
│   ├── app.js          # Entry Point & Router
│   ├── state.js        # Single Source of Truth Store
│   ├── storage.js      # Persistence Layer
│   ├── tasks.js        # Task Management Logic
│   ├── pomodoro.js     # Focus Timer Engine
│   └── utils.js        # Helpers
├── index.html          # Single Page Application Shell
└── README.md           # Documentation
```

## ✨ Key Features

### 1. Task Management
- **CRUD Operations**: Create, Read, Update, Delete tasks.
- **Organization**: Filter by status, priority, or tags.
- **Drag & Drop**: Intuitive reordering of tasks.

### 2. Focus Engine (Pomodoro)
- **Timer**: Customizable focus/break intervals.
- **Task Linking**: Associate focus sessions with specific tasks.
- **Analytics**: Track time spent in "Deep Work".

### 3. Habit Tracking
- **Streaks**: Visual indicators of consistency.
- **Heatmap**: Github-style contribution graph for habits.

### 4. Smart Insights
- Logic-based recommendations (e.g., "You're most productive between 9 AM and 11 AM").
- Overwork detection alerts.

## 🎨 Design Decisions

### **Why Vanilla JS?**
To demonstrate that modern web standards are powerful enough to build complex, reactive applications without the overhead of 2MB bundles. This ensures:
- Instant load times (<100ms).
- Zero build steps (Edit -> Refresh).
- complete understanding of the DOM and Event Loop.

### **State Management**
Instead of prop-drilling or messy global variables, I implemented a **Redux-inspired Store**.
- **`state.js`** holds the single source of truth.
- Components **subscribe** to changes and re-render automatically.
- State changes are **immutable** for predictability.

## 🏃‍♂️ How to Run
Since this uses ES Modules, you need a local server to avoid CORS errors.

1. **VS Code (Recommended)**:
   - Install "Live Server" extension.
   - Right-click `index.html` -> "Open with Live Server".

2. **Python**:
   ```bash
   # Python 3
   python -m http.server
   ```
   Open `http://localhost:8000`.

3. **Node/NPM**:
   ```bash
   npx serve .
   ```

## 📝 Roadmap
- [ ] Drag and Drop Kanban Board
- [ ] Markdown Notes Support
- [ ] Data Export (JSON/CSV)
- [ ] Soundscapes for Focus Mode

---
*Built by Deepto Roy | 2025*

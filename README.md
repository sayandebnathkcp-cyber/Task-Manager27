# Task Manager

A simple, clean **Task Manager** web application built with **HTML, CSS, and vanilla JavaScript** as an internship project. It demonstrates fundamental DOM manipulation without any frameworks or libraries.

---

## Features

- Add new tasks
- Display the list of tasks dynamically (no page reloads)
- Mark tasks as completed (strikethrough styling)
- Delete tasks
- Live counters for total and completed tasks
- Tasks persist across page refreshes via `localStorage`
- Responsive UI that works on mobile and desktop
- Press **Enter** to quickly add a task

---

## Project Structure

```
task-manager/
├── index.html    # HTML structure (no inline CSS/JS)
├── style.css     # All styling and responsive rules
├── script.js     # DOM manipulation and app logic
└── README.md     # Project documentation
```

Files are strictly separated — **no inline CSS or inline JavaScript** is used anywhere.

---

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — flexbox layout, transitions, media queries
- **Vanilla JavaScript (ES6)** — DOM API, `localStorage`, event listeners

No frameworks, no build tools, no dependencies.

---

## How to Run

1. Download or clone the three files (`index.html`, `style.css`, `script.js`) into the same folder.
2. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari).
3. That’s it — the app runs entirely in the browser.

> No server or installation is required.

---

## How to Use

1. Type a task into the input field.
2. Click **Add Task** or press **Enter** to add it to the list.
3. Click the **checkbox** next to a task to mark it as completed (it will appear with a strikethrough).
4. Click the **Delete** button to remove a task.
5. Your tasks are saved automatically and will still be there the next time you open the page.

---

## Code Overview

### `index.html`
Defines the page structure: header, input area, stats bar, task list container, and empty-state message. Links to `style.css` in the `<head>` and `script.js` at the end of the `<body>`.

### `style.css`
Provides a clean, card-based layout with:
- Centered container with soft shadow
- Focus/hover states for inputs and buttons
- `.completed` class for strikethrough styling
- Media query for screens narrower than 480px

### `script.js`
Contains the app logic in 10 clearly labeled steps:
1. Grab DOM elements with `getElementById`
2. Load saved tasks from `localStorage`
3. `saveTasks()` — persist tasks
4. `updateStats()` — refresh counters and empty message
5. `renderTasks()` — rebuild the list from the array
6. `addTask()` — push a new task
7. `toggleTask(index)` — flip completed state
8. `deleteTask(index)` — remove a task via `splice`
9. Attach click and keydown event listeners
10. Initial render on page load

Each function is small, single-purpose, and heavily commented so it is easy to follow for someone new to DOM manipulation.

---

## Learning Concepts Covered

- Selecting elements: `getElementById`
- Creating elements: `document.createElement`, `appendChild`
- Reading/updating content: `textContent`, `value`, `innerHTML`
- Handling events: `addEventListener` for `click`, `change`, `keydown`
- Working with arrays: `push`, `splice`, `filter`, `forEach`
- Toggling CSS classes: `classList.add`, `classList.remove`
- Persisting data: `localStorage.getItem` / `setItem`
- JSON serialization: `JSON.stringify` / `JSON.parse`

---

## Possible Enhancements

- Inline task editing (double-click to rename)
- Filter tabs: All / Active / Completed
- Due dates with overdue highlighting
- Drag-and-drop reordering
- Dark mode toggle

---

## Author

Built as an internship learning project to practice HTML, CSS, and vanilla JavaScript fundamentals.

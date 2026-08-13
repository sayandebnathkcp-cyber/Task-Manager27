/* =========================================================
   Task Manager - script.js
   Simple vanilla JavaScript using DOM manipulation.
   Written to be easy for a 1st-year CS student to follow.
   ========================================================= */

/* ---------- STEP 1: Get references to HTML elements ---------- */
// We use getElementById to grab elements from the HTML file.
const taskInput      = document.getElementById("taskInput");
const addBtn         = document.getElementById("addBtn");
const taskList       = document.getElementById("taskList");
const totalCount     = document.getElementById("totalCount");
const completedCount = document.getElementById("completedCount");
const emptyMessage   = document.getElementById("emptyMessage");


/* ---------- STEP 2: Load saved tasks (if any) ---------- */
// localStorage lets tasks stay saved even after refreshing the page.
// If nothing is saved yet, we start with an empty array.
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


/* ---------- STEP 3: Save tasks to localStorage ---------- */
// This function is called every time the tasks array changes.
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


/* ---------- STEP 4: Update the stats bar (total & completed) ---------- */
function updateStats() {
    const total = tasks.length;
    const done  = tasks.filter(task => task.completed).length;

    totalCount.textContent     = "Total: " + total;
    completedCount.textContent = "Completed: " + done;

    // Show or hide the "No tasks yet" message
    if (total === 0) {
        emptyMessage.classList.add("show");
    } else {
        emptyMessage.classList.remove("show");
    }
}


/* ---------- STEP 5: Render (display) all tasks on screen ---------- */
// This function rebuilds the task list from the tasks array.
function renderTasks() {
    // Clear the current list first
    taskList.innerHTML = "";

    // Loop through each task and create the HTML for it
    tasks.forEach((task, index) => {
        // Create the <li> element that represents a task row
        const li = document.createElement("li");
        li.className = "task-item";
        if (task.completed) {
            li.classList.add("completed");
        }

        // Create the checkbox for marking task complete/incomplete
        const checkbox = document.createElement("input");
        checkbox.type    = "checkbox";
        checkbox.checked = task.completed;
        // When the checkbox changes, toggle this task's status
        checkbox.addEventListener("change", () => toggleTask(index));

        // Create the <span> that shows the task text
        const span = document.createElement("span");
        span.className   = "task-text";
        span.textContent = task.text;

        // Create the Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.className   = "delete-btn";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => deleteTask(index));

        // Put the checkbox, text, and delete button inside the <li>
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);

        // Finally, add the <li> to the task list on the page
        taskList.appendChild(li);
    });

    // Update the counters after rendering
    updateStats();
}


/* ---------- STEP 6: Add a new task ---------- */
function addTask() {
    // Get the text the user typed and remove extra spaces
    const text = taskInput.value.trim();

    // Do nothing if the input is empty
    if (text === "") {
        return;
    }

    // Add a new task object to the tasks array
    tasks.push({
        text: text,
        completed: false
    });

    // Clear the input field so the user can type another task
    taskInput.value = "";

    // Save + refresh the display
    saveTasks();
    renderTasks();
}


/* ---------- STEP 7: Toggle a task's completed status ---------- */
function toggleTask(index) {
    // Flip the completed property (true becomes false, false becomes true)
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}


/* ---------- STEP 8: Delete a task ---------- */
function deleteTask(index) {
    // Remove 1 item at the given index from the tasks array
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}


/* ---------- STEP 9: Attach event listeners ---------- */
// Add task when the "Add Task" button is clicked
addBtn.addEventListener("click", addTask);

// Also add task when the user presses the Enter key inside the input
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});


/* ---------- STEP 10: Initial render when the page loads ---------- */
renderTasks();

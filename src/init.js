
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    let tasks = [];

    taskForm.addEventListener("submit", addTask);

    function addTask(e) {
      e.preventDefault();
      const task = taskInput.value;
      tasks.push(task);
      renderTasks();
      taskInput.value = "";
    }

    function renderTasks() {
      taskList.innerHTML = "";
      tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${task} <button onclick="editTask(${index})">Edit</button> <button onclick="deleteTask(${index})">Delete</button>`;
        taskList.appendChild(li);
      });
    }

    function editTask(index) {
      const newTask = prompt("Enter new task:");
      tasks[index] = newTask;
      renderTasks();
    }

    function deleteTask(index) {
      tasks.splice(index, 1);
      renderTasks();
    }

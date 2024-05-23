window.onload = function () {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskList = document.getElementById("task-list");
  savedTasks.forEach(function (taskText) {
    createTask(taskText);
  });
};

document.getElementById("add-task").addEventListener("click", function () {
  const taskText = document.getElementById("task-text").value;
  if (taskText) {
    createTask(taskText);
    saveTask(taskText);
    document.getElementById("task-text").value = "";
  }
});

function createTask(taskText) {
  const taskList = document.getElementById("task-list");
  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";
  deleteButton.addEventListener("click", function () {
    deleteTask(taskText);
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);
}

function saveTask(taskText) {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(savedTasks));
}

function deleteTask(taskText) {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = savedTasks.filter(function (task) {
    return task !== taskText;
  });
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}
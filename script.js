var tasks = [];

var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");
var addTaskBtn = document.getElementById("addTaskBtn");

function addTask() {
  var taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Por favor, digite uma tarefa válida.");
    return;
  }

  if (tasks.includes(taskText)) {
    alert("Essa tarefa já está na lista.");
    return;
  }

  tasks.push(taskText);

  var taskItem = document.createElement("li");
  var taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.addEventListener("change", function (event) {
    toggleTaskCompletion(event.target);
  });

  var taskTextElement = document.createElement("span");
  taskTextElement.className = "task-text";
  taskTextElement.textContent = taskText;

  taskItem.appendChild(taskCheckbox);
  taskItem.appendChild(taskTextElement);
  taskList.appendChild(taskItem);

  taskInput.value = "";
}

function toggleTaskCompletion(checkbox) {
  var taskTextElement = checkbox.nextSibling;
  taskTextElement.classList.toggle("completed");
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    addTask();
  }
});

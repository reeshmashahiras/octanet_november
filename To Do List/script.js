document.addEventListener("DOMContentLoaded", function () {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var prioritySelect = document.getElementById("prioritySelect");
    var dueDateInput = document.getElementById("dueDateInput");
    var addTaskButton = document.getElementById("addTaskButton");

    addTaskButton.addEventListener("click", addTask);

    function addTask() {
        if (taskInput.value.trim() === "") {
            alert("Please enter a task");
            return;
        }
        var li = document.createElement("li");
        var editButton = document.createElement("button");
        var removeButton = document.createElement("button");
        var date = new Date(dueDateInput.value);
        var formattedDate =
            (date.getDate() < 10 ? "0" : "") + date.getDate() + "-" +((date.getMonth() + 1) < 10 ? "0" : "") +
            (date.getMonth() + 1) + "-" + date.getFullYear();

        li.innerHTML =
            taskInput.value +
            '<span class="priority">' + prioritySelect.value + '</span>' +
            '<span class="due-date">' + formattedDate + '</span>';
        editButton.textContent = "Edit";
        editButton.className = "edit-task-button";
        editButton.addEventListener("click", function () {
            editTask(li);
        });

        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function () {
            removeTask(li);
        });

        li.appendChild(editButton);
        li.appendChild(removeButton);
        taskList.appendChild(li);
        taskInput.value = "";
        prioritySelect.value = "high";
        dueDateInput.value = " ";
    }

    function editTask(li) {
        taskInput.value = li.firstChild.nodeValue.trim();
        prioritySelect.value = li.querySelector('.priority').textContent.trim();
        dueDateInput.value = li.querySelector('.due-date').textContent.trim();
        li.parentNode.removeChild(li);
    }

    function removeTask(li) {
        li.parentNode.removeChild(li);
    }
});

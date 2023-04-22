function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const newTask = document.createElement("li");
    const taskText = document.createTextNode(taskInput.value);
    const deleteButton = document.createElement("button");
    // const temp="https://www.pngall.com/wp-content/uploads/6/Delete-Button-PNG-Picture.png"
  
    if (taskInput.value === "") {
      alert("Please enter a task!");
    } else {
      newTask.appendChild(taskText);
      deleteButton.innerHTML = "X";
      deleteButton.className = "delete-button";
      deleteButton.addEventListener("click", function() {
        newTask.remove();
      });
      newTask.appendChild(deleteButton);
      taskList.appendChild(newTask);
      taskInput.value = "";
    }
  }
  
  document.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      addTask();
    }
  });
  
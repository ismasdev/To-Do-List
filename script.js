document.addEventListener("DOMContentLoaded", function() {
    const taskList = document.getElementById("taskList");
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement("li");
            li.innerHTML = `
                ${taskText}
                <button class="delete">Eliminar</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";

            // Funcion de eliminar tarea
            li.querySelector(".delete").addEventListener("click", function() {
                taskList.removeChild(li);
            });
        }
    });
});

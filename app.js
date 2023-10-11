// selectors
const taskForm = document.getElementById("task-input-form");
const taskInput = document.getElementById("new_task_input");
const taskAdd = document.getElementById("task_submit");
const allTasks = document.querySelector(".tasks");

// form event

// document.getElementById('text').addEventListener('click', (e) => {
//     console.log(e.target.innerHTML)
// })

taskAdd.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(taskInput.value)
    if (!taskInput.value) {
        alert("Please input a field!");
    } else {
        // console.log(taskInput.value)

        // create div taskDiv
        const taskDiv = document.createElement("div");
        taskDiv.className = "content";
        //creating a inputTask
        const inputTask = document.createElement("input");
        inputTask.setAttribute("type", "text");
        inputTask.value = taskInput.value;
        inputTask.readOnly = "readonly";
        taskDiv.appendChild(inputTask);
        // creating a actions div
        const actions = document.createElement("div");
        actions.className = "actions";
        taskDiv.appendChild(actions);
        // create a edit  button in actions div
        const editBtn = document.createElement("button");
        editBtn.className = "edit";
        editBtn.textContent = "Edit";
        actions.append(editBtn);
        // create a edit  button in actions div
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete";
        deleteBtn.textContent = "Delete";
        actions.append(deleteBtn);

        allTasks.appendChild(taskDiv);

        // edit
        editBtn.addEventListener("click", (e) => {
            // console.log(e.target.innerText)
            if (e.target.innerText.toLowerCase() === "edit") {
                // console.log("i am click")

                // input attr -- readonly remove
                editBtn.parentElement.previousElementSibling.readOnly = false;
                editBtn.innerText = "Save";
                inputTask.focus();
                // style
                inputTask.style.border = "1px solid #000";
                inputTask.style.padding = "2px";
            } else {
                editBtn.innerText = "Edit";
                editBtn.parentElement.previousElementSibling.readOnly = true;
                inputTask.style.border = "none";
            }
        });

        // delete
        deleteBtn.addEventListener("click", (e) => {
            // console.log("i am delete")

            taskDiv.remove();
        });
    }

    taskInput.value = " ";
});
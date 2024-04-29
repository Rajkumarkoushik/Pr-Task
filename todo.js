const text = document.querySelector(".text");
const button = document.querySelector(".button");
const list = document.querySelector(".list");

document.addEventListener("DOMContentLoaded", () => {
    const storedTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (storedTodoList) {
        storedTodoList.forEach((todo) => {
            addToDoDomList(todo);
        });
    };
});

function addToDoDomList(todo) {
    const div = document.createElement("div");
    const li = document.createElement("li");
    div.classList.add("todo-div");
    li.classList.add("todo-li");
    li.innerText = todo.text;
    div.appendChild(li);
    list.appendChild(div);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerText = 'Delete';
    div.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
        div.parentNode.removeChild(div);
        updateToDoList();
    });

    const editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.innerText = 'Edit';
div.appendChild(editButton);

    editButton.addEventListener("click", () => {
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = li.innerText.trim(); // Trim whitespace

    li.innerHTML = ""; // Clear the list item
    li.appendChild(editInput);
    editInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            li.innerText = editInput.value;
            updateToDoList();
        }
    });

    });
};


function updateToDoList() {
    const todos = Array.from(list.querySelectorAll(".todo-li")).map((item) => {
        return { text: item.innerText.trim() };
    });
    localStorage.setItem("todoList", JSON.stringify(todos));
};

button.addEventListener("click", (e) => {
    e.preventDefault();
    if (text.value.trim() !== "") {
        const todo = { text: text.value.trim() };
        addToDoDomList(todo);
        updateToDoList();
        text.value = "";
    }
});



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


localStorage.setItem('name', "koushik");
localStorage.removeItem('name');
console.log(localStorage.getItem('name'));

document.cookie = `name = "koushik"`


async function myFunction() {
    const data = await fetch("https://fakestoreapi.com/products");
    const cardsData = await data.json();

    let cards = "";
    cardsData.map((item) => {
        cards += `
        <h1>${item.price}</h1>
        `
    });
    document.querySelector(".head").innerHTML = cards;
}
myFunction();


const promise = new Promise((resolve, reject) => {
    const age = 18;
    if (age > 20) {
        resolve("Age below 18 are  elegible to vote");
    } else {
        reject("Age below 18 are not elegible to vote")
    };
});

promise
    .then((success) => {
        ;
        console.log(success);
    }).catch((error) => {
        console.log(error)
    });


fetch("https://fakestoreapi.com/products").then((data) => {
    return data.json();
}).then((cardData) => {
    let display = "";
    cardData.map((item) => {
        display += `
        <h1>${item.title}</h1>
        `
    });
    document.querySelector(".head").innerHTML = display;
}).catch((error) => {
    document.querySelector(".head").innerHTML = error + "The date is not valid.";
});


function fetchData(data) {
    const promise = new promise((resolve, reject) => {
        fetch(url).then((response) => {
            if (response.ok) {
                console.log("Data fetched successfully");
            } else {
                console.log("Data fetched successfully");
            }
        });
    });
};

const url = "https://fakestoreapi.com/products";

fetchData(url)
    .then((success) => {
        console.log(success);
    }).catch((error) => {
        console.log(error);
    });



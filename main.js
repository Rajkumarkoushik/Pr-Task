// const itemList = [
//     { id: 0, image: "./assets/images/product-1.jpg", name: "Saree ", price: 400, rating: 3 },
//     { id: 1, image: "./assets/images/product-2.jpeg", name: "Kurtha ", price: 600, rating: 4 },
//     { id: 2, image: "./assets/images/product-3.jpg", name: "Children", price: 450, rating: 5 },
//     { id: 3, image: "./assets/images/product-4.jpeg", name: "T-Shirt", price: 200, rating: 2 },
//     { id: 4, image: "./assets/images/product-5.webp", name: "Jean", price: 900, rating: 4 },
//     { id: 5, image: "./assets/images/product-6.jpeg", name: "Sweat shirt", price: 600, rating: 3 },
//     { id: 6, image: "./assets/images/product-7.jpeg", name: "Hoddie", price: 500, rating: 4 },
//     { id: 7, image: "./assets/images/product-8.jpeg", name: "Shoes", price: 400, rating: 5 },
//     { id: 8, image: "./assets/images/product-9.jpeg", name: "Children", price: 350, rating: 2 },
//     { id: 9, image: "./assets/images/product-10.jpeg", name: "Shoes", price: 700, rating: 3 },
//     { id: 10, image: "./assets/images/product-11.jpeg", name: "Dress", price: 300, rating: 4 },
//     { id: 11, image: "./assets/images/product-12.webp", name: "Children", price: 400, rating: 5 },
//     { id: 12, image: "./assets/images/product-13.jpg", name: "Children", price: 600, rating: 1 },
//     { id: 13, image: "./assets/images/product-14.webp", name: "Saree", price: 800, rating: 3 },
//     { id: 14, image: "./assets/images/product-15.jpeg", name: "Shirt", price: 400, rating: 4 },
//     { id: 15, image: "./assets/images/product-16.webp", name: "Short", price: 200, rating: 2 },
//     { id: 16, image: "./assets/images/product-17.jpeg", name: "T-shirt", price: 400, rating: 3 },
//     { id: 17, image: "./assets/images/product-18.jpeg", name: "T-shirt", price: 400, rating: 3 },
//     { id: 18, image: "./assets/images/product-19.jpeg", name: "Children", price: 400, rating: 4 },
//     { id: 19, image: "./assets/images/product-20.jpg", name: "Shirt", price: 800, rating: 5},
// ];

// let list = "";
// itemList.map((item) => {
//     list += `
//     <div class="col-lg-4">
//         <div class="cards-items">
//             <img src=${item.image} alt=${item.name}>
//             <div class="cards-content py-3 text-center">
//                 <h6><span>Name:-</span> ${item.name} </h6>
//                 <p><span>Price:-</span> ${item.price}</p>
//                 <p><span>Rating:-</span> ${item.rating}</p>
//                 <button>Add to cart</button>
//             </div>
//         </div>
//     </div>
//     `
//     document.querySelector(".cards-list").innerHTML = list;
// });


// let month;

// switch (new Date().getMonth()) {
//     case 0:
//         month = "January";
//         break;
//     case 1:
//         month = "February";
//         break;
//     case 2:
//         month = "March";
//         break;
//     case 3:
//         month = "April";
//         break;
//     case 4:
//         month = "May";
//         break;
//     case 5:
//         month = "June";
//         break;
//     case 6:
//         month = "July";
//         break;
//     case 7:
//         month = "August";
//         break;
//     case 8:
//         month = "September";
//         break;
//     case 9:
//         month = "October";
//         break;
//     case 10:
//         month = "November";
//         break;
//     case 11:
//         month = "December";
//         break;
//     default:
//         month = "Leap year"
// }
// console.log(month);


// for (let i = 10; i <= 5; i++){
//     console.log(i);
// };


// let i = 16;

// do {
//     console.log(i);
//     i++;
// } while (i <= 10);

// const object = { name: "koushik", age: 26, designation: "Developer" };

// let text = "";

// for (let value in object) {
//     text += object[value] + " ";
// };
// console.log(text);

// const array = [363, 25, 324543, 534536242, 25346, 42545, 565, 34523,];

// let number = "";

// for (let num in array) {
//     number += array[num] + " ";
// };
// console.log(number);

// const array = [363, 25, 324543, 534536242, 25346, 42545, 565, 34523,];

// let text = "";
// for (let value of array) {
//   text += value + " ";
// }
// console.log(text);


// setTimeout(() => {
//     console.log("hello world!");
// }, 2000);

// const interval = setInterval(() => {
//     console.log("Hello koushik");
// }, 1000);

// setTimeout(() => {
//     clearInterval(interval);
// }, 10000);


// document.querySelector(".input").type = "password";
// document.querySelector(".head").innerText = "hi";

// const division = document.querySelector(".div");
// const head = document.createElement("h1");

// head.innerHTML = "Hello";
// head.classList.add("hello");

// division.appendChild(head);


// console.log(hello);
// var hello = "hello";

// console.log(myFunction());
// function myFunction() {
//     return ("hi");
// };

// const division = document.querySelector(".division");
// const head = document.createElement("h1");
// const para = document.createElement("p");
// head.classList.add("heading");
// head.classList.add("heading1");
// head.style.color = "blue";
// head.innerHTML = "Hello developer";
// division.appendChild(head);
// para.classList.add("para");
// para.innerHTML = "Im an full stack developer";
// division.appendChild(para);
// division.removeChild(para);

// const input = document.querySelector("input");

// input.type = "checkbox";
// document.querySelector(".image").setAttribute("alt", "Im an image");
// document.querySelector(".image").setAttribute("src", "/assets/images/product-1.jpg");


// Todo

// const text = document.querySelector(".text");
// const button = document.querySelector(".button");
// const list = document.querySelector(".list");

// document.addEventListener("DOMContentLoaded", () => {
//     const savedTodos = localStorage.getItem("todos");
//     if (savedTodos) {
//         const todos = JSON.parse(savedTodos);
//         todos.forEach(todo => {
//             renderTodo(todo);
//         });
//     }
// });

// button.addEventListener("click", (e) => {
//     e.preventDefault();
//     const todoText = text.value.trim();
//     if (todoText !== "") {
//                 const todo = { id: Date.now(), text: todoText };
        
//                 // Render the todo on the page
//                 renderTodo(todo);
        
//                 // Add the todo to local storage
//                 addToLocalStorage(todo);
        
//                 // Clear the input field
//                 text.value = "";
//     }
    
// });


// function renderTodo(todo) {
//     const div = document.createElement("div");
//     div.classList.add("todo-div");

//     const items = document.createElement("li");
//     items.classList.add("child");
//     items.innerText = text.value

//     div.appendChild(items);
//     list.appendChild(div);



//     // Edit button
//     const editButton = document.createElement("button");
//     editButton.classList.add("edit");
//     editButton.innerText = 'Edit';
//     div.appendChild(editButton);

//     editButton.addEventListener("click", () => {

//         const editInput = document.createElement("input");
//         editInput.type = "text";

//         editInput.value = items.innerText;

//         items.innerHTML = " ";
//         items.appendChild(editInput);

//         // editInput.focus();

//         editInput.addEventListener("keypress", (e) => {
//             if (e.key === "Enter") {
//                 items.innerText = editInput.value;
//             }
//         });
    


//         // delete button
//         const deleteButton = document.createElement("button");
//         deleteButton.classList.add("delete");
//         deleteButton.innerText = 'Delete';
//         div.appendChild(deleteButton);

//         deleteButton.addEventListener("click", () => {
//             div.parentNode.removeChild(div);
//             removeFromLocalStorage(todo.id);
//         });

//     });

// };

// function addToLocalStorage(todo) {
//     const savedTodos = localStorage.getItem("todos");
//     let todos = savedTodos ? JSON.parse(savedTodos) : [];
//     todos.push(todo);
//     localStorage.setItem("todos", JSON.stringify(todos));
// }

// function removeFromLocalStorage(todoId) {
//     const savedTodos = localStorage.getItem("todos");
//     let todos = savedTodos ? JSON.parse(savedTodos) : [];
//     todos = todos.filter(todo => todo.id !== todoId);
//     localStorage.setItem("todos", JSON.stringify(todos));
// }


const text = document.querySelector(".text");
const button = document.querySelector(".button");
const list = document.querySelector(".list");

// Load todos from local storage when the page loads
document.addEventListener("DOMContentLoaded", () => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
        const todos = JSON.parse(savedTodos);
        todos.forEach(todo => {
            renderTodo(todo);
        });
    }
});

button.addEventListener("click", (e) => {
    e.preventDefault();

    const todoText = text.value.trim();
    if (todoText !== "") {
        const todo = { id: Date.now(), text: todoText };

        // Render the todo on the page
        renderTodo(todo);

        // Add the todo to local storage
        addToLocalStorage(todo);

        // Clear the input field
        text.value = "";
    }
});



function renderTodo(todo) {
    const div = document.createElement("div");
    div.classList.add("todo-div");

    const items = document.createElement("li");
    items.classList.add("child");
    items.innerText = todo.text;

    div.appendChild(items);
    list.appendChild(div);

    // Edit button
    const editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.innerText = 'Edit';
    div.appendChild(editButton);

    editButton.addEventListener("click", () => {
        // Code to edit todo item


    });

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerText = 'Delete';
    div.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
        div.parentNode.removeChild(div);
        // Remove the todo from local storage
        removeFromLocalStorage(todo.id);
    });
}

function addToLocalStorage(todo) {
    const savedTodos = localStorage.getItem("todos");
    let todos = savedTodos ? JSON.parse(savedTodos) : [];
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function removeFromLocalStorage(todoId) {
    const savedTodos = localStorage.getItem("todos");
    let todos = savedTodos ? JSON.parse(savedTodos) : [];
    todos = todos.filter(todo => todo.id !== todoId);
    localStorage.setItem("todos", JSON.stringify(todos));
}

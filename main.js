const itemList = [
    { id: 0, image: "./assets/images/product-1.jpg", name: "Saree ", price: 400, rating: 3 },
    { id: 1, image: "./assets/images/product-2.jpeg", name: "Kurtha ", price: 600, rating: 4 },
    { id: 2, image: "./assets/images/product-3.jpg", name: "Children", price: 450, rating: 5 },
    { id: 3, image: "./assets/images/product-4.jpeg", name: "T-Shirt", price: 200, rating: 2 },
    { id: 4, image: "./assets/images/product-5.webp", name: "Jean", price: 900, rating: 4 },
    { id: 5, image: "./assets/images/product-6.jpeg", name: "Sweat shirt", price: 600, rating: 3 },
    { id: 6, image: "./assets/images/product-7.jpeg", name: "Hoddie", price: 500, rating: 4 },
    { id: 7, image: "./assets/images/product-8.jpeg", name: "Shoes", price: 400, rating: 5 },
    { id: 8, image: "./assets/images/product-9.jpeg", name: "Children", price: 350, rating: 2 },
    { id: 9, image: "./assets/images/product-10.jpeg", name: "Shoes", price: 700, rating: 3 },
    { id: 10, image: "./assets/images/product-11.jpeg", name: "Dress", price: 300, rating: 4 },
    { id: 11, image: "./assets/images/product-12.webp", name: "Children", price: 400, rating: 5 },
    { id: 12, image: "./assets/images/product-13.jpg", name: "Children", price: 600, rating: 1 },
    { id: 13, image: "./assets/images/product-14.webp", name: "Saree", price: 800, rating: 3 },
    { id: 14, image: "./assets/images/product-15.jpeg", name: "Shirt", price: 400, rating: 4 },
    { id: 15, image: "./assets/images/product-16.webp", name: "Short", price: 200, rating: 2 },
    { id: 16, image: "./assets/images/product-17.jpeg", name: "T-shirt", price: 400, rating: 3 },
    { id: 17, image: "./assets/images/product-18.jpeg", name: "T-shirt", price: 400, rating: 3 },
    { id: 18, image: "./assets/images/product-19.jpeg", name: "Children", price: 400, rating: 4 },
    { id: 19, image: "./assets/images/product-20.jpg", name: "Shirt", price: 800, rating: 5},
];

let listItems = "";
itemList.map((item) => {
    listItems += `
    <div class="col-lg-3">
        <div class="cards-items">
            <img src=${item.image} alt=${item.name}>
            <div class="cards-content py-3 text-center">
                <h6><span>Name:-</span> ${item.name} </h6>
                <p><span>Price:-</span> ${item.price}</p>
                <p><span>Rating:-</span> ${item.rating}</p>
                <button onClick = "addToCartButton(${item.id})">Add to cart</button>
                <i class="fa-regular fa-heart icon" onClick = "wishList(${item.id})"></i>
            </div>
        </div>
    </div>
    `
    document.querySelector(".cards-list").innerHTML = listItems;
});

// Cart list
const cartShow = document.querySelector(".cart");

// Increment quantity function
function incrementQuantity(id) {
    const index = cartItems.findIndex((item) => item.id === id);
    if (index !== -1) {
        cartItems[index].quantity++;
        // Update total price
        totalPrice += cartItems[index].price;
        updateCartDisplay();
    }
}

// Decrement quantity function
function decrementQuantity(id) {
    const index = cartItems.findIndex((item) => item.id === id);
    if (index !== -1) {
        if (cartItems[index].quantity > 1) {
            cartItems[index].quantity--;
            // Update total price
            totalPrice -= cartItems[index].price;
            updateCartDisplay();
        }
    }
}

function cartIcon() {
    cartShow.classList.toggle("cart-active");
    if (cartItems.length === 0) {
        document.querySelector(".list-empty").innerHTML = "Please add some items here......";
    } else {
        let data = ''
        cartItems.map((item) => {
            data += `
            <div class="cart-list" data-id="${item.id}">
                <img src=${item.image} alt=${item.name}>
                <div>
                    <button onclick="decrementQuantity(${item.id})">-</button>
                    <p>${item.quantity}</p>
                    <button onclick="incrementQuantity(${item.id})">+</button>
                </div>
                <div class="cards-content py-3 text-center">
                    <h6><span>Name:-</span> ${item.name} </h6>
                    <p><span>Price:-</span> ${item.price}</p>
                </div>
                <i class="fa-solid fa-xmark" onclick="buttonDelete(${item.id})"></i>
            </div>
            `
        });
        document.querySelector(".list-empty").innerHTML = data;
    };
};

// Initialize total price variable and cartItems array
let totalPrice = 0;
let cartItems = [];

// Add to cart button
function addToCartButton(id) {
    const selectedItems = itemList.find((items) => items.id === id);
    if (selectedItems) {
        const findIndex = cartItems.findIndex((items) => items.id === id);
        if (findIndex !== -1) { 
            document.querySelector(".toast-notification").classList.add("toast-notification-active");
            setTimeout(() => {
                document.querySelector(".toast-notification").classList.remove("toast-notification-active");
            }, 2000);
        } else {
            // Initialize quantity to 1 when adding item to cart
            selectedItems.quantity = 1;
            cartItems.push(selectedItems);
            // Add item price to total price
            totalPrice += selectedItems.price;
        };
    };
    document.querySelector('.quantity').innerText = cartItems.length;
    // Update cart quantity and total price display
    updateCartDisplay();
};

// Remove item from the cart
function buttonDelete(id) {
    const card = document.querySelector(`[data-id="${id}"]`);
    card.style.display = "none";
    // Find item index in cart
    const index = cartItems.findIndex((item) => item.id === id);
    if (index !== -1) {
        // Subtract item price multiplied by quantity from total price
        totalPrice -= cartItems[index].price * cartItems[index].quantity;
        // Remove item from cart
        cartItems.splice(index, 1);
    }
    // Update cart quantity and total price display
    updateCartDisplay();
};

// Update cart quantity and total price display
function updateCartDisplay() {
    document.querySelector(".quantity").innerText = cartItems.length;
    document.querySelector(".total-price").innerText = "Total :- " + totalPrice;
}



localStorage.setItem("myCat", "tom");

document.querySelector(".head").innerHTML = localStorage.getItem("myCat");

















const products = [
    {
        id: 1,
        name: "Gaming Headphone",
        price: 2999,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 4999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
        id: 3,
        name: "RGB Keyboard",
        price: 1999,
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
    }
];

const productContainer = document.getElementById("products");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

let cart = [];

/* Display Products */
function displayProducts() {
    products.forEach(product => {

        productContainer.innerHTML += `
      <div class="product-card">
        <img src="${product.image}">
        
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>Premium Quality Product</p>

          <div class="price">
            ₹${product.price}
          </div>

          <button onclick="addToCart(${product.id})">
            Add To Cart
          </button>
        </div>
      </div>
    `;
    });
}

displayProducts();

/* Add To Cart */
function addToCart(id) {

    const item = products.find(product => product.id === id);

    cart.push(item);

    updateCart();
}

/* Update Cart */
function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        total += item.price;

        cartItems.innerHTML += `
      <div class="cart-item">

        <img src="${item.image}">

        <div>
          <h4>${item.name}</h4>
          <p>₹${item.price}</p>
        </div>

      </div>
    `;
    });

    cartCount.innerText = cart.length;
    cartTotal.innerText = total;
}

/* Toggle Cart */
function toggleCart() {
    document
        .getElementById("cart-sidebar")
        .classList.toggle("active");
}
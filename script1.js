const products = [
  { id: 1, name: "T-shirt", price: 499 },
  { id: 2, name: "Sneakers", price: 1799 },
  { id: 3, name: "Backpack", price: 999 },
  { id: 4, name: "Sunglasses", price: 699 }
];

let cart = [];

function displayProducts() {
  const list = document.getElementById("product-list");
  list.innerHTML = products.map(product => `
    <div class="product-card">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  `).join('');
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const item = cart.find(c => c.id === id);
  if (item) {
    item.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  const total = document.getElementById("total");
  const cartCount = document.getElementById("cart-count");

  let totalPrice = 0;
  let totalItems = 0;

  cartList.innerHTML = cart.map(item => {
    totalPrice += item.price * item.qty;
    totalItems += item.qty;
    return `<li>${item.name} (x${item.qty}) - ₹${item.price * item.qty}</li>`;
  }).join('');

  total.textContent = totalPrice;
  cartCount.textContent = totalItems;
}

displayProducts();

function getCart() {
  return JSON.parse(localStorage.getItem("heraCart") || "[]");
}

function saveCart(cart) {
  localStorage.setItem("heraCart", JSON.stringify(cart));
}

function addToCart(item) {
  const cart = getCart();
  const existing = cart.find(
    cartItem =>
      cartItem.name === item.name &&
      cartItem.color === item.color &&
      cartItem.size === item.size
  );

  if (existing) {
    existing.qty += item.qty;
  } else {
    cart.push(item);
  }

  saveCart(cart);
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
}

function clearCart() {
  saveCart([]);
}

function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll("#cart-count").forEach(el => {
    el.textContent = count;
  });
}

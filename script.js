const cart = []

function addItem(name, price) {
  const item = {name: name, price: price, qty: 1}
  cart.push(item);
}

function showItem() {
  console.log(`You have ${cart.length} items in you cart!`);
}

addItem("Apple", 0.49);
addItem("Orange", 0.99);
addItem("Banana", 1.25);

showItem(); 
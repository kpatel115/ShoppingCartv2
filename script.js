// Global variables
const cart = []

//-----------------ADD ITEMS-------------------------------
function addItem(name, price) {

  for (let i = 0; i < cart.length; i += 1) {
    if (cart[i].name === name) {
      cart[i].qty += 1
      return
    }
  }

  const item = {name, price, qty: 1}
  cart.push(item);

};

//-----------------SHOW ITEMS----------------------------
function showItem() { 
  const qty = getQuantity();
  const total = getTotal();

  console.log( `You have ${qty} items in your cart!` );
  // listing items with price and quantity
  for (let i = 0; i < cart.length; i += 1) {
    console.log( `${cart[i].name} ${cart[i].price} x ${cart[i].qty}` )
  }
  console.log ( `Total in cart: $${total}` );
};

//---------------GET QUANTITY--------------------------
function getQuantity() {
  // total quantity amount 
  let qty = 0;

  for (let p = 0; p < cart.length; p+= 1) {
    qty += cart[p].qty
  }
  return qty
};

//----------------GET TOTAL----------------------------
function getTotal() {
  // total price amount 
  let total = 0;
  for (let i = 0; i < cart.length; i += 1) {
    total += cart[i].price * cart[i].qty
  }
  // toFixed(number of decimals) returns a string
  // do arithmetic first then use this to display
  return total.toFixed(2)
};

//---------------FUNCTION CALLS----------------------------------
// Function calls  w/ parameters
addItem("Apple", 0.49);
addItem("Orange", 0.99);
addItem("Banana", 1.25);
addItem("Apple", 0.49);

showItem(); 
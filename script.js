// Global variables
const itemList = document.getElementById("item-list");
itemList.innerHTML = "<li>Hello World</li>"

const itemQuantity = document.getElementById("item-quantity");
itemQuantity.innerHTML = "<h3>Quantity</h3>"

const itemTotal = document.getElementById("item-total");
itemTotal.innerHTML = "<h4>Total</h4>"

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
  let itemString = "" //console.log( `${cart[i].name} ${cart[i].price} x ${cart[i].qty}` )
  
  // listing items with price and quantity
  for (let i = 0; i < cart.length; i += 1) {
    /** 
    const name = cart[i].name
    const price = cart[i].price
    const qty = cart[i].qty
    */
    //{name:"Apple", price: 0.99, qty:3}
    const {name, price, qty} = cart[i]
    
    itemString += `<li>
      ${name} 
      $${price} x ${qty} = 
      ${qty * price}</li>`

  }
  itemList.innerHTML = itemString
  // set to DOM with inner html
};

//---------------GET QUANTITY--------------------------
function getQuantity() {

  let qty = 0;
  let itemQty = "" // H3 tag console.log( `You have ${qty} items in your cart!` );
  
  for (let p = 0; p < cart.length; p+= 1) {
    qty += cart[p].qty
  }
  itemQty += `<h3>You have ${qty} items in your cart!</h3>`
  itemQuantity.innerHTML = itemQty
  return qty
};

//----------------GET TOTAL----------------------------
function getTotal() {
  // total price amount 
  let total = 0;
  let itemTot = "" // H4 tag console.log ( `Total in cart: $${total}` );
  for (let i = 0; i < cart.length; i += 1) {
    total += cart[i].price * cart[i].qty
  }
  itemTot += `<h4>Total in cart: $${total.toFixed(2)}</h4>`
  itemTotal.innerHTML = itemTot
  // toFixed(number of decimals) returns a string
  // do arithmetic first then use this to display
  return total.toFixed(2)
};

//----------------Remove Item----------------------------
function removeItem(name, qty = 0){

  for (let i = 0; i < cart.length; i += 1) {

    if (cart[i].name === name) {

      if (qty > 0) {
        cart[i].qty -= qty
      }

      if (cart[i].qty < 1 || qty === 0) {
        cart.splice(i, 1)
      } 
      return
    }
  }
};


//---------------FUNCTION CALLS----------------------------------
// Function calls  w/ parameters
addItem("Apple", 0.99);
addItem("Orange", 1.29);
addItem("Opinion", 0.02);
addItem("Apple", 0.99);
addItem("Frisbee", 9.92);
addItem("Apple", 0.99);
addItem("Orange", 1.29);

showItem(); 

removeItem("Apple", 1)
removeItem("Frisbee")

showItem(); 
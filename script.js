// Global variables
const itemList = document.getElementById("item-list");
const itemQuantity = document.getElementById("item-quantity");
const itemTotal = document.getElementById("item-total");
const addForm = document.getElementById("add-form");
const itemName = document.getElementById("item-name");
const itemPrice = document.getElementById("item-price");

const cart = []
//--------------Handle Change events on update input------------
itemList.onchange = function(e) {
  if (e.target && e.target.classList.contains("update")) {
    console.log(e.target) // on change happens when press enter or click outside - lose focus
    const name = e.target.dataset.name
    const qty = parseInt( e.target.value )
    updateCart(name, qty)
  }
}

//-------------------Handle Clicks on List------------
itemList.onclick = function(e) {
//console.log("clicked")
  if (e.target && e.target.classList.contains("remove")) {
  const name = e.target.dataset.name // data-name - on button
  removeItem(name) 
  } else if (e.target && e.target.classList.contains("add1")) {
    const name = e.target.dataset.name // data-name - on button
    addItem(name) 
  } else if (e.target && e.target.classList.contains("remove1")) {
    const name = e.target.dataset.name // data-name - on button
    removeItem(name, 1) 
  }
};
//--------------handle add form submit-------------------
// event listener - function handles the event
addForm.onsubmit = function(e) {
  e.preventDefault()
  const name = itemName.value
  const price = itemPrice.value
  addItem(name, price)
  
};

//-----------------ADD ITEMS-------------------------------
function addItem(name, price) {
  for (let i = 0; i < cart.length; i += 1) {
    if (cart[i].name === name) {
      cart[i].qty += 1
      showItem()
      return
    }
  }
  const item = {name, price, qty: 1}
  cart.push(item);
  showItem()
};

//-----------------SHOW ITEMS----------------------------
function showItem() { 
  const qty = getQuantity();
  const total = getTotal();

  itemQuantity.innerHTML =`<h3>You have ${qty} items in your cart!</h3>`
  
  let itemString = ""

  for (let i = 0; i < cart.length; i += 1) {
    const {name, price, qty} = cart[i]
    itemString += `<li>
      ${name} 
      $${price} x ${qty} = 
      $${qty * price} 
      <button class="remove" data-name="${name}">Remove</button>
      <button class="remove1" data-name="${name}"> - </button>
      <button class="add1" data-name="${name}"> + </button>
      <input class="update" type="number" data-name="${name}" >
      </li>`
  }
  itemList.innerHTML = itemString

  itemTotal.innerHTML =`<h4>Total in cart: $${total}</h4>`
};

//---------------GET QUANTITY--------------------------
function getQuantity() {
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
      showItem()
      return
    }
  }
};
//-----------------------------Update Cart-----------------
function updateCart(name, qty) {
  for(let i = 0; i < cart.length; i += 1) {
    if(cart[i].name === name){
      if (qty < 1) {
        removeItem(name)
        return
      }
    cart[i].qty = qty 
    showItem()
      return
    }
  }
}

//---------------FUNCTION CALLS----------------------------------
// Function calls  w/ parameters
addItem("Apple", 0.99);
addItem("Orange", 1.29);
addItem("Opinion", 0.02);
addItem("Apple", 0.99);
addItem("Frisbee", 9.92);
addItem("Apple", 0.99);
addItem("Orange", 1.29);


var cart = [];
var item
var cartobject={}


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

var price=math.floor(math.random()*1000)
var cartobject= {itemName:item, itemPrice:price}
cart.assign({},cartobject)
return `${item} has been added to your cart.`

}

function viewCart() {
 var i
 for(i=0; i<cart.length; i++){
   
 }
 
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

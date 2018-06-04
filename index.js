var cart = [];
var item
var cartobject={}
var price

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

price=Math.floor(Math.random()*1000)
var cartobject= {itemName:item, itemPrice:price}
cart.assign({},cartobject)
return `${item} has been added to your cart.`

}

function viewCart() {
 var i
 for(i=0; i<cart.length; i++){
   return `In your cart, you have ${item[i]} at ${price}`
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

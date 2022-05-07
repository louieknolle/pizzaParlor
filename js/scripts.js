//Business Logic
function PizzaOrder(size, toppings) {
  this.sizeOfPizza = size;
  this.pizzaToppings = toppings;
  this.calculateOrderTotal();
}

PizzaOrder.prototype.calculateOrderTotal = function() {
  let orderTotal = 0;

  if (this.sizeOfPizza === 'small') {
    orderTotal = 12.99;
  } else if (this.sizeOfPizza === 'medium') {
    orderTotal = 16.99;
  } else {
    orderTotal = 20.99;
  }
  
  if (this.pizzaToppings === 1) {
    orderTotal += 1.50;
  } else if (this.pizzaToppings === 2) {
    orderTotal += 3;
  } else if (this.pizzaToppings === 3) {
    orderTotal += 4.50;
  } else {
    orderTotal;
  }
  return orderTotal;
};


// UI Logic
$(document).ready(function() {
  $('form#pizzaOrderInputForm').submit(function(event) {
    event.preventDefault();
    const pizzaSize = $
  });
});
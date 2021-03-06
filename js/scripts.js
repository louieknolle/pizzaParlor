//Business Logic
function PizzaOrder(size, toppings) {
  this.sizeOfPizza = size;
  this.pizzaToppings = toppings;
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
  
  if (this.pizzaToppings.length === 1) {
    orderTotal += 1.5;
  } else if (this.pizzaToppings.length === 2) {
    orderTotal += 3;
  } else if (this.pizzaToppings.length === 3) {
    orderTotal += 4.5;
  } else if (this.pizzaToppings.length === 4) {
    orderTotal += 6;
  } else if (this.pizzaToppings.length === 5) {
    orderTotal += 7.5;
  } else if (this.pizzaToppings.length === 6) {
    orderTotal += 9;
  } else {
    orderTotal;
  }
  return orderTotal.toPrecision(4);
};


// UI Logic
$(document).ready(function() {
  $('form#pizzaOrderInputForm').submit(function(event) {
    event.preventDefault();
    const pizzaSize = $('#pizzaSize').val();

    let toppings = [];
    $('input:checkbox').each(function () {
      if (this.checked) {
        toppings.push($(this).val);
      }
    });

    const newPizza = new PizzaOrder (pizzaSize, toppings);
    const orderTotal = newPizza.calculateOrderTotal();

    $('#price').html(orderTotal);
    $('.orderTotalDisplay').show();
    $('.leftPane').hide();
    $('.order').hide();
  });
  $('.newOrder').click(function(event) {
    event.preventDefault();
    $('.orderTotalDisplay').hide();
    $('input:checkbox').prop('checked', false);
    $('select').val($('option:disabled'));
    $('.leftPane').show();
    $('.order').show();
  })
});
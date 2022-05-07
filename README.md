Describe PizzaOrder()

Test: "It should return an object for the pizza order containing the size and toppings as properties."
Code: const newPizza = new PizzaOrder(['sweet potato'. 'pepperoni'], 'large');
Expected output: PizzaOrder {toppings: ['sweet potato', 'pepperoni'], size: 'large'}


Describe calculateOrderTotal()

Test: "It should determine base price for order based on size."
Code: if(pizzaSize = 'small') {orderTotal = 12.99}
Expected output: newPizza = {toppings:'', size: 'small'}, orderTotal = 12.99

Test: "It should add 1.50 to orderTotal for each additional topping."
Code: if(pizzaToppings = 1) {orderTotal += 1.50}
Expected output = newPizza = {toppings: 'pepperoni', size: 'small'}, orderTotal = 14.49
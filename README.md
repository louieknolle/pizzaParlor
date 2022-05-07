# _A to 'Za Pizza Parlor_

#### By _**Louie Knolle**_

#### _A simple website that allows users to order one pizza, choosing between 3 sizes and 6 toppings, and then the total for their order is displayed._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap 4.5_
* _Javascript 3.6.0_


## Description

_On this webpage for the fictional pizza parlor "From A to 'Za", the user is able to view the menu on the lefthand side of the screen which displays the different pizza sizes available and their respective prices, the price for additional toppings, and a list of the toppings from which they can choose. On the right hand side, is the order box where they choose their pizza's size via the selectbox and then check the boxes next to which toppings they'd prefer. Then a separate box is displayed informing the user of the price for their pizza, calculated based on the size and number of toppings. The "New Order" button resets the application for future orders._

## Setup/Installation Requirements

* _Clone this repository from Github to your desktop_
* _In your terminal run the command "git pull https://github.com/louieknolle/pizzaParlor.git" from the desktop directory_
* _With VSCode installed on your computer, you can then run "code ." into the terminal to open the files there._
* _Download the Live Server extension if you need to, and you can select "Go Live" from the blue bar at the bottom of the VSCode application window to open and use the file in your browser._
* _If you do not have VSCode, you can open the project folder on your Desktop._
* _Once the directory is open, select index.html_
* _Choose which browser you want to open it in_


## Known Bugs

* _No known bugs at this time_

## License

_MIT_

Copyright (c) _2022_ _Louie Knolle_


## Tests

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
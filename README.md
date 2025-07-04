Project Description
This project demonstrates working with JavaScript objects and classes, showcasing data encapsulation, private properties, and methods to manipulate internal state.

1. Customer Object
An object representing a customer with properties:

username — customer name

balance — current balance

discount — discount rate

orders — array of ordered items

Methods:
getBalance() — returns current balance

getDiscount() — returns current discount

setDiscount(value) — updates discount value

getOrders() — returns array of orders

addOrder(cost, order) — adds a new order, deducting the discounted cost from the balance and adding the order to the list

2. Storage Class
A class representing storage with private property #items (an array of stored items).

Methods:
getItems() — returns current items array

addItem(newItem) — adds a new item to storage

removeItem(itemToRemove) — removes specified item from storage

3. StringBuilder Class
A class for building strings with a private property #value.

Methods:
getValue() — returns current string value

padEnd(str) — appends a string to the end

padStart(str) — prepends a string to the start

padBoth(str) — adds a string both at the start and the end

// const EventEmitter = require("node:events");
// const emitter = new EventEmitter();

// // Register a listener
// emitter.on("order-pizza", (size, topping) => {
//   console.log(`Order received! Baking a ${size} pizza with ${topping}`);
// });

// // Register another listener
// emitter.on("order-pizza", (size) => {
//   if (size === "large") {
//     console.log("Serving complimentary drink");
//   }
// });

// console.log("This is a normal console.log befour emitting an event")

// // Emit an event
// emitter.emit("order-pizza", "large", "mushrooms");


const PizzaShop = require('./pizza_shop')
const drink = require('./drinks');

const pizza = new PizzaShop();
const drinkComp = new drink();

pizza.on("order",(orderNumber,size,topping)=>{
  console.log(`${orderNumber} Baking a ${size} pizza with topping ${topping}`)
  drinkComp.compliment(size);
})

pizza.order("small","corn");
pizza.order("large","corn");
pizza.order("large","corn");
pizza.order("small","corn");
pizza.displayOrderNumber();
// const veh = require(`./vehicle`) // here vehicle module is loaded and cached

// console.log(veh.getName());
// veh.setName("Toyota");
// console.log(veh.getName());


// const veh2 = require(`./vehicle`) // using same cached module
// console.log(veh2.getName()); // here you would expect the name "Yamaha", but its not

// it is because node.js think its the same module which is loaded again
// so instaed of loading new module again, it loads the cached module

// so if you want the new module loaded, export the class instead

const vehicle = require(`./vehicle`)

const veh = new vehicle("Yamaha")
console.log(veh.getName())

const veh2 = new vehicle("Toyota")
console.log(veh2.getName())
console.log(veh.getName())
const EventEmitter = require('node:events')

class PizzaShop extends EventEmitter{
    constructor(){
        super();
        this.ordernumber=0;
    }
    order(size,topping){
        this.ordernumber++;
        this.emit("order",this.ordernumber,size,topping);
    }
    displayOrderNumber(){
        console.log(`Order number : ${this.ordernumber}`);
    }
}

module.exports = PizzaShop;
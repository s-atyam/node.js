// In Javascript, functions are first class objects
// A function can be passed as an argument to a function
// A funtion can be also returned as values from other functions

// Any function that has passed as an argument to another function is called callback function

function greet(name){
    console.log(`Hello ${name}`)
}

function higerOrderFunction(callback){
    let name = "John Wick";
    callback(name);
}

higerOrderFunction(greet);

// Two types of callback functions
// - Synchronous callbacks - A callback which is executed imediately is called a synchronous callback
// example
// let numbers = [1,2,4,56,7,8]
// numbers.sort((a,b) => a - b)
// numbers.filter(n => n% 2 === 0)
// numbers.map(n => n/2)
//
// - Asynchronous callbacks - A callback that is often used to continue or resume code execution after an asynchronous
//                            operations has completed
//   Callbacks are used to delay the execution of a functions until a particular time or event has occurred

// In node.js have an asynchronous natur to prevent blocking of execution
// Ex: reading data from a file, fetching from database or handling a network request
// module wrapper

(function(msg){
    const vehicle = "Honda";
    console.log(msg,vehicle);
})("Bike: ");

(function(msg){
    const vehicle = "Toyota";
    console.log(msg,vehicle);
})("Car: ");


// how a function is wrapped
(function(exports, require, module, __filename, __dirname) {
    const vehicle = "Honda";
    console.log(vehicle);
})

// where
// __dirname is : folder name of the current module
// __filename is : file name of the current module
// require is : used to import a module by path
// module is : a reference to the current module

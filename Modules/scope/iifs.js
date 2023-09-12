// Immediately Invoked Funtions Scope (IIFS)
// this allow functions to have its own private scope
// this funtionallity is used by node.js also

(function(){
    const vehicle = "Honda";
    console.log(vehicle);
});

(function(){
    const vehicle = "Toyota";
    console.log(vehicle);
});

// Before a module's code is executed, Node.js will wrap it with function wrapper
// that provide modeule scope

// This saves us from having to worry about conflicting varibales or functions
// There is proper encapsulation and reusability is unaffected
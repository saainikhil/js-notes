// 2. let:- let is a newer way of declaring variables introduced in ES6.
// let is block scoped, which means it is only accessible within the block it is defined in. 
// let can be reassigned but cannot be redeclared in the same scope.

//syntax
// let variableName = value;    

let name = "NikhiL";
console.log(name); // NikhiL

// reassignment
name = "John";
console.log(name); // John

// redeclaration
let name = "Alice"; // SyntaxError: Identifier 'name' has already been declared


//Block scoped
if (true){
    let city = "New York";
    console.log(city);  // New York
}
console.log(city); // ReferenceError: city is not defined   
// What is a Variable ?

// A variable is a named container used to store data in memory.

// Variables allow us to:

// Store values
// Reuse values
// Update values during program execution


// Think of a variable as a labeled box 

// Name of Box → Variable Name
// Item inside Box → Value

let name = "NikhiL";
// name → variable
// "NikhiL" → stored value

// Variable Declaration in JavaScript

// Variables can be declared using:

// 1. var
// 2. let
// 3. const


// 1.var:-  var is the old way of declaring variables before ES6. 
//  var can be function(global) scoped or global scoped, and it can be redeclared and reassigned. 

var age = 25;
console.log(age);

//redeclaration
var age = 25;
var age = 30;
console.log(age);   //30

//reassignment
var age = 25;
age = 35;
console.log(age);    //35 


//function scope
function test(){
    var city = "New York";
    console.log(city);  //New York  
}
console.log(city); // ReferenceError: city is not defined
//Because city only exists inside the function.

// VAR ignores block scope
if (true){
    var a = 10;
}
console.log(a);  //10
// Even though x is inside the block, it is accessible outside.
//This causes bugs in large applications.


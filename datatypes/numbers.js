//Datatypes 

//JavaScript is a dynamically typed language, meaning you do not need to declare the type of a variable explicitly. 
//The type is automatically determined based on the assigned value.

//There are two types of data in JavaScript: Primitive and Non-Primitive
//Primitive data types are: String, Number, Boolean, Null, Undefined, Symbol
//Non-Primitive data types are: Object, Array, Function.

//Primitive Data Types:-

//Number data type

//Number: Represents both integer and floating-point numbers. positive, negative, and zero values are all represented as numbers.
//JavaScript uses the IEEE 754 standard for representing numbers, which means it can handle a wide range of values, including very large and very small numbers.
// Unlike many programming languages, JavaScript has only one number type for all numeric values.

//Syntax: 
//let variableName = numberValue;

//Examples:
let age = 25; // Integer
let price = 19.99; // Floating-point number
let negativeNumber = -5;
let zero = 0;

console.log(age);
console.log(price);
console.log(negativeNumber);
console.log(zero);  

//Special Number Values
//Infinity:-

//Represents a value greater than any number.
console.log(10 / 0); // Infinity

//-Infinity:- Represents a value less than any number.
console.log(-10 / 0); // -Infinity  

//NaN:- Stands for "Not-a-Number". It is the result of an invalid mathematical operation, such as dividing zero by zero or taking the square root of a negative number.
console.log(0 / 0); // NaN

//Number operations
let a=10;
let b=5;
console.log(a + b); // Addition // Output: 15
console.log(a - b); // Subtraction // Output: 5
console.log(a * b); // Multiplication // Output: 50
console.log(a / b); // Division // Output: 2    
console.log(a % b); // Modulus (Remainder) // Output: 0
console.log(a ** b); // Exponentiation (a raised to the power of b) // Output: 100000   


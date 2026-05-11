// Boolean data type:

//A boolean represpents only one of these two values: true or false.
//Boolean are mainly used in conditions, comparisons, decision makind and loops.
//Syntax:
//let variableName = true; // or false

//Examples:
let isRaining = true;
let isSunny = false;
console.log(isRaining); // Output: true
console.log(isSunny); // Output: false

//Boolean values can also be the result of comparisons and logical operations.

//Boolean comparisons:
let a = 10;
let b = 20;
console.log(a == b); // Output: false (equality comparison)
console.log(a != b); // Output: true (inequality comparison)
console.log(a > b); // Output: false (greater than comparison)
console.log(a < b); // Output: true (less than comparison)

//Boolean in conditions:
let age = 18;
if (age>=18){
    console.log("You can watch GOT."); // Output: You can watch GOT.
}

//boolean conversions:-
console.log(Boolean(0)); // Output: false
console.log(Boolean(1));    // Output: true
console.log(Boolean("")); // Output: false
console.log(Boolean("Hello")); // Output: true
console.log(Boolean(null)); // Output: false
console.log(Boolean(undefined)); // Output: false
console.log(Boolean(NaN)); // Output: false

//logical operators with boolean values:-
//Logical AND (&&): Returns true if both operands are true, otherwise returns false.
console.log(true && true); // Output: true
console.log(true && false); // Output: false
console.log(false && false); // Output: false   
//Logical OR (||): Returns true if at least one operand is true, otherwise returns false.
console.log(true || true); // Output: true
console.log(true || false); // Output: true
console.log(false || false); // Output: false
//Logical NOT (!): Returns the opposite of the boolean value.
console.log(!true); // Output: false
console.log(!false); // Output: true

//checking boolean values in conditions:
let isLoggedIn = true;
console.log(isLoggedIn); // Output: true
//check boolean type
console.log(typeof isLoggedIn); // Output: boolean

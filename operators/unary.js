// Unary operators in JavaScript perform operations on a single operand.
// Examples include: +, -, ++, --, !, typeof, delete, void.

// 1. Unary plus (+) - Converts operand to a number
let numStr = "42";
let num = +numStr; // num is 42 (number)
console.log(typeof num, num);

// 2. Unary minus (-) - Negates the operand
let positive = 5;
let negative = -positive; // negative is -5
console.log(negative);

// 3. Increment (++) - Increases value by 1 (pre or post)
let x = 10;
console.log(++x); // Pre-increment: 11
console.log(x++); // Post-increment: 11, then x becomes 12
console.log(x); // 12

// 4. Decrement (--) - Decreases value by 1 (pre or post)
let y = 10;
console.log(--y); // Pre-decrement: 9
console.log(y--); // Post-decrement: 9, then y becomes 8
console.log(y); // 8

// 5. Logical NOT (!) - Inverts boolean value
let isTrue = true;
let isFalse = !isTrue; // isFalse is false
console.log(isFalse);

// 6. typeof - Returns the type of the operand as a string
let str = "hello";
console.log(typeof str); // "string"
console.log(typeof 42); // "number"

// 7. delete - Removes a property from an object
let obj = { a: 1, b: 2 };
delete obj.a; // Removes property 'a'
console.log(obj); // { b: 2 }

// 8. void - Evaluates expression and returns undefined
let result = void (2 + 3); // result is undefined
console.log(result); // undefined
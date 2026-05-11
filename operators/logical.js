// Logical operators in JavaScript: && (AND), || (OR), ! (NOT)

// AND (&&): Returns true if both operands are true
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

// OR (||): Returns true if at least one operand is true
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

// NOT (!): Inverts the boolean value
console.log(!true);  // false
console.log(!false); // true

// Example with variables
let a = 5;
let b = 10;
console.log(a > 3 && b < 15); // true (both conditions true)
console.log(a > 3 || b > 15); // true (at least one true)
console.log(!(a > 3));       // false (inverts true to false)
// Ternary Operator Examples in JavaScript

// Basic syntax: condition ? expressionIfTrue : expressionIfFalse

// Example 1: Simple true/false check
let age = 18;
let canVote = age >= 18 ? "Yes, you can vote!" : "No, you cannot vote.";
console.log(canVote); // Output: Yes, you can vote!

// Example 2: Assigning values based on condition
let isRaining = true;
let activity = isRaining ? "Stay indoors and read a book." : "Go for a walk.";
console.log(activity); // Output: Stay indoors and read a book.

// Example 3: Nested ternary (use sparingly for readability)
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade); // Output: B

// Example 4: Using with functions
function getGreeting(hour) {
    return hour < 12 ? "Good morning!" : hour < 18 ? "Good afternoon!" : "Good evening!";
}
console.log(getGreeting(10)); // Output: Good morning!
console.log(getGreeting(15)); // Output: Good afternoon!
console.log(getGreeting(20)); // Output: Good evening!

// Practice: Try changing the values and see how the outputs change!
//1. What are Functions in JavaScript?
//Functions are reusable blocks of code that perform a specific task.
//They allow you to break down your code into smaller, manageable pieces, making it easier to read and maintain.
//Functions can take input parameters, perform operations, and return a value.
//A function is a block of code that runs only when it is called.

//2. How to Declare a Function in JavaScript?
//You can declare a function in JavaScript using the function keyword, followed by the function name and parentheses ().
//The code block that contains the statements to be executed is enclosed in curly braces {}.

// Basic Syntax of a Function
function functionName() {
    // code to execute
}

// Example 1 — 
function greet() {
    console.log("Hello World");
}
greet();   // Output: Hello World
// Explanation
// function greet() → creates the function
// console.log() → prints message
// greet() → calls the function

// Real-Time Example
function sendOTP() {
    console.log("OTP Sent Successfully");
}
sendOTP(); // Output: OTP Sent Successfully



// | Feature            | Explanation                       |
// | ------------------ | --------------------------------- |
// | Reusable           | Write once, use many times        |
// | Organized          | Makes code clean                  |
// | Easy Maintenance   | Easy to update                    |
// | Reduces Repetition | Avoid duplicate code              |
// | Modular            | Breaks program into smaller parts |

// 2. why do we use functions in JavaScript?
// They solve many prograamming problems and make our code more efficient and easier to read. 
// Here are some reasons why we use functions in JavaScript:

// Main Reasons for Using Functions
// 1. Code Reusability

// Instead of writing same code repeatedly, use a function.

// Without Function
console.log("Welcome");
console.log("Welcome");
console.log("Welcome");

// With Function
function welcome() {
    console.log("Welcome");
}
welcome();
welcome();
welcome();

// 2. Reduces Code Duplication:- Functions help avoid repeated code.


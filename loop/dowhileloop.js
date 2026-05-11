let i = 1;

do {
    console.log("Number:", i);
    i++;
} while (i <= 5);

// Do-while loop that validates user input
let password = "";

do {
    password = prompt("Enter a password (at least 6 characters):");
} while (password.length < 6);

console.log("Password accepted!");

// Do-while loop with break statement
let count = 0;

do {
    console.log("Count:", count);
    count++;
    if (count === 3) break;
} while (count < 10);

// Do-while loop that processes array elements
let items = ["apple", "banana", "cherry"];
let index = 0;

do {
    console.log("Item:", items[index]);
    index++;
} while (index < items.length);
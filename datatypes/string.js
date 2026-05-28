//String data type:-
//A String represents textual data.
// Strings are sequences of characters enclosed inside single quotes (' '), double quotes (" "), or backticks (` `).

//Syntax:
//let variableName = "stringValue";

//Examples:
{
	let name = 'john snow';
	let greeting = 'Hello, World!';
	let message = 'Welcome to JavaScript!';

	console.log(name);
	console.log(greeting);
	console.log(message);
}

//string concatenation
let firstname = 'sir';
let lastname = 'jorah';
console.log('hello this is '+firstname + ' ' + lastname); // Output: "hello this is sir jorah"

//Template literals
//Template literals are enclosed by backticks (` `) and allow for embedded expressions using ${expression}.
//They provide an easy way to create strings with dynamic content.
{
	let name = 'daenerys';
	let num = 20000;
	console.log(`my name is ${name} and i need ${num} unsullied.`); // Output: "my name is daenerys and i need 20000 unsullied."
}

// Escape Characters:-
// Escape characters are used to insert characters that are otherwise difficult or impossible to type directly in a string.
// The backslash (\) is used as the escape character.

	let message = 'He said, "Hello!"'; // Output: He said, "Hello!"
	let poem = 'Roses are red\nViolets are blue'; 
// Output:
// Roses are red
// Violets are blue

//Tab space
{
	let name = 'Arya';
	console.log('My name is\t' + name); // Output: My name is    Arya
}

//String properties and methods:-
let place = 'Dragonstone';
console.log(place.length); // Output: 11     
console.log(place.toUpperCase()); // Output: DRAGONSTONE
console.log(place.toLowerCase()); // Output: dragonstone 
console.log(place.includes('stone')); // Output: true
console.log(place.indexOf('o')); // Output: 5
console.log(place.slice(0, 6)); // Output: Dragon
console.log(place.replace('stone', 'keep')); // Output: Dragonkeep
console.log(typeof place); // Output: string

//Important notes:- Strings are immutable in JavaScript, meaning that once a string is created, it cannot be changed. 
// Any operation that appears to modify a string actually creates a new string.

//Strings Are Immutable

//Once created, strings cannot be changed directly.

{
	let name = 'Tyrion';
	name[0] = 'D';
	console.log(name); // Output: "Tyrion" (the original string remains unchanged)
}

//To modify a string, you need to create a new string based on the original one.

let originalString = 'Winter is coming';
let modifiedString = originalString.replace('Winter', 'Summer');
console.log(originalString); // Output: Winter is coming
console.log(modifiedString); // Output: Summer is coming

//strings can store numbers as well, but they will be treated as text rather than numeric values.
let value = '12345';
console.log(value); // Output: "12345"
console.log(typeof value); // Output: string

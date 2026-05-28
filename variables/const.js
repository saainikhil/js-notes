//3.const:-const is used to declare constant variables.

// A constant variable: cannot be reassigned 
// must be initialized during declaration
// is block scoped


// Syntax
// const variableName = value; // Example placeholder — commented so file runs (would reference undefined `value`).

//example
const pi = 3.14;
console.log(pi); // 3.14

// reassignment (demonstration) — commented out so this file runs without throwing
// pi = 3.14159; // TypeError: Assignment to constant variable.

//block scoped
{
    const a = 10;
    console.log(a); //10
}
// console.log(a); // ReferenceError: a is not defined (commented to avoid TDZ error)

//redeclaration
// const pi = 3.14; // SyntaxError: Identifier 'pi' has already been declared (commented out)
//even though we are trying to redeclare pi, it throws an error because const variables cannot be redeclared in the same scope.

//we must initialize a const variable during declaration, otherwise it will throw an error.
// const name; // SyntaxError: Missing initializer in const declaration (commented out)


const a = [1,2,3,4];
a.push(5);
console.log(a); // [1,2,3,4,5]
// Even though we cannot reassign a,
// we can modify the contents of the array because arrays are mutable.

const person = {
    name: 'Sai'
};
person.name = 'Nikhil';
console.log(person.name); // Nikhil
// Similarly, we can modify the properties of an object declared with const.
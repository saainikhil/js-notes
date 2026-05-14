// Objects in JavaScript
// An object is a dynamic data structure that stores related data as key - value pairs, where each key uniquely identifies its value.

// The values of properties can be primitives, objects, or functions(known as methods when defined inside an object).
// Objects are mutable and dynamic properties can be added, modified, or deleted at any time.
// Objects allow data grouping and encapsulation, making it easier to manage related information and behaviour together.

// Properties → data / values
// Methods → functions inside objects

// Why Objects Are Used
// Objects are used to represent real - world entities.
// Instead of creating many separate variables, we group related information together.

// Without Object
let studentName = "Nikhil";
let studentAge = 22;
let studentCourse = "JavaScript";
// without objects vvariables become too many and hard to manage data is not organized.

//with object
let person = {
    firstName: "Saai",
    lastName: "Nikhil",
    age: 25,
    isStudent: true,
    courses: ["Java", "Python", "C++"],
    // sayHello: function () {
    //     console.log("Hello, my name is " + this.firstName + " " + this.lastName);
    // },
    // sayage: () => {
    //     console.log("My age is " + person.age);
    // },
    // saycourses: function () {
    //     console.log("My courses are " + this.courses[1]);  // to call specific index of an array inside an object
    // }
}
for (let i in person) {
    console.log(`this is key ${i} and this is value ${person[i]}`)
}



// if you would like to access one of this property of the object you should use THIS method (this.firstname).
// here THIS method will access the properties of the current object.
//without THIS method we can't access the properties of the object. it will return undefined.
// arrow function will not access the keyword this. because arrow function will not have its own scope.
// arrow function is used to define anonymous functions. and arrow function is defined inside the object.
// normal function will access the keyword this. because normal function will have its own scope.



// // if we need to access properties of the object then we use dot or bracket notation.
// console.log(person.firstName);       //dot notation
// console.log(person["lastName"]);    //bracket notation

// // if you want to add any property to the object then you should use dot or bracket notation
// person.grade = "A";
// console.log(person.grade);

// // if you want to delete any property from the object then you should use delete keyword.
// delete person.grade;
// console.log(person);  //undefined

// // you can add or modify properties of an object using dot or bracket notation.
// person.age = 26;
// console.log(person.age);        //modified

// person.grade = "A";
// console.log(person.grade);        //added

// person.sa



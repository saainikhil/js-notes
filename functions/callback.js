// function greet(a, b) {
//     console.log("hi " + a);
//     b();
// }
// function say() {
//     console.log("gd morning!");
// }
// greet("nikhil", say);

// //a function which will take another as a arguement is called a callback function.
// //  In the above code, saybye is a callback function which is passed as an argument to the greet function.
// //  When the greet function is called, it will execute the code inside it and then call the callback function saybye. 

// function calculator(a,b,c,d){
//     console.log("from calculator function");
//     a(b,c,d);
// }
// function Sub(a,b,c){
//     console.log(a - b - c);
// }
// function mul(a,b,c){
//     console.log(a * b * c);
// }
// function sum(a,b,c){
//     console.log(a + b - c);
// }
// calculator(sum, 10, 5, 3);
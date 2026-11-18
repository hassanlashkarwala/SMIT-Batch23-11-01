//* First topic is arrow function

// first we can create an simple function.
// when i right simple function, so you know i write the keyword of function

// function myName() {
//     console.log("Hassan");
// }
// myName()

// syntax of arrow function:

// const greet = () => {
//     console.log("Hello Students");
// };
// greet();

// now i used arrow function and print my name:

// const showMyName = () => {
//     console.log("My name is hassan!");
// }

// showMyName()

// user parameters with arrow function

// const sumTwoNumbers = (a, b) =>{
//      console.log(a + b);
// }
// sumTwoNumbers(10, 20)

// now used return keyword in arrow function. 

// const squareTwoNumbers = (x) =>{
//     return x * x;
// }
// let result = squareTwoNumbers(4)
// console.log(result);

// shorthand way to use arrow function
// If the function body contains only one expression, you can remove the {} and return keyword.
// If there is only one parameter, parentheses are optional.
// If there are zero or multiple parameters, parentheses are required.

const squareTwoNumbers = x => x * x;
console.log(squareTwoNumbers(6));

// Difference between normal function vs arrow function!
// normal function: 
// Uses the function keyword.
// Has traditional syntax.
// Has its own this value.
// Can be used as a constructor.

// arrow function:
// Uses the => syntax.
// Has shorter and simpler syntax.
// Does not have its own this value.
// Cannot be used as a constructor.
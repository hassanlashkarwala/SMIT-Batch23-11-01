// Array Methods are built-in JavaScript functions that allow us to perform different operations on arrays, such as accessing, modifying, searching, filtering and transforming data.

// Real-world mein kyun use hote hain?
// ex: 
// E-commerce: Products ko filter karna.
// Shopping cart: Total price calculate karna.
// Student management: Passed students find karna.
// Social media: Posts display karna.
// Dashboard: Users ka data transform karna.
// React.js: Array ke data ko UI mein display karna.

// previous class topic for of or for in...

// let fruits = ["apple", "mango", "banana"];
// for(let fruit of fruits){
//     console.log(fruit);
// }

// ====================
// forEach() method
// ====================
// The forEach() method executes a provided function once for each element of an array.

// let numbers = [10, 20, 30, 50]
// numbers.forEach(function(number){
//     console.log(number);
// })

// learning: 
// numbers.forEach(): Array ke har element par function chalai ga.
// function(number): Current element number variable mein milega.
// console.log(number): Current element print hoga.

// important : forEach() koi new array return nahi karta. Isliye ise sirf iteration aur side effects ke liye use karte hain.

// ====================
// Map() method
// ====================
// The map() method creates a new array by applying a function to every element of the original array.

// let numbers = [10, 20, 30, 50]
// let doubledNumbers = numbers.map(function(number){
//     return number * 2;
// })
// console.log(doubledNumbers);

// learning: 
// Original array mein numbers hain.
// map() har number par function execute karega.
// number * 2 calculate hoga.
// return calculated value ko new array mein bhejega.
// New array doubledNumbers mein store hogi.

// ====================
// filter() method
// ====================
// The filter() method creates a new array containing only those elements that pass a specified condition.

// let numbers = [10, 15, 20, 25, 30, 35, 40];
// let evenNumbers = numbers.filter(function(number){
//  return number % 2 != 0;   // odd
//  return number % 2 === 0;  //  even
// })
// console.log("whole numebers", numbers);
// console.log("even numbers", evenNumbers);

// learning: 
// % remainder operator hai.
// number % 2 === 0 check karta hai ke number even hai ya nahi.
// Condition true hogi toh number new array mein include hoga.
// False hogi toh skip ho jayega.
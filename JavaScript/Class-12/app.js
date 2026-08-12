// What is boolean?
// Boolean ek data type hai jisme sirf do values hoti hain:
// true
// false

// let isRaining = true;
// let isSunny = false;

// Simple: Boolean ka answer basically yes/no ya true/false hota hai.

// Example :
// let isStudent = true;
// console.log(isStudent);

// What is flag?
// Flag koi special JavaScript keyword nahi hai. Flag actually ek normal variable hota hai jisme hum usually true ya false store karte hain taake program ko pata ho ke koi condition hui hai ya nahi.

// Example:
// let found = false;
// Yahan found hamara flag hai.

// Initially:
// found = false.

// Matlab: "Abhi mujhe woh cheez nahi mili."

// Agar baad me mil jaye:
// found = true;
// Matlab: "Ab mujhe woh cheez mil gayi."

// Useful Example:
// let numbers = [10, 20, 30, 40, 50];
// let found = false;

// for (let i = 0; i < numbers.length; i++) {
// if (numbers[i] === 40) {
//         found = true;
//     }
// }
// console.log(found);

// let numbers = [10, 20, 40, 50];
// let found = false;
// for (let i = 0; i < numbers.length; i++) {
//    if (numbers[i] === 30) {
//         found = true;
//     }
// }
// console.log(found);

// length + for loop
// let fruits = ["Apple", "Mango", "Banana", "Orange"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// Example with break keyword!
// for (let i = 1; i <= 10; i++) {
// if (i === 6) {
//     break;
// }
// console.log(i);
// }

let bikes = [70, 110, 150, 250];
let found = false;
for(let i = 0; i < bikes.length; i++){
    if(bikes[i] === 250){
        found = true;
        break;
    }
}
console.log(found);
// =====================================================
// Chapter 37 Functions: Passing data back from them
// =====================================================

// function add(a, b) {
//   return a + b;
// }
// console.log(add(20, 40));
// let result = add(20, 30);
// console.log(result);

// ============================================
// console.log() aur return mein difference
// ============================================
// console.log():
// Sirf console mein value dikhata hai. 
// Lekin hum console ki us value ko directly kisi variable mein receive nahi kar rahe hen.

// return:
// Value ko function ke bahar wapas bhejta hai:
// function add(a, b) {
//     return a + b;
// }
// let result = add(10, 20);
// console.log(result);

// how the return keyword work?
// function
//    ↓
// 10 + 20
//    ↓
// return 30
//    ↓
// result = 30

// function multiply(a, b) {
//     return a * b; 
// }
// let answer = multiply(5, 4);
// console.log(answer);

// function multiply(a, b) {
//     console.log(a * b);
// }
// let answer = multiply(5, 4);
// console.log(answer);

// function add(a, b) {
//     return a + b;
// }
// console.log(add(10, 20));
// let total = add(10, 20) + 50;
// console.log(total);

// function test() {
//     console.log("Hassan");
//     return "Hello";
// }
// test();
// console.log(test());

// =======================================
// Chapter 38: Local vs Global Variables
// =======================================

// let userName = "Hassan";   
// function greet() {
//     console.log(userName);
// }
// greet();
// console.log(userName);

// function greet() {
//     let message = "Hello Hassan";
//     // console.log(message);
//     return message;
// }
// greet();
// console.log(message);

// let name = "Hassan";
// function test() {
//     let name = "Ali";
//     console.log(name);
// }
// test();
// console.log(name);

// let x = 10;
// function test() {
//     x = 20;
//     console.log(x);
// }
// test();
// console.log(x);

// Scope variable ka simple rule
// GLOBAL
//    ↓
// Variable function ke bahar
//    ↓
// Multiple places se access ho sakta hai

// LOCAL
//    ↓
// Variable function ke andar
//    ↓
// Sirf us function ke andar available

function greet(waseem) {
    console.log(waseem);
}
console.log(waseem);
greet("Hassan");
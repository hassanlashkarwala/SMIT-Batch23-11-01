//* ===================================== 
//*  Chapter 72: Objects Constructors
//* =====================================

// Constructor ki zaroorat kyun hoti hai?
// let course1 = {
//     title: "Web Development",
//     duration: 6,
//     fee: 15000
// };

// let course2 = {
//     title: "Graphic Design",
//     duration: 4,
//     fee: 12000
// };

// let course3 = {
//     title: "Python Programming",
//     duration: 5,
//     fee: 14000
// };

// What is constructor function?
// Definition:
// A constructor function is a special type of function used to create and initialize multiple objects with similar properties.

// Syntax of constructor function
// function Course(title, duration, fee) {
//     this.title = title;
//     this.duration = duration;
//     this.fee = fee;
// }
// let course1 = new Course("Web Development", 6, 15000);
// let course2 = new Course("Graphic Design", 4, 12000);
// let course3 = new Course("Python Programming", 5, 14000);
// console.log(course1);
// console.log(course2);
// console.log(course3);

// What is new keyword in JavaScript?
// Jab humne likha new Course(...), so in JavaScript:
// 1. Ek naya empty object create hua.
// 2. Constructor function ke andar this ko us naye object se associate kiya.
// 3. Constructor function ka code execute kiya.
// 4. Naye object ko return kiya hai, jab tak constructor explicitly koi doosra object return na kare.

// agar new keyword use na kare tw?
// Normal function call mein new nahi lagaya. Isliye regular non-strict browser script mein this global object ko refer kar sakta hai; strict mode mein this undefined hoga aur error aa sakta hai.
// Conclusion: Constructor function ko object create karne ke liye new ke saath call karna chahiye.
// undefined milta hai... agar new keyword use na kro function call karwane se phele

// Chapter 73: Objects Constructors for methods
// What is Prototype?
// Definition: A prototype is an object from which other JavaScript objects can inherit properties and methods.

// Prototype ek object hota hai jiske properties aur methods doosre objects inherit kar sakte hain.

// Simple words mein:
// JavaScript mein har normal object ka ek internal prototype reference hota hai. Jab hum kisi object ki property access karte hain aur woh us object mein nahi milti, to JavaScript uske prototype chain mein search kar sakta hai.
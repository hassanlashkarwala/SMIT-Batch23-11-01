// ========================
// Reduce Method
// ========================
// Definition: The reduce() method executes a callback function on each element of an array and reduces the entire array into a single accumulated value.

// SYNTAX
// array.reduce(function(accumulator, currentValue) {
//     // logic
// }, initialValue);


// ex: 01 
// let marks = [80, 75, 90, 85, 70];

// let totalMarks = marks.reduce(function(total, mark){
//    return total + mark;

// }, 0)

// console.log(totalMarks);


// ex: 02 
// let cart = [
//     { product: "Laptop", price: 120000 },
//     { product: "Mouse", price: 2500 },
//     { product: "Keyboard", price: 4500 },
//     { product: "Headphones", price: 6000 }
// ];

// ex: 03
// why we used initial value?
// let numbers = [10, 20, 30];

// let result = numbers.reduce(function(acc, current) {
//     return acc + current;
// }, 100);

// console.log(result);

// ==================
// find Method 
// ==================
// Definition: The find() method returns the first element in an array that satisfies the given condition.

// SYNTAX 
// array.find(function(element) {
//     return condition;
// });

// ex: 01 
// let students = [
//     { name: "Ali", marks: 65 },
//     { name: "Ahmed", marks: 85 },
//     { name: "Sara", marks: 95 },
//     { name: "Ayesha", marks: 85 }
// ];

// let student = students.find(function(item) {
//     return item.marks === 85;
// });

// console.log(student);

// ex: 02
// find product by id 
// let products = [
//     { id: 101, name: "Laptop" },
//     { id: 102, name: "Mobile" },
//     { id: 103, name: "Tablet" }
// ];

// let selectedProduct = products.find(function(product) {
//     return product.id === 102;
// });

// console.log(selectedProduct);

// ======================
// findIndex() method
// ======================
// Definition: The findIndex() method returns the index of the first element that satisfies the given condition.

// ex: 01 
// let students = [
//     "Ali",
//     "Ahmed",
//     "Sara",
//     "Ayesha"
// ];

// let position = students.findIndex(function(student) {
//     return student === "Sara";
// });

// console.log(position);

// ex: 02
// find expensive product of index number
// let products = [
//     { name: "Mouse", price: 1500 },
//     { name: "Keyboard", price: 3500 },
//     { name: "Monitor", price: 25000 }
// ];

// ==================
// some() method 
// ==================
// Definition: The some() method checks whether at least one element in an array satisfies the given condition. It returns a Boolean value (true or false).

// SYNTAX 
// array.some(function(element) {
//     return condition;
// });

// ex: 01 
// let marks = [75, 80, 40, 90, 65];
// let hasFailed = marks.some(function(mark) {
//     return mark < 50;
// });
// console.log(hasFailed);

// ex: 02 
// let products = [
//     { name: "Laptop", stock: 0 },
//     { name: "Mouse", stock: 10 },
//     { name: "Keyboard", stock: 5 }
// ];

// let isAvailable = products.some(function(product) {
//     return product.stock > 0;
// });

// console.log(isAvailable);

// ===================
// every() method
// ===================
// Definition: The every() method checks whether all elements in an array satisfy the given condition. It returns true only if every element passes the condition.

// SYNTAX
// array.every(function(element) {
//     return condition;
// });

// let marks = [75, 80, 65, 90, 55];
// let allPassed = marks.every(function(mark) {
//     return mark >= 50;
// });
// console.log(allPassed);

// combine with some() and every()
// let ages = [15, 20, 25];

// console.log(ages.some(age => age >= 18));
// console.log(ages.every(age => age >= 18)); 

// ===================
// includes() method 
// ===================
// Definition: The includes() method determines whether an array contains a specific value. It returns true or false.

// array.includes(value); 

// let skills = [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React"
// ];

// console.log(skills.includes("JavaScript"));
// console.log(skills.includes("Python"));

// ex: 02 
// let cart = [
//     "Laptop",
//     "Mouse",
//     "Keyboard"
// ];

// let productExists = cart.includes("Mouse");

// if (productExists) {
//     console.log("Product is already in cart!");
// } else {
//     console.log("Product is not in cart!");
// }

// ================
// sort() method
// ================
// Definition: The sort() method sorts the elements of an array in place and returns the sorted array.

// SYNTAX
// array.sort();

// ex: 01
// let students = [
//     "Zain",
//     "Ali",
//     "Hassan",
//     "Ahmed"
// ];

// students.sort();
// console.log(students);

// ex: 02
let prices = [500, 100, 1000, 50, 250];

prices.sort(function(a, b) {
    return a - b;
});

console.log(prices);
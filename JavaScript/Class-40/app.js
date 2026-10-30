// let product = {
//     name: "Smart Phone",
//     price: 45000,
//     color: "White",
//     available: true
// };
// console.log(product);

// In JavaScript, there are two types to achieved the properties of objects!

// Dot Notation: Simple, known property names ke liye convenient hai.
// how i used dot notation

// let game = {
//     title: "Sky Runner",
//     level: 5,
//     score: 1200
// };

// console.log(game.title);
// console.log(game.score);
// console.log(game.levels);
// object ka name likhne ke baad dot notation lagao ga then property name, so mujhe us property ki value mil jai gi

// Bracket Notation: Dynamic property names ke liye bhi useful hai.
// objectName["propertyName"]

// let restaurant = {
//     name: "Spice House",
//     cuisine: "Pakistani",
//     rating: 4.5
// };
// console.log(restaurant["name"]);
// console.log(restaurant["cuisine"]);

// now we access dynamic property, with the help of bracket notation

// let employee = {
//     name: "Hamza",
//     department: "Design",
//     salary: 60000
// };
// let selectedProperty = "salary";
// console.log(employee[selectedProperty]);

// now we access dynamic property, with the help of dot notation
// console.log(employee.selectedProperty);

// Now i add new property in Object

// let order = {
//     orderId: 501,
//     item: "Chicken Burger",
//     total: 1000
// };
// order.status = "Preparing";
// order.deliveryTime = "Three hours";
// console.log(order.status);
// console.log(order.deliveryTime);
// console.log(order);

// now i remove the property

// let order = {
//     orderId: 501,
//     item: "Chicken Burger",
//     total: 1000
// };
// order.status = "Preparing";
// delete order.total
// console.log(order);

// Chapter 71: Object Methods
// Simple Definition: A method is a function associated with an object.
// For my students: Method ek function hota hai jo kisi object ke saath associated hota hai aur koi specific action perform kar sakta hai.

// function greet() {
//   console.log("Welcome to JavaScript!");
// }
// greet();

// There are two different things
// Property: property information store kar sakti hai.
// Method: method function ke zariye koi action perform kar sakta hai.

// let gamer = {
//     username: "ShadowX",
//     level: 15,
//     showProfile: function () {
//            console.log("Welcome, ShadowX!");
//         // console.log(username);
//         // console.log(level);
        
//     }
// };
// console.log(gamer.username);
// gamer.showProfile();

// now we learn this keyword
// now we used object properties in method

let gamer = {
  username: "ShadowX",
  level: 15,
  showProfile: function () {
    console.log("Username: " + this.username);
    console.log("Level: " + this.level);
  },
};
gamer.showProfile();

// Important note: this ka behavior har situation mein same nahi hota.
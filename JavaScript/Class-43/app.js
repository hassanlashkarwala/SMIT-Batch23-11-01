// function Player(name, score) {
//   this.name = name;
//   this.score = score;

//   this.showScore = function () {
//     console.log(this.score);
//   };
// }

// let player1 = new Player("Ali", 500);
// let player2 = new Player("Hamza", 800);
// let player3 = new Player("Sara", 1000);

// Template Literals
// let firstName = "Hassan";
// let lastName = "Raza";
// // console.log(firstName + " " + lastName);
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);

// let message =
//   "Hello Students\n" +
//   "Welcome to JavaScript\n" +
//   "Today we will learn Template Literals";
// console.log(message);

// let message =
//   `Hello Students
//    Welcome to JavaScript
//    Today we will learn Template Literals`;
// console.log(message);

let student = {
    name: "Ali",
    age: 20,
    course: "JavaScript"
};

let result = `Student Name: ${student.name}
Age: ${student.age}
Course: ${student.course}`;

console.log(result);

// Home work! Q:01
// Store three players in the array
// And add more one player in the array of object.

// Home work! Q:02
// create one objects, and get the data in console, with the help of template literals
// create one array, and get the data in console, with the help of template literals

// Home work! Q:03
// why we need prototype! and how i used to prototype in constructor.
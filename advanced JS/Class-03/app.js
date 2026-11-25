// Iterators & For...of & For... in

// What is iterators?
// I have one array and five students name in an array!
// And i need to print all elements one by one

// ex: 
// let students = ["Ali", "Ahmed", "Hassan", "Usman", "Bilal"];
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);
// console.log(students[4]);
// console.log(students);
// console.log(students);
// console.log(students);
// console.log(students);
// console.log(students);

// for(let i = 0; i < students.length; i++){
//     console.log(students[i]);
// }

// Iteration is the process of accessing or processing elements one by one from a collection of data.
// In simple words:
// "Iteration ka matlab hai kisi collection ke elements ko one by one access karna."

// previous revision
// for loop 

// let students = ["Ali", "Ahmed", "Hassan", "Usman", "Bilal"];
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }

// one more loop in your JS
// for of loop specifically iterable data ko one by one access karne ke liye use hota hai.  

// syntax for of loop

// for (let value of iterable) {
//     // code
// }

// let students = ["Ali", "Ahmed", "Hassan", "Usman", "Bilal"];

// for(let student of students){
//     console.log(student);
// }

// Comparison for or for of loop
// for loop:
// Index-based iteration possible, Index manually manage karte hain, Traditional looping

// for of loop: 
// Values directly milti hain, Values automatically milti hain,Iterable data ke liye convenient

// let numbers = [10, 20, 30];

// Traditional for
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// For of
// for (let number of numbers) {
//     console.log(number);
// }

// ex: 
// let student = {
//     name: "Ali",
//     age: 15,
//     subjects: ["English", "Math", "Computer"]
// };
// console.log(student.name);
// console.log(student.subjects);
// console.log(student.subjects[2]);

// let student = {
//     name: "Ali",
//     age: 15
// };

// student.age = 16;

// console.log(student);

// how to i get key and values of object with the help of for in loop
let student = {
    name: "Ali",
    age: 15,
    city: "Karachi"
};

for (let key in student) { 
     console.log(key, student[key]);
    //  console.log(student[key]);
}

// let student1 = {
//     name: "Ali"
// };

// let student2 = student1;

// student2.name = "Ahmed";

// console.log(student1.name);
// console.log(student2.name);
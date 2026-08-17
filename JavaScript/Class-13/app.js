// Revision last class!
// let studentName = ["Hassan", "Bilal", "Haris", "Owais"];
// for (let i = 0; i < studentName.length; i++) {
//     console.log(i);
// }

// for (let i = 20; i <= 30; i++) {
// if (i === 25) {
//     break;
// }
// console.log(i);
// }
// console.log(i);

// let digits = [120, 140, 160, 180];
// let foundDigits = false;
// for(let i = 0; i < digits.length; i++){
//     if(digits[i] === 250){
//         foundDigits = true;
//         break;
//     }
// }
// console.log(foundDigits);

// Chapter 20 - Nested for loops.
// Simple concept:
// Nested loop = ek for loop ke andar doosra for loop.

// so why we used nested loop 
// Jab bhi data do dimensions me ho (rows + columns, ya har item ke andar aur items compare karne hon), tab nested loop use karte hain.

// syntax for loop & nested for loop
// for (let i = 0; i <= 5; i++) {
//     for(let j = 0; j <= 3; j++){

//     }
// }

// Basic Example!
// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(i, j);
//   }
// }

// i = 1 (outer loop pehli baar chala)
// Ab inner loop poora chalega (j = 1 se 3 tak):
// 1 1
// 1 2
// 1 3

// Inner loop khatam → ab outer loop agle number pe jayega.
// i = 2 (outer loop dusri baar chala)
// Inner loop phir se j=1 se shuru hoga:
// 2 1
// 2 2
// 2 3

// i = 3 (outer loop teesri baar chala)
// Inner loop phir se j=1 se shuru:
// 3 1
// 3 2
// 3 3

// second example
// for (let i = 1; i < 3; i++) {
//     for (let j = 1; j < 5; j++) {
//         console.log(i, "x", j);
//     }
// }

// mutiplication example!
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(i * j); 
//   }
// }

// nested for loop with array :
let students = ["Hassan", "Ali", "Ahmed"];
let subjects = ["HTML", "CSS", "JavaScript"];

for (let i = 0; i < students.length; i++) {
  for (let j = 0; j < subjects.length; j++) {
    console.log(students[i], subjects[j]);
  }
}
// example ke structure!
// Outer loop student select kar raha hai, inner loop us student ke liye subjects ke through ja raha hai. 
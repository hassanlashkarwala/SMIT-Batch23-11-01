// What is loop? 
// Loop ka matlab hai kisi code ko repeatedly execute karna jab tak koi condition satisfy ho rahi ho.
// means ke ye kaam mene manually kiya hai isko hum with the help of loop kis tarah likh sakte hen?
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// For loop
// for loop tab boht useful hota hai jab humein pata ho ke loop ko kis range/count mein chalana hai.
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// Now the turn is while loop
// S.Definition: While loop bh us waqt tak code repeat karta hai jab tak condition true hoti hai.

// Syntax of while loop
// while (condition) {
//     // code
// }

// ab wahin kaam ju humne sab se phele manually likha, phr for loop se and ab while loop se

// let i = 1;
// while(i <= 5){
//    console.log(i);
//    i++;
// }

// ab step by step while loop ko samjhna hai
// Step 1: let i = 1;   // Starting value 1
// Step 2: i <= 5      // Condition ko check kro
// Step 3: console.log(i) or alert what you want;      
// Step 4: i++        // Iteration, Ab i becomes 2.

// While loop + array, print all the elements of your array, with the help of while loop.

// let students = ["Hassan", "Bilal", "Ahmed", "Shayan"];
// let i = 0;
// while (i < students.length) {
//     console.log(students[i]);
//     i++;
// };

// check the even numbers 1 to 20, used while loop
// let i = 1;
// while (i <= 20) {

//     if (i % 2 === 0) {
//         console.log(i);
//     }
//     i++;
// };

// create function & while loop! And print the numbers of 1 to 5

// function myFunction(number){
//     let i = 1;
//     while(i <= 5){
//         console.log(i);   
//         i++;  
//     }
// };
// myFunction(5);

// Used return keyword also, function & while loop
function sumNumbers(limit) {

    let i = 1;
    let sum = 0;
    while (i <= limit) {
        sum = sum + i;
        i++;
    }
    return sum;
}
let result = sumNumbers(5);
console.log(result);
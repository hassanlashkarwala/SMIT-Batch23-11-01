//  try catch!

// Exception Handling:

// So now the question is What is Exception? 
// Sabse pehle samjho ke Exception ka matlab hota hai runtime error, yani aisa error jo JavaScript code execute hote waqt generate hota hai.

// ex:
// console.log("Hello Students");

// console.log(userName);

// console.log("Welcome to JavaScript"); 

// try catch in simple words 
// try: Is block ke andar hum woh code likhte hain jahan error aane ka possibility ho.

// catch: Agar try block mein error aata hai, to catch block execute hota hai aur hum error ko handle kar sakte hain.  

//  try {
//      // Code that may produce an error
//  } 
//  catch (error) {
//      // Handle the error
//  }

// console.log("Hello Students");

// try {
//     console.log(userName);
// } 
// catch (error) {
//     console.log("Something went wrong!");
// }

// console.log("Welcome to JavaScript");

//  try...catch ki wajah se hum error ko handle kar sakte hain aur program ka baqi code execute karwa sakte hain.

// try {
//     console.log(userName);
// } 
// catch (error) {
//     console.log(error.message);
// }
// Agar humein sirf error ka message chahiye, to hum error.message use kar sakte hain.

// ex: 02
let num1 = 20;
let num2 = 0;

try {
    if (num2 === 0) {
        throw new Error("Cannot divide by zero!");
    }

    let result = num1 / num2;

    console.log("Result:", result);
} 
catch (error) {
    console.log("Error:", error.message);
}

// Yani throw se hum custom error generate kar sakte hain aur catch se usay handle kar sakte hain.
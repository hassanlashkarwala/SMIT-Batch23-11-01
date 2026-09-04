// ========================
// Chapter 35: Functions
// ========================
// mujhe ap sab se phele ye batai!
// mujhe same kaam baar baar krna ho? tw kiya me baar baar code likho.
// Example: 
// console.log("Welcome Hassan");
// console.log("Welcome Hassan");
// console.log("Welcome Hassan");
// kiya ye code efficient hai?

// So now we can discuss on functions!
// function aik reusable block of code hota hai jo specific task ko perform karta hai.

// Syntax of function 
// function functionName() {  //  ----> block scope start
    // which task you perform in it!
// }    // <---- block scope end
// functionName()    //---> function calling 

// now we used basic function
// function greet() {
//     console.log("Hello Hassan");

// };
// greet()
// greet()
// greet()
// greet()
// greet()
// Function banaya humne?
// Kiya Function ko chalaya humne?
// So calling function 
// greet();

// Now i call multiple times of my function
// greet();
// greet();
// greet();
// Error? -----> NO
// The beauty of function, don't repeat code again and again!
// Only create function and call the function!
// how much time do you want!
// ap jitni bar chahon apna fuction call krwa sakte ho eg: 2, 4, 100 ...

// ==================
// Parts of function:
// ==================
// function ----> keyword
// greet    ----> function name
// ()       ----> parentheses
// {}       ----> function body
// Jo code is curly bracket { } ke andar hai, woh function ka kaam hai. function usse perform krega bs


// ======================================
// Chapter 36: Passing Data to Functions
// ======================================

// ab mujhe ap ye batai ke me jab bh upper function ko call krwa raha ho
// wo mujhe sirf kya return kr raha tha?
// Har baar ouput yehi mil raha tha: ----> Hello Hassan
// Right?

// So now the question is ab zaroori thodi hai me hassan hi ko bulwao
// ab me chahta ho ouput ai Hello Ali!
// function greet() {
//     console.log("Hello Hassan");
// }
// Ye phele function ju humne parha wo hai, or ye flexible nahi hai.
// Humein function ko data dena hai.

// So now we learn parameters!
// hum jab function ko koi bh name assign kar rahe hen functionName ke baad parenthesis hen () is parenthesis ke andar ju bh value hogi wo hamari parameter khe lai gi
// eg:
// function greet(studentName) {
//     console.log("Hello" + " " + studentName);
// }
// Parameter simple hai kiya? ----> ju sirf hamare data ko received krta hai
// Parameter define or simple words!
// Parameter ek variable hota hai jo function ke andar data receive karta hai.

// Now we learn Arguments
// hum jab bh function ko call karwa rahe hen jese functionName ke baad ju parenthesis hen () is parenthesis ke andar ju bh value hogi wo hamari arguments khe lai gi

// no more confusion in parameters or arguments
// function greet(name)
//               ↑
//           parameter

// greet("Hassan")
//       ↑
//     argument

// Ab function call 
// greet("Ali");

// So wo ju mujhe phele output mil raha tha baar baar Hassan! ab wo hassan nh miley ga mene dynamically value saved krwa gi arguments ke andar ab mujhe mile ga Ali.

// Now we use parameter or argument in function
// function greet(studentName, lastName){
//     console.log("Hello"+ " " + studentName);
//     console.log("Hello"+ " " + lastName);
// }
// greet("Ali", "Shoaib");
// greet("Shoaib");
// greet("rizwan");
// greet("rafay");

// parameter or argument ka faida ye hua ke jab bh argument me koi new value likhoga mujhe bh mil jai gi kisi ki madad se parameter ki madad se kyu ke wo mere function ka data collect kr raha hai
// ab mera function flexible hai
// greet("Khan");
// greet("Osama");

// So now the question is!
// Kiya me multiple arguments or multiple parameters pass kar sakta ho?

// function greet(firstName, lastName) {
//     console.log("Hello" + " " + firstName + " " + lastName);
// }
// greet("Hassan", "Owais");
// is function me two parameters hen and two arguments
// firstName ----> parameter
// lastName  ----> parameter
// "Hassan"  ----> argument
// "Owais"   ----> argument

// Practice Question:
// Two numbers ko apas me sum karwai with the help of function 

// one more practice question
// ab apna name, and apni age print krwao with the help of function
// phr isi function ko reusable bana kr dikhai!
// phr mera name and meri age print krwai dosra function nh baney ga isi function ko resuable krna hai

// What we learn today class?
// Syntax of function
// Create function
// Calling function
// Multiple time calling function
// Parameter
// Argument
// Multiple parameters  & multiple arguments

function sumTwoNumber(numOne, numTwo) {
 console.log(numOne + numTwo);
};
sumTwoNumber(50, 70);

function userIntro(userName, userAge) {
 console.log("User name: " + userName); 
 console.log("User age: " + userAge); 
};
userIntro("Bilal", 22);
userIntro("Hassan", 21);
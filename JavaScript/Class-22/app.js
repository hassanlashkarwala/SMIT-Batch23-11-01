// function printNumbers() {
//     for (let i = 1; i <= 5; i++) {
//         console.log(i);
//     }
// }
// printNumbers();

// let x = 10; 
// function test(){
//     x = 20;
//     console.log(x);
// }
// console.log(x);
// test();

// =======================================================================================================
// Chapter 39 Switch Statements: How to start them & Chapter 40 switch statements: How to complete them
// =======================================================================================================
// ex: super version of if/else!

// if(true){
//     console.log("Hello");
// }else{
//     console.log("World");
// }

// if/else: Jab conditions different type ki hon!
// switch: Jab same variable/value ke different exact options check karne hon!
// eg: switch (day) {
//     case "Monday":
//     case "Tuesday":
//     case "Wednesday":
// }

// syntax
// switch(condition){
//     ----> which condition you want
// }

// let dayOfWeek = "Monday";

// switch(dayOfWeek){
//     case "Saturday":
//         console.log("Today is Saturday");
//          break;

//     case "Sunday":
//         console.log("Today is Sunday, Funday");
//          break;

//     case "Monday":
//         console.log("Today is monday, Working day");   
//         break; 

//     default :
//     console.log("No day!!");
// }
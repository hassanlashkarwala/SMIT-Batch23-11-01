// Chapter 43 & 44
// Placing scripts, & commenting!
// Script placement ka basic idea:
{/* <head>
    <script src="app.js"></script>
</head> */}

{/* <body>
    ...
    <script src="app.js"></script>
</body> */}
// body ke end mein script rakhne ka reason ye hai ke HTML content pehle load/render ho jaye, phir script execute ho.

// How to single line comment
// This is a comment
// let age = 20;

// How to multiple lines commit
/*
   This is a
   multi-line comment
*/

// Revision Switch Statement & if/else 
// let classDay = prompt("Enter Your Class Day");
// switch (classDay) {
//     case "Monday":
//     console.log("Monday Your Class Day");
//     break;

//     case "Wednesday":
//     console.log("Wednasday Your Class Day");
//     break;

//     case "Friday":
//     console.log("Friday Your Class Day");
//     break;

//     default:
//         console.log("Weekend, fun day!");
// };

// let age = 18;
// let cnic = prompt("You have CNIC?");
// if (age >= 18 && cnic === "yes") {
//   console.log("You are an adult");
// } else if (age >= 18 && cnic === "no") {
//   console.log("Are you 18, but you don't have CNIC");
// } else {
//   console.log("You are child");
// }
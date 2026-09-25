// onclick event
// Kisi particular element ke click par:
// ex:
// <button onclick="doSomething()">Click</button>

// onsubmit event
// Form submit hone par:
// ex:
// <form onsubmit="submitForm()">
// Submit button click karna ek common way hai form submit karne ka, lekin submit event form ka event hai.

// Now wo move chapter 51!
// Reading and setting paragraph text

// previous topic
// function myFunction(){
//     let userName = document.getElementById("username").value;
//     console.log(userName);
// }

// New Topic: Reading and setting paragraph text

// function myFunction() {
//   let para = document.getElementById("message");
//   console.log(para);
//   para.innerHTML = "Welcome to JavaScript!!"
//   console.log(para);
// }
// myFunction()

// function showResult() {
//     let age = prompt("Enter your age here");

//     if (age >= 18) {
//         document.getElementById("result").innerHTML = "You are an adult";
//     } else {
//         document.getElementById("result").innerHTML = "You are a minor";
//     }
// }

// function changeImage(){
//     let image = document.getElementById("myImage");
//     image.src = "image/image2.png";
// }

function changeContent() {
  document.getElementById("title").innerHTML = "JavaScript DOM";
  document.getElementById("pic").src = "image/image2.png";
}

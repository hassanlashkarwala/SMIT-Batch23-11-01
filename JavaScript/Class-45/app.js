// now first we learn trim method

// let userName = "     Hassan    ";
// console.log(userName.trim());
// console.log(userName);

// text field!

// function checkName() {
//     let userName = document.getElementById("name").value;
//     if (userName.trim() === "") {
//         alert("Please enter your valid name");
//     } else {
//         alert("Welcome " + userName.trim()); 
//     }
// }

// dropdown field

// function checkCourse() {
//     let course = document.getElementById("course").value;
//     if (course === "") {
//         alert("Please select a course");
//     } else {
//         alert("You selected: " + course);
//     }
// }

// email validation

// Example:
// hassan@gmail.com  ----> valid format
// hassan123 ----> invalid format

// let userEmail = prompt("Enter your email here")
// console.log(userEmail.includes("@"));

let emailCheck = document.getElementById("emailForm");
emailCheck.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Email format is valid!");
});
// Chapter 65, The DOM Counting elements

// let list = document.getElementById("tasks");
// console.log(list.children);
// console.log(list.children.length);

// let liElements = getElementsByTagName("li");
// var howManyLi = liElements.length;
// console.log(howManyLi);

// Chapter 65, The DOM Attributes

// let photo = document.getElementById("photo");
// console.log(photo.getAttribute("alt"));
// photo.setAttribute("alt", "My profile pic")

// Now we can learn addEventListener()
// Simple definition. Imagine you have a button. You want some JavaScript code to execute when a student clicks that button.
// For this, we can use addEventListener()

// previous topic onclick()
// btn.onclick = function () {
//   console.log("Clicked");
// };

// This also handles clicks. However, with addEventListener(), you can attach multiple event listeners to the same event without replacing the previous listener.

// now we can used mostly addEventListener()

let button = document.getElementById("btn");

button.addEventListener("click", function (){
    console.log("Used AddEventListener");
})

// button.addEventListener("mouseout", function (){
//     console.log("Mouse Out");
// })

// button.addEventListener("mouseover", function (){
//     console.log("Mouse Over");
// })
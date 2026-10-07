// Question 1 Show the Box!
// Create a "Show Box" project using HTML, CSS, and JavaScript.
// Create a button and a hidden box on the page.
// Initially, the box should not be visible on the screen.
// When the user clicks the button, JavaScript should add or change a CSS class so that the box appears on the screen.
// The box should contain a heading or a message.
// Condition: Do not use JavaScript to directly change style.display to show the box. You must use a CSS class to control the box's visibility.

// function addBox(){
//     let myBox = document.getElementById("box");
//     myBox.className = "showBox";
// }

// Question 2: Interactive Image
// Create an "Interactive Image" using HTML, CSS, and JavaScript.
// Add an image to the page using HTML and CSS.
// Initially, the image should have a simple appearance.
// When the user moves the mouse over the image, JavaScript should apply a CSS class to the image.
// After the class is applied:
// The image size should change.
// The image should have a different border or background effect.
// The image should have a visually attractive effect.
// When the mouse leaves the image, it should return to its original state.
// Condition: Do not apply styling directly through JavaScript. Use a CSS class to control the changes.

// revision
// function changeColor() {
//   let para = document.getElementById("para");
//   para.style.color = "blue";
//   para.style.cursor = "pointer"
// }

// Chapter: 56
// now I styling all paras! And what I used to get it!
// so now i target element by tag name, that's called p, h1 etc

// let para =  document.getElementsByTagName("p");
// console.log(para);

// console.log(para[0].innerHTML);
// console.log(para[2].innerHTML);

// Chapter: 57
// let somePara = document.getElementById("rules");
// let paragraphs = somePara.getElementsByTagName("p");
// console.log(paragraphs[2].innerHTML);

let table = document.getElementById("table");
var cells = table.getElementsByTagName("td");
for (let i = 0; i < cells.length; i++) {
  cells[i].style.backgroundColor = "blue";
  cells[i].style.color = "white";
}

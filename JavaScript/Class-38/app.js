// Chapter 67 mein humne seekha tha ke naya node create karke parent ke end mein kaise add karte hain.

// let userInput = document.getElementById("myInput");
// let button =  document.getElementById("btn");
// let unorderedList = document.getElementById("list")

// button.addEventListener("click", function (){
// let myList = document.createElement("li")
// myList.textContent = userInput.value;
// unorderedList.appendChild(myList)

// userInput.value = " "
// })


// Chapter 68!
// now you can think about it!
// i can add a task in the beginning of list 
// aur second situation: 
// kisi particular task se pehle naya task rakhna ho;
// third situation:
// page par kisi existing element ke beech mein naya element insert karna ho;

// Simple Definition: insertBefore()
// insertBefore() is a DOM method that inserts a new node before a specified reference node inside the same parent.

// Syxtax: parentNode.insertBefore(newNode, referenceNode);

// parentNode: insert anything in this parent
// parentNode: woh parent jiske andar insertion karni hai.

// newNode: you can add node in it 
// newNode: woh node jo insert karna hai

// referenceNode: you can add node before existing node
// referenceNode: woh existing child jiske bilkul pehle naya node rakhna hai.

// one thing is: referenceNode us parent ka child hona chahiye. Agar reference node us parent ke andar nahi hai, toh method error de sakta hai.

// firstElementChild returns the first child element of an element, or null if there is no child element.

// firstChild returns the child node. Ex: text node, comment or element node.

// let modules = document.getElementById("modules");
// let addCssInModule = document.createElement("li");
// addCssInModule.textContent = "CSS";
// let jsModule = modules.children[1];
// modules.insertBefore(addCssInModule, jsModule);

// Example: 02
// let updates = document.getElementById("updates");
// let addUpdate = document.getElementById("addUpdate");

// addUpdate.addEventListener("click", function () {
//   let newUpdate = document.createElement("li");
//   newUpdate.textContent = "Important: Check your email";

//   updates.insertBefore(newUpdate, updates.firstElementChild);
//   console.log(updates.firstElementChild);
// })

let modules = document.getElementById("modules");
var removeButton = document.getElementById("removeButton");

removeButton.addEventListener("click", function () {
  let course = document.getElementById("javaScript");
  if (course) {
    modules.removeChild(course);
  }
});
// Chapter 67 mein humne seekha tha ke naya node create karke parent ke end mein kaise add karte hain.

// let userInput = document.getElementById("addTask");
// let button = document.getElementById("btn")
// let unorderList = document.getElementById("taskList")

// button.addEventListener("click", () => {
// let createList = document.createElement("li")
// createList.textContent = userInput.value;
// unorderList.appendChild(createList)

// userInput.value = " ";
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

// firstElementChild returns the first child element of an element, or null if there is no child element.

// firstChild returns the child node. Ex: text node, comment or element node.

// Syxtax: parentNode.insertBefore(newNode, referenceNode);

// parentNode: insert anything in this parent
// parentNode: woh parent jiske andar insertion karni hai.

// newNode: you can add node in it 
// newNode: woh node jo insert karna hai

// referenceNode: you can add node before existing node
// referenceNode: woh existing child jiske bilkul pehle naya node rakhna hai.

// one thing is: referenceNode us parent ka child hona chahiye. Agar reference node us parent ke andar nahi hai, toh method error de sakta hai.

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

//   updates.insertBefore(newUpdate, updates.firstChild);
//   console.log(updates.firstChild);
// })
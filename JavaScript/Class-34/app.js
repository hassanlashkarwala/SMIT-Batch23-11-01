// What is nodeType?
// DOM (Document Object Model) mein HTML ka har element, text aur comment sab ek node hotey hen.
// nodeType define the node type of an element!

// nodeType: which type of node in it! 
// ex: 
// <h1></h1>  -----> This is called element node!
// Hello world  -----> This is called text node!

// What's return the nodeType?

// let heading = document.getElementById("heading");
// console.log(heading.nodeType);

// const box = document.getElementById("box");
// console.log(box.nodeType);
// console.log(box.firstChild.nodeType);

// const container = document.getElementById("container");
// console.log(container.nodeType);
// console.log(container.nodeName); 

// function checkNodes() {
//     let container = document.getElementById("container");
//     let nodes = container.childNodes;

//     for(let i = 0; i < nodes.length; i++){
//         if (nodes[i].nodeType === 1){
//             console.log("Element Node:", nodes[i].nodeName);
//         }
//         else if (nodes[i].nodeType === 3){
//             console.log("Text Node:", nodes[i].nodeType);
//         }
//         else if (nodes[i].nodeType === 8){
//             console.log("Comment Node:", nodes[i].nodeType);
//         }
//     }
// }
// checkNodes()

let kidNode = document.getElementById("div2");
let pNode = kidNode.parentNode;
console.log(pNode);
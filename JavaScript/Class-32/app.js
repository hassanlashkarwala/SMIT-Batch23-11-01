// Chapter 58 & 59
// The DOM...

// DOM: Document Object Model
// HTML -> Browser -> DOM -> JavaScript can interact with the page

// Now my question is!
// When i write HTML code, so browser suppose HTML just like a text?

// so the answer is no!
// Browser HTML ko read karke uska ek structure/tree create karta hai.
// and usi structure ko hum khete hen DOM!

// DOM Simple Definition: 
// The DOM is a tree-like structure created by the browser from an HTML document.
// "Browser hamari HTML ko read karke ek tree/organization chart bana deta hai. Is tree mein page ke different parts nodes ki form mein hote hain. JavaScript is DOM ke through webpage ko access aur change kar sakti hai."

// DOM Tree
// document
//    │
//    └─ html
//        ├── head
//        │    └── title
//        │         └── "Simple Document"
//        │
//        └── body
//             └── div
//                  ├── p
//                  │    └── "There's not much to this."
//                  │
//                  └── p
//                       └── "Not to this."

// 1st level -> document
// 2nd level -> html
// 3rd level -> head / body
// 4th level -> title / div
// 5th level -> text / p
// 6th level -> paragraph text



// General rule ye yad rakhe bs 
// Parent -> Child -> Grandchild

// Now the question is what is Node?

// Node is a part of an HTML document, such as a document, element, or text.
// means: HTML document ke har part ko Node kehte hain.


// There are three types!
// Document Node: Whole HTML document.
// Element Nodes: <p> .... </p> whole paragraph element.
// Text Nodes:  Hello World!


// Now we move parent to child relation!
// Simple rule: If one node is inside another node, the inner node is the child and the outer node is the parent.

// Three thing
// Parent
// Child
// Sibling
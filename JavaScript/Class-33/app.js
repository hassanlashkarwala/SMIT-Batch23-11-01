// What is the DOM?
// DOM: The Document Object Model. The browser represents the HTML document as a tree of nodes that JavaScript can access and manipulate.

// What is the parent of the first <div>?
// The <body> element.

// What are the direct children of the <div>?
// The <h1> and the two <p> elements.

// Are the two <p> elements siblings?
// Yes. They have the same parent: the <div>.

// What is the parent of the text 'Welcome'?
// The <h1> element, not the <div> directly.

// What does getElementById() return?
// The element matching that ID, or null if no matching element exists.

// What does getElementsByTagName('p') return?
// An HTMLCollection containing matching paragraph elements.

// In the collection, what does paragraphs[0] mean?
// The first paragraph in the collection. Indexing starts at zero.

// What is the difference between a parent and a sibling?
// A parent is an element that contains another element. Siblings are elements that have the same parent.

// Chapter 60: The DOM, Finding Children

// What does finding children mean?
// Finding children means accessing the nodes directly inside a particular parent node.

// What is childNodes?
// childNodes is a property that returns a live NodeList containing all direct child nodes of an element, including element nodes, text nodes and comments.


// let div = document.getElementsByTagName("p");
// console.log(div);

let container = document.getElementById("container");
console.log(container.children);
console.log(container.children.length);
// console.log(container.children[0]);
// console.log(container.children[1]);

// console.log(container.childNodes);
// console.log(container.childNodes[0]);
// console.log(container.childNodes[2]);


// The browser usually represents the indentation and line breaks between tags as text nodes too. Isliye childNodes mein <h1> aur <p> ke ilawa whitespace text nodes bhi aa sakte hain.

// let container = document.getElementById("container");
// console.log(container.nodeType);
// console.log(container.childNodes[0].nodeType);
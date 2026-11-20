// previous topic
// const add = (a, b) => a + b;
// console.log(add(10, 20));

// Now today we learn default parameters
// What is default parameters?

// Suppose:
// We are creating a function that displays a welcome message to the user. But what will the function do if the user does not provide their name?

// function greet(name) {
//     console.log("Welcome " + name);
// }
// greet("Hassan");
// greet();

// name function of parameter
// hassan value of argument
// when i never passed the arguments, so parameter gives undefined

// now what's the solution is? undefined!
// so this is called default parameter!

// Default Parameters allow us to assign a default value to a function parameter when no argument is provided, or when the argument is undefined.

// simple syntax, normal function
// function greet(name = "Guest") {
//     console.log("Welcome " + name);
// }
// greet("Hassan");
// greet();

// used arrow function
// const greet = (name = "Guest") => {
//     console.log(`Welcome ${name}`);
// };
// greet("Ali");
// greet();

// now we used multiple default parameters

// function createUser(name = "Guest", role = "Student") {
//     console.log(`Name: ${name}`);
//     console.log(`Role: ${role}`);
// }
// createUser("Hassan", "Teacher");
// createUser("Ali");
// createUser();

// Calculation:
// function calculatePrice(price, tax = 10) {
//     let total = price + (price * tax / 100);
//     return total;
// }

// console.log(calculatePrice(1000));
// console.log(calculatePrice(1000, 15));   

function greet(name = "Guest") {
    console.log(name);
}

greet();
greet(undefined);
greet(null);
greet("");

// The default parameter value is applied when an argument is omitted or explicitly passed as undefined. However, it is not applied when the argument is null, 0, false, or an empty string ("").
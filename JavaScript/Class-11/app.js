// let students = ["Hassan", "Bilal"];
// students.push("Rizwan");
// console.log(students);
// students.pop();
// console.log(students);
// students.unshift("Naeem")
// console.log(students);
// students.shift();
// console.log(students);

// let fruits = ["apple", "banana", "grapes", "peach", "pineapple"];
// console.log(fruits);

// fruits.splice(2, 3, "kiwi", "orange");
// console.log(fruits);
// let newArray = fruits.slice(1, 5);
// console.log(newArray);

// New Topic for loop!!

// Syxtax of for loop
// for (let i = 0; i < array.length; i++) {

// };

// i = 0;  // starting point
// i < array.length  // condition
// i++ // iteration

// for(let i = 0; i < 100; i++){
//     console.log(i);
// };

// let arr = ["Hello", "world", "Pakistan", "Zindabad"];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

let cleanestCities = [
  "Cheyenne",
  "Santa Fe",
  "Tucson",
  "Great Falls",
  "Honolulu",
];
let cityToCheck = "Honolulu";

// if (cityToCheck === cleanestCities[0]) {
//   alert("Cheyenne one of the cleanest cities");
// } else if (cityToCheck === cleanestCities[1]) {
//   alert("Santa Fe one of the cleanest cities");
// } else if (cityToCheck === cleanestCities[2]) {
//   alert("Tucson one of the cleanest cities");
// } else if (cityToCheck === cleanestCities[3]) {
//   alert("Great Falls one of the cleanest cities");
// } else if (cityToCheck === cleanestCities[4]) {
//   alert("Honolulu one of the cleanest cities");
// } else{
//     alert("Her city isn't on the list")
// }

for (let i = 0; i < cleanestCities.length; i++) {
  if (cityToCheck === cleanestCities[i]) {
    alert("Honolulu is one of the dirty cities");
  }
}
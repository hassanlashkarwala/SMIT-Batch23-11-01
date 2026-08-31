// =========================
// Chapter 31, 32, 33 & 34
// =========================

// let currentDate = new Date();
// console.log(currentDate);
// console.log(typeof currentDate);
// currentDate = currentDate.toString();
// console.log(typeof currentDate);
// Acha har student's ka output system/time ke according different hoga.

//* Simple words:
// new Date() JavaScript ko kehta hai: "Mujhe abhi ki date aur time ka Date object do."
// Yahan Date JavaScript ka built-in object hai.

// Date() method kyu hai javascript me? aur kyu iski need hoti hai?
// Agar hum website bana rahe hain jahan user order karta hai, humein order ki date aur time save/display karna hoga. Isi liye JavaScript mein Date important hai.

// Now i need current year only, no need whole date!
// let currentDate = new Date();
// console.log(typeof currentDate);
// console.log(currentDate.getFullYear());
// console.log(typeof currentDate.getFullYear()); // iski data type?

// Now i need current month only, no need whole date!
// let currentDate = new Date();
// console.log(currentDate.getMonth());
// console.log(typeof currentDate.getMonth());
// JavaScript month 0 se start karti hai.
// So: 0 = January, 1 = February ..., 7 = August 

// Now i need current hour only!
// let currentDate = new Date();
// console.log(currentDate.getHours());

// Now i need current Minutes only!
// let currentDate = new Date();
// console.log(currentDate.getMinutes());

// Now i need current Seconds only!
// let currentDate = new Date();
// console.log(currentDate.getSeconds());

// Now i specified the whole Date!
// Structure:
// new Date(year, month, date, hours, minutes, seconds)

// let specifiedDate = new Date(2026, 7, 15, 10, 30, 20);
// console.log(specifiedDate);

// new Date()? kiya return kr rahi hai? meri current date/time
// and jab me. specified date ka use kr lo means khud sab put kro Date(2026, 8, ....) so ye mujhe ye meri wo date/ time return kre ga ju mene isko di hai ok ab ye system ke mutabiq run nh hoga

// Example :
// let today = new Date();
// let day = today.getDate();
// let month = today.getMonth() + 1;
// let year = today.getFullYear();
// console.log(month + "/" + day + "/" + year);

// ⚠️ Last 3 more important thing!
// 1. new Date() current date/time deta hai
// 2. getMonth() 0 to 11 deta hai
// January = 0, December = 11.
// 3. getDate() ≠ getDay()
// getDate() -> month ki date
// getDay() ->  week ka day

// ==================================================
// Chapter 34: Changing elements of a date and time
// ==================================================
// You can change individual elements of a Date object. Here's a summary

// setFullYear(): setFullYear sets the year of an existing Date object without changing any other element.
// setMonth(): setMonth sets the month of an existing Date object without changing any other element.
// setDate(): setDate sets the day of the month of an existing Date object without changing any other element.
// setHours(): setHours sets the hours of an existing Date object without changing any other element.
// setMinutes(): setMinutes sets the minutes of an existing Date object without changing any other element.
// setSeconds(): setSeconds sets the seconds of an existing Date object without changing any other element.
// setMilliseconds(): setMilliseconds sets the milliseconds of an existing Date object without changing any other element.

// let today = new Date();
// // console.log(today);
// console.log(today.getFullYear());
// today.setFullYear(2030);
// console.log(today.getFullYear());

let today = new Date();
today.setFullYear(2040);
let year = today.getFullYear();
console.log(year);
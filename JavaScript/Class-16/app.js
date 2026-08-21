//=====================
//  Math.round
//===================== 
// Math.round kiya karta hai 
// Decimal .5 ya usse zyada ho upar number tw wo aagey wale number pe round kr dega.
// .5 se kam ho neeche tw wo neche wale number pe round kr de ga.

// let marks = 89.6;
// let nearestInteger = Math.round(marks);
// console.log(nearestInteger);

// console.log(Math.round(10.2));
// console.log(Math.round(99.5));  // 99 // 100
// console.log(Math.round(86.7)); // 87

//===================== 
// Math.floor
//===================== 
// Math.floor() hamesha number ko neeche wale integer ki taraf le jata hai.

// let score = 5.9;
// let lastInteger = Math.floor(score);
// console.log(lastInteger);

    // console.log(Math.floor(2.65)); //3 ya //2
    // console.log(Math.floor(8.4));

//===================== 
// Math.ceil()
//===================== 
// Ye number ko next integer ki taraf upar le jata hai.

// let avgScore = 99.4;
// let nextInteger = Math.ceil(avgScore);
// console.log(nextInteger);

// console.log(Math.ceil(2.42));
// console.log(Math.ceil(7.0));
// Even though .1 bohot chota hai but ceil() phir bhi upar le jayega number ko.

// Mixed floor, round, ceil!
    // console.log(Math.floor(67.8));  //68  //67
    // console.log(Math.round(7.4));  // 7
    // console.log(Math.ceil(82.1));  // 83

//======================
// Math.random()
//======================
// "Agar main chahta hoon JavaScript mere liye randomly koi number generate kare?"

// let generateNumber = Math.random();
// console.log(generateNumber);

// Math.random() 0 inclusive se 1 exclusive tak number deta hai.
// 0 se 1 tak ki value deta hai apko.

//==================================
// Random integer kaise banayen?
//==================================
// Ab suppose tum chahte ho:
// Random number between 0 and 9
// Tww phr kiya krna hoga batai?

// let randomNumber = Math.floor(Math.random() * 10);
// console.log(randomNumber);

// 1 se 10 tak random number chahiye! upper wale question ke output me 9 tak araha hai!

// let randomNumber = Math.floor(Math.random() * 10) + 1;
// console.log(randomNumber);

let numberGoToHundred = Math.floor(Math.random() * 100) + 1;
console.log(numberGoToHundred);

// "Dice mein numbers 1 se 6 tak number hote hain. JavaScript se random dice number generate karna ho?"
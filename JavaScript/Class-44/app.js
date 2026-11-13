// URL ka full form hai Uniform Resource Locator.
// Simple words mein: URL kisi webpage ya resource ka address hota hai.
// ex:
// https://www.google.com
// https://www.youtube.com
// https://www.example.com/about

// How i get current URL?

// let currentURL = window.location.href;
// let currentURL = location.href;
// console.log(currentURL);

// let currentURL = window.location.href;
// let updateURL = "https://www.youtube.com/";
// console.log(updateURL);

// Explanation:
// window browser ki global window object hai.
// location browser ke current location/URL ki information provide karta hai.
// href complete URL ko represent karta hai.

// Part
// https:                                  Protocol
// www.example.com                         Host/domain
// /about                                  Path
// ?name=Ali                               Query String
// #profile                                Hash/fragment

// const newUrl = "https://www.youtube.com";
// window.location.href = newUrl;
// console.log(newUrl);

// let url = "https://www.google.com";
// location.assign(url);

// Ye bhi browser ko given URL par navigate karwata hai. Iska behavior location.href = URL jaisa hai.
// Important: Browser history mein previous page generally retain hota hai, isliye Back button se previous page par ja sakte hain.


// let url = "https://www.google.com";
// location.replace(url);
// Purpose: Current page ko replace karke kisi doosre URL par redirect karna.
// Is method mein browser current page ko history entry ke taur par preserve nahi karta. Iski jagah new URL aa jata hai.

// function assign() {
//     window.location.assign("https://www.youtube.com/")    
// }

function replace() {
    window.location.replace("https://www.google.com/")
}

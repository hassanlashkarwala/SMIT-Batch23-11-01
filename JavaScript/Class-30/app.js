// ===========================
// Chapter 53: Swapping Images
// ===========================

// function swapPic() {
//     document.getElementById("before").src = "images/after.jpeg";
// }
// ye function ju hai fixed hai!
// Ye function sirf ek particular image aur ek particular replacement image ke liye hai.
// Html me mere pass 3 images hen...
// example: 
// <img id="pic1">
// <img id="pic2">
// <img id="pic3"> 
// toh kya main 3 alag functions banaunga?

// balke function ko ab me kr doga general-purpose
// User parameters or arguments

function swapPic(id, newImage) {
    document.getElementById(id).src = newImage;
}



// =================
// Chapter 54
// =================

// function swapPic(imageId, newImage) {
//   let image = document.getElementById(imageId);
//   image.src = newImage;
// }

// function enLargeButton() {
//     let button = document.getElementById("btn");
//     button.className = "newclass";
// }
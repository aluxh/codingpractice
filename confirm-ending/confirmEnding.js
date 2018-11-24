/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {
    str = str.substring(str.length - target.length, str.length);
    if (str === target) {
        return true;
    } else {
        return false;
    }
}

// function confirmEnding(str, target) {
//     console.log(-target.length);
//     str = str.slice(-target.length);
//     if (str === target) {
//         return true;
//     } else {
//         return false;
//     }
// }

console.log(confirmEnding("Bastian", "n"));                         // return true
console.log(confirmEnding("Congratulation", "on"));                 // return true
console.log(confirmEnding("Connor", "n"));                          // return false
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")); // return false
console.log(confirmEnding("He has to give me a new name", "name")); // return true
console.log(confirmEnding("Open sesame", "same"));                  // return true
console.log(confirmEnding("Open sesame", "pen"));                   // return false
console.log(confirmEnding("Open sesame", "game"));                  // return false
console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")); // return false
console.log(confirmEnding("Abstraction", "action"));                // return true
/*
Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    let regex = /(^[A-Z]+[a-z]*)|([A-Z]*[a-z]*)/g;  // Although I got it right, it is difficult to maintain. Solving the wrong problem.

    return str.match(regex).filter((el) => el !== "").join("-").toLowerCase();
}
  
function spinalCases(str) {
// Answer from FreeCodeCamp by breaking the problem into smaller tasks to fix. I was trying to fix one big problem at one go.
    let regex = /\s+|_+/g;      // Create a variable 

    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');     // Replace low-upper case to low-space-upper case. This will find "thisIs" to "this Is"
    return str.replace(regex, "-").toLowerCase();     // Now replace all the spaces and underscores to "hyphens"
}

function spinalCase1(str) {
    // Advancd answer from FreeCodeCamp
    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}

// Tests
console.log(spinalCase("This Is Spinal Tap"));  // should return "this-is-spinal-tap".
console.log(spinalCase("thisIsSpinalTap"));  // should return "this-is-spinal-tap".
console.log(spinalCase("The_Andy_Griffith_Show"));  // should return "the-andy-griffith-show".
console.log(spinalCase("Teletubbies say Eh-oh"));  // should return "teletubbies-say-eh-oh".
console.log(spinalCase("AllThe-small Things"));  // should return "all-the-small-things".

console.log(spinalCases("This Is Spinal Tap"));  // should return "this-is-spinal-tap".
console.log(spinalCases("thisIsSpinalTap"));  // should return "this-is-spinal-tap".
console.log(spinalCases("The_Andy_Griffith_Show"));  // should return "the-andy-griffith-show".
console.log(spinalCases("Teletubbies say Eh-oh"));  // should return "teletubbies-say-eh-oh".
console.log(spinalCases("AllThe-small Things"));  // should return "all-the-small-things".

console.log(spinalCase1("thisIsSpinalTap"));  // should return "this-is-spinal-tap".
console.log(spinalCase1("This Is Spinal Tap"));  // should return "this-is-spinal-tap".
console.log(spinalCase1("The_Andy_Griffith_Show"));  // should return "the-andy-griffith-show".
console.log(spinalCase1("Teletubbies say Eh-oh"));  // should return "teletubbies-say-eh-oh".
console.log(spinalCase1("AllThe-small Things"));  // should return "all-the-small-things".
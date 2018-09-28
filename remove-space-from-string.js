/*
Sololearn - Code Challenge - Remove Spaces from a String
---------------------------------------------------------
Given a string as input, output it without spaces.
For example:
    * string = "ab c  d e fgh i  j kl mn  opqr  stuvwxyz"
    * result = "abcdefghijklmnopqrstuvwxyz"
*/
const removeSpaces = (text) => {
    let output = "";
    for (let i of text) {
        if (i == " ") continue;
        output += i;
    }
    return output;
}
module.exports = removeSpaces;

// let input = "ab c  d e fgh i  j kl mn  opqr  stuvwxyz"
// console.log(removeSpaces(input));
// console.log(input.replace(/\s/g, ""));

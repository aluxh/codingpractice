/*
Remove Spaces from a String</title>

Given a string as input, output it without spaces.
For example:
    * string = "ab c  d e fgh i  j kl mn  opqr  stuvwxyz"
    * result = "abcdefghijklmnopqrstuvwxyz"
*/

let input = "ab c  d e fgh i  j kl mn  opqr  stuvwxyz";

const removeSpaces = (text) => {
    let output = "";
    for (let i of text) {
        if (i != " ") output += i;
    }
    return output;
}

console.log(removeSpaces(input));
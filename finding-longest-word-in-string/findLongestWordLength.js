/**
 * 1. Split the string to an array
 * 2. Using reduce function to return the longest string
 * 3. Return the length of longest string
 */

function findLongestWordLength(str) {
    str = str.split(" ").reduce((x, y) => (x.length > y.length) ? x : y);
/*
    str = str.split(" ");
    str = str.reduce((x, y) => {
        if (x.length > y.length) {
            return x;
        } else {
            return y;
        }
    });
*/
    return str.length;
}
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // 6
console.log(findLongestWordLength("May the force be with you")); // 5
console.log(findLongestWordLength("Google do a barrel roll")); // 6
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow")); // 8
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); // 19
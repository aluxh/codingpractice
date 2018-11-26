/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

function mutation(arr) {
    const toMatch = arr[1].toLowerCase().split("");
    for (let i of toMatch) {
        if (arr[0].toLowerCase().match(i) === null) {
            return false;
        }
    }
    return true;
}

function mutation1(arr) {
    return arr[1].toLowerCase()
                    .split("")
                    .every((letter) => arr[0].toLowerCase().match(letter) != null);
}

// Test
console.log(mutation(["hello", "hey"])); // should return false.
console.log(mutation(["hello", "Hello"])); // should return true.
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // should return true.
console.log(mutation(["Mary", "Army"])); // should return true.
console.log(mutation(["Mary", "Aarmy"])); // should return true.
console.log(mutation(["Alien", "line"])); // should return true.
console.log(mutation(["floor", "for"])); // should return true.
console.log(mutation(["hello", "neo"])); // should return false.
console.log(mutation(["voodoo", "no"])); // should return false.

console.log("Test 2\n")
console.log(mutation1(["hello", "hey"])); // should return false.
console.log(mutation1(["hello", "Hello"])); // should return true.
console.log(mutation1(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // should return true.
console.log(mutation1(["Mary", "Army"])); // should return true.
console.log(mutation1(["Mary", "Aarmy"])); // should return true.
console.log(mutation1(["Alien", "line"])); // should return true.
console.log(mutation1(["floor", "for"])); // should return true.
console.log(mutation1(["hello", "neo"])); // should return false.
console.log(mutation1(["voodoo", "no"])); // should return false.
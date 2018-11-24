// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). 
// If no element passes the test, return undefined.

// This is useful to search through arrays and return data that you need, and should develop further.

function findElement(arr, func) {
    for (let i of arr) {
        if (func(i)) {
            return i;
        }
    }
    return undefined;
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));  // return 8
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })) // return undefined
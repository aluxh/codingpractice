/*
You are given two arrays and an index.
Use the array methods slice and splice to copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
   return arr2.slice(0, n).concat(arr1, arr2.slice(n));
}

// function frankenSplice(arr1, arr2, n) {
//     arr2.splice(1, 0, arr1);
//     return [].concat(...arr2);
// }


console.log(frankenSplice([1, 2, 3], [4, 5], 1)); // should return [4, 1, 2, 3, 5].
console.log(frankenSplice([1, 2], ["a", "b"], 1)); // should return ["a", 1, 2, "b"].
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)); // should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
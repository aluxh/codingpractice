/*
The slice method returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive). If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. The slice method does not mutate the original array, but returns a new one.

Here's an example:

var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);
// Sets newArray to ["Dog", "Tiger"]
*/

function sliceArray(anim, beginSlice, endSlice) {
    // Add your code below this line
    let newArray = anim.slice(beginSlice, endSlice);
    return newArray;
    
    // Add your code above this line
  }
  var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  console.log(sliceArray(inputAnim, 1, 3));


console.log(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)); // should return ["Dog", "Tiger"].
console.log(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)); // should return ["Cat"].
console.log(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)); // should return ["Dog", "Tiger", "Zebra"]
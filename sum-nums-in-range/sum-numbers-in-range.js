/*
Intermediate Algorithm Scripting: Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {
    let newArr = [];
    arr = arr.sort((a,b) => a - b);
        for (let i = arr[0]; i <= arr[arr.length-1]; i++) {
        newArr.push(i);
    }  
    return newArr.reduce((x,y) => x + y);
}


function sumAlls(arr) {
    let sum = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        sum += i;
    }
    return sum;
}


  
// Test

console.log(sumAll([1, 4])); // should return a number.
console.log(sumAll([1, 4])); // should return 10.
console.log(sumAll([4, 1])); // should return 10.
console.log(sumAll([5, 10])); // should return 45.
console.log(sumAll([10, 5])); // should return 45.

console.log(sumAlls([1, 4])); // should return a number.
console.log(sumAlls([1, 4])); // should return 10.
console.log(sumAlls([4, 1])); // should return 10.
console.log(sumAlls([5, 10])); // should return 45.
console.log(sumAlls([10, 5])); // should return 45.
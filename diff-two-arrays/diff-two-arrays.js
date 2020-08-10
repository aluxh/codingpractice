/*
Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.

*/

function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    newArr = arr1.filter(x => arr2.indexOf(x) === -1)
                    .concat(arr2.filter(y => arr1.indexOf(y) === -1));

    return newArr;
}

function diffArray2(arr1, arr2) {
    var newArr = [];
    return arr1.filter(x => arr2.indexOf(x) === -1)
}

console.log(diffArray2([1, 2, 3, 4, 5], [1, 2, 3, 5]));
console.log([1,2,3,4].indexOf(5));

/*
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // should return an array.
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // should return ["pink wool"].
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // should return an array with one item.
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // should return ["diorite", "pink wool"].
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // should return an array with two items.
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])); // should return [].
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])); // should return an empty array.
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // should return [4].
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // should return an array with one item.
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])); // should return ["piglet", 4].
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])); // should return an array with two items.
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"])); // should return ["snuffleupagus", "cookie monster", "elmo"].
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"])); // should return an array with three items.
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"])); // should return [1, "calf", 3, "piglet", 7, "filly"].
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"])); // should return an array with six items.
*/
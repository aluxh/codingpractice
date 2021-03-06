// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    let newArr = [];
    let y = [];
    let counter = 0;
    for (let i of arr) {
        if (counter <= size) {
            y.push(i);
            counter++;
            if (counter >= size) {
                counter = 0;
                newArr.push(y);
                y =[];
            }
        }
    }

    if (y.length > 0) {
        newArr.push(y);
    }
    return newArr;
}

// recursive function. And, if length is less than size, just return arr.
function chunkArrayInGroups1(arr, size) {
    if (arr.length <= size) {
        return [arr];
    } else {
        return [arr.slice(0, size)].concat(chunkArrayInGroups1(arr.slice(size), size));
    }
}


console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // should return [["a", "b"], ["c", "d"]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); // should return [[0, 1, 2], [3, 4, 5]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); // should return [[0, 1], [2, 3], [4, 5]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); // should return [[0, 1, 2, 3], [4, 5]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); // should return [[0, 1, 2], [3, 4, 5], [6]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); // should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); // should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].


console.log(chunkArrayInGroups1([0, 1, 2, 3, 4, 5, 6, 7], 3));
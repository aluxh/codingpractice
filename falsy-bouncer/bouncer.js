// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
    arr1 = arr.map(x => x ? true : false );
    console.log(arr1);
    for (let i = 0; i <= arr1.length; i++) {
        if (arr1[i] === false) {
            arr.splice(i, 1);
        }
    }
    return arr;
}


console.log(bouncer([7, "ate", "", false, 9])); // should return [7, "ate", 9].
console.log(bouncer(["a", "b", "c"])); // should return ["a", "b", "c"].
console.log(bouncer([false, null, 0, NaN, undefined, ""])); // should return [].
console.log(bouncer([1, null, NaN, 2, undefined])); // should return [1, 2].
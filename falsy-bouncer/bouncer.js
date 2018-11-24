// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {    
    let output = [];
    arr.map(x => x ? output.push(x) : false);
    return output;
}

function bouncer2(arr) {
    return arr.filter(Boolean);
}

// Test 
console.log(bouncer([7, "ate", "", false, 9])); // should return [7, "ate", 9].
console.log(bouncer(["a", "b", "c"])); // should return ["a", "b", "c"].
console.log(bouncer([false, null, 0, NaN, undefined, ""])); // should return [].
console.log(bouncer([1, null, NaN, 2, undefined])); // should return [1, 2].

//Test2
console.log(bouncer2([7, "ate", "", false, 9])); // should return [7, "ate", 9].
console.log(bouncer2(["a", "b", "c"])); // should return ["a", "b", "c"].
console.log(bouncer2([false, null, 0, NaN, undefined, ""])); // should return [].
console.log(bouncer2([1, null, NaN, 2, undefined])); // should return [1, 2].
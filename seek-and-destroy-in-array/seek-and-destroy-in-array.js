/*
Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.
*/



function destroyer(arr) {
    // Remove all the values
    
    return arr;
}
  
destroyer([1, 2, 3, 1, 2, 3], 2, 3);


/*
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // should return [1, 1].
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // should return [1, 5, 1].
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); // should return [1].
console.log(destroyer([2, 3, 2, 3], 2, 3)); // should return [].
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // should return ["hamburger"].
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")); // should return [12,92,65].
*/
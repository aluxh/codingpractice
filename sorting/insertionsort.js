let input = [3,1,5,2,9,8,6,5,4,5,6]; //6 times
//let input = [1,2,3,4,5,6,7,8,9]; // 1 times
//let input = [1,3,2,4,5,6,7,8,9]; // 2 times
console.log(`Your input is ${input}`);
let counter = 0;

for (let i = 1; i < input.length; i++) {
    for (let j = i; j > 0 && (input[j] < input[j-1]); j--) {
    //if the next number in the list is bigger than the last number, it should just stay as is in position. Then take the next number.
        if (input[j] < input[j-1]) {
            [input[j], input[j-1]] = [input[j-1], input[j]];
        }
        counter++;
    }
}

console.log(`output is ${input}`);
console.log(`counter is ${counter}`);
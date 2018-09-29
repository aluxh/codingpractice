const bubbleSort = require('./bubblesort');

const input = [3,1,5,2,9,8,6,5,4,5,6]; //6 times
console.log(`Your input: ${input}`);
const [x, y] = bubbleSort(input);
console.log(`Bubble Sorted output: ${x}`);
console.log(`Number of loops bubble sort took: ${y}`);
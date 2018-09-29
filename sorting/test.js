const bubbleSort = require('./bubblesort');
const selectionSort = require('./selectionsort');
const insertionSort = require('./insertionsort')

const input = [3,1,5,2,9,8,6,5,4,5,6]; //6 times
console.log(`Test input: ${input}\n`);

const [bx, by] = bubbleSort(input);
console.log(`Bubble Sorted output: ${bx}`);
console.log(`Number of loops bubble sort took: ${by}\n`);

const [sx, sy] = selectionSort(input);
console.log(`Selection Sorted output: ${sx}`);
console.log(`Number of loops selection sort took: ${sy}\n`);

const [ix, iy] = insertionSort(input);
console.log(`Insertion Sorted output: ${ix}`);
console.log(`Number of loops insertion sort took: ${iy}\n`);
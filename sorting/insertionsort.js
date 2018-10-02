function insertionSort(input) {
    let counter = 0;
    for (let i = 1; i < input.length; i++) {
        // console.log(input);
        for (let j = i; j > 0 && (input[j] < input[j-1]); j--) {
        /* If the next number in the list is bigger than the previous number, 
           it should just stay as is in position. Then take the next number. */
            if (input[j] < input[j-1]) {
                [input[j], input[j-1]] = [input[j-1], input[j]];
            }            
        }
        counter++;
    }
    return [input, counter];
}
module.exports = insertionSort;

// const input = [3,1,5,2,9,8,6,5,4,5,6]; //6 times
// const input = [1,2,3,4,5,6,7,8,9]; // 1 times
// const input = [1,3,2,4,5,6,7,8,9]; // 2 times
// console.log(`Test input: ${input}\n`);

// const [ix, iy] = insertionSort(input);
// console.log(`Insertion Sorted output: ${ix}`);
// console.log(`Number of loops insertion sort took: ${iy}\n`);
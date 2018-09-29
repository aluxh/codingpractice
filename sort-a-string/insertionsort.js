function insertionSort(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i; j > 0 && (input[j] < input[j-1]); j--) {
        /* If the next number in the list is bigger than the previous number, 
           it should just stay as is in position. Then take the next number. */
            if (input[j] < input[j-1]) {
                [input[j], input[j-1]] = [input[j-1], input[j]];
            }            
        }
    }
    return input;
}
module.exports = insertionSort;
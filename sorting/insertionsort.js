function insertionSort(input) {
    let counter = 0;
    for (let i = 1; i < input.length; i++) {
        //console.log(input);
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
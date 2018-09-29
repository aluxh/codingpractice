function selectionSort(input) {
    let counter = 0;
    for (let i = 0; i < input.length; i++) {
        //console.log(input); // Display the sorting 
        let min = i; // Take 1 number (index) at a time to compare with the rest.
        for (let j = min+1; j < input.length; j++) { //take the number after it to compare.
            if (input[j] < input[min]) { //Take the number and compare with the rest of number. Swap when it is smaller.
                [input[min], input[j]] = [input[j], input[min]];
            }         
        }
        counter++;
    }
    return [input, counter];
}

module.exports = selectionSort;
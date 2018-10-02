function selectionSort(input) {
    let counter = 0;
    for (let i = 0; i < input.length; i++) {
        //console.log(input); // Display the sorting 
        let min_idx = i; // Take first number (index) at a time to compare with the rest.
        for (let j = min_idx+1; j < input.length; j++) { //take the number after it to compare.
            if (input[j] < input[min_idx]) { //Take the number and compare with the next number. Swap the index when it is smaller.
                min_idx = j;
            }         
        }
        [input[min_idx], input[i]] = [input[i], input[min_idx]];
        counter++;
    }
    return [input, counter];
}

module.exports = selectionSort;
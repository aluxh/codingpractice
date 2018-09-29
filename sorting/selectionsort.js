function selectionSort(input) {
    let counter = 0;
    for (let i = 0; i < input.length; i++) {
        //console.log(input); // Display the sorting 
        let pivot = i; // Take 1 number (index) at a time to compare with the rest.
        for (let j = pivot+1; j < input.length; j++) { //take the number after it to compare.
            if (input[j] < input[pivot]) { //Take the number and compare with the rest of number. Swap when it is smaller.
                let t = input[pivot];
                input[pivot] = input[j];
                input[j] = t;                
            }         
        }
        counter++;
    }
    return [input, counter];
}

module.exports = selectionSort;
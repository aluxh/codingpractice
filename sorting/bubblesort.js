function bubbleSort(input = []) {
	let counter = 0; // Counter
	do { // Go through at least one round to check if swapping is necessary
		var swapped = false; // Assuming no swap is necessary
		for (let i = 0; i < input.length; i++) {
			if (input[i] > input[i+1]) { // Comparing current number with next;
				// swap values using destructuring method taught in https://www.sololearn.com/learn/519/?ref=app
				[input[i], input[i+1]] = [input[i+1], input[i]]
				swapped = true; // Log if swap has happened
			}
		}
		counter++; // Increment counter
	} while (swapped); // Swap happened, repeat. Else, stopped since it's sorted.
	return [input, counter];
}
module.exports = bubbleSort;

/*
const input = [3,1,5,2,9,8,6,5,4,5,6]; //6 times
//const input = [1,2,3,4,5,6,7,8,9]; // 1 times
//const input = [1,3,2,4,5,6,7,8,9]; // 2 times
console.log(`Your input is ${input}`);
const [x, y] = bubbleSort(input);
console.log(`Sorted output is ${x}`);
console.log(`Number of loops it took: ${y}`);
*/
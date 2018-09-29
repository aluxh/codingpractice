let input = [3,1,5,2,9,8,6,5,4,5,6]; //6 times
//let input = [1,2,3,4,5,6,7,8,9]; // 1 times
//let input = [1,3,2,4,5,6,7,8,9]; // 2 times

console.log(`Your input is ${input}`);
var j = 0; //counter

do { //Go through at least one round to check if swapping is necessary
	var swapped = false; //Assuming no swap is necessary
	for (let i = 0; i < input.length; i++) {
		if (input[i] > input[i+1]) {
			let t = input[i];
			input[i] = input[i+1];
			input[i+1] = t;
			swapped = true; //Log if swap has happened
		}
	}
	j++; //increment counter
} while (swapped); //Swap happens, repeat. Else, stopped since it's sorted.

console.log(`Output: ${input}`);
console.log(`Number of loops it took: ${j}`);

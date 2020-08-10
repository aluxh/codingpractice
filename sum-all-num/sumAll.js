// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

// The lowest number will not always come first.

function sumAll(arr) {
        arr = arr.sort((a, b) => a - b);

        let newArr = []
        for(let i = arr[0]; i <= arr[1]; i++) {
                newArr.push(i);
        }

        return newArr.reduce((acc, x) => acc + x, 0);
}

function sumAlls(arr) {
    let sum = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        sum += i;
    }
    return sum;
}


module.exports = { sumAll, sumAlls };

// console.log(sumAll([1,4]));

const insertionSort = require('./insertionsort');

function text2Ascii(text) {
    /**
     * Convert Characters to Ascii code
     * (1) split the string as array of characters; 
     * (2) Then, map the chars to ascii code 
     * (3) filter off whitespace which is 32 in ascii table
     */
    return text.split("").map((x) => x.charCodeAt(0)).filter((y) => y != 32);
}
function ascii2Text(arr) {
    /**
     * Convert Ascii code back to Character
     * (1) Take the chars in the array and map them to text from ascii table
     * (2) Join the items in array to form a string.
     */
    return arr.map((num) => String.fromCharCode(num)).join("");
}
function filterAscii(arr, x, y) {
    /**
     * Filter function to take in an array of ascii code, 
     * and return an array of ascii code with the specified range
     * in parameters x and y
     */
    return arr.filter((num) => num >= x && num <= y);
}
function alphaSort(arr) {
    const compareFunction = (a, b) => {
        // helper function to compare 2 alphabets
        inputA = text2Ascii(a.toUpperCase());
        inputB = text2Ascii(b.toUpperCase());
        return (inputB < inputA) ? true : false;
    }
    for (let i = 0; i < arr.length; i++) {
        let min = i;         
        for (let j = min+1; j < arr.length; j++) { 
            if (compareFunction(arr[min], arr[j])) { 
            //Take the first number and compare with the rest of numbers. Swap when it is smaller.
                [arr[min], arr[j]] = [arr[j], arr[min]];
            }
        }
    }
    return arr;
}
function aSort(text) {
    let input = text2Ascii(text);
    
    //filter all digits and sort them.in order
    let digits = filterAscii(input, 48, 57 )
    digits = insertionSort(digits);
    digits = ascii2Text(digits);
    
    //filter all alphabets, including caps
    //convert them from ascii to alphabets
    //sort the alphabets and join them as strings
    let alpha = filterAscii(input, 65, 90).concat(filterAscii(input,97, 122));
    alpha = ascii2Text(alpha).split("");
    alpha = alphaSort(alpha);
    alpha = alpha.join("");
    
    //Filter all symbols and sort them in order
    let symbols = filterAscii(input,33,47).concat(
                    filterAscii(input,58,64)).concat(
                    filterAscii(input,91,96)).concat(
                    filterAscii(input,123,254));
    symbols = ascii2Text(symbols);
    
    //join the strings in right order
    return symbols + digits + alpha;
}
module.exports = aSort;
function reverseString(text) {
    let str = [];
    for (char of text) {
        str.unshift(char);
    }
    return str.join("");
}

console.log(reverseString("hello")+"\n"); // "olleh"
console.log(reverseString("Howdy")+"\n"); // "ydwoH"
console.log(reverseString("Greetings from Earth")+"\n"); // "htraE morf sgniteerG"


/**
 * FreeCodeCamp did it in one sentence. Using the Built-in functions - (1) string split (2) array reverse (3) array join
 * function reverseString(str) {
 *      str.split('').reverse().join('');
 * }
 */
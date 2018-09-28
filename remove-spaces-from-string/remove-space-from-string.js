const removeSpaces = (text) => {
    let output = "";
    for (let i of text) {
        if (i == " ") continue;
        output += i;
    }
    return output;
}
module.exports = removeSpaces;

// Another solution
// console.log(input.replace(/\s/g, ""));

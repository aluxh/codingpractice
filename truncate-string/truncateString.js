// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
    if (num < str.length) {
        return str.substring(0, num) + "...";
    } else {
        return str;
    }
}

// Test
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));                      // return "A-tisket..."
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));                    // return "Peter Piper..."
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));                      // return "A-tisket a-tasket A green and yellow basket"
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));                      // return "A-tisket a-tasket A green and yellow basket"
console.log(truncateString("A-", 1));                                                               // return "A..."
console.log(truncateString("Absolutely Longer", 2));                                                // return  "Ab..."
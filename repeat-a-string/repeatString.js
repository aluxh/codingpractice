// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
    if (num <= 0) return "";
    return str + repeatStringNumTimes(str, num - 1);
}

// Test
console.log(repeatStringNumTimes("*", 3));                      // return  "***"
console.log(repeatStringNumTimes("abc", 3));                      // return "abcabcabc"
console.log(repeatStringNumTimes("abc", 4));                      // return "abcabcabcabc"
console.log(repeatStringNumTimes("abc", 1));                      // return "abc"
console.log(repeatStringNumTimes("*", 8));                      // return "********"
console.log(repeatStringNumTimes("abc", -2));                      // return ""
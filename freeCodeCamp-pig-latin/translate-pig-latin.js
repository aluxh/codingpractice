/*
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {

    let vowels = ["a", "e", "i", "o", "u"];
    
    function isVowel(char) {
    // Helper function to check if the char is vowel.
        for (let i of vowels) {
            if (i == char) return true;
        }
        return false;
    }
  
    function hasVowel(text) {
    // Help function to check if a word contains vowel
        for (let i of text) {
            if (isVowel(i)) return true;
        }
        return false;
    }
  
    function vowelPos(text) {
    // Helper function to return the position of the first
    // vowel found in a word. If no vowel found, return 0
        for (let i of text) {
            if (isVowel(i)) {
                return text.indexOf(i);
            } 
        }
        return 0;
    }
  

    if (hasVowel(str) === false) return str + "ay";
  
    let index = vowelPos(str);
    if (index == 0) return str + "way";
    return str.substr(index) + str.substr(0, index) + "ay";
}

// Test

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));  // should return "aliforniacay".
console.log(translatePigLatin("paragraphs"));  // should return "aragraphspay".
console.log(translatePigLatin("glove"));  // should return "oveglay".
console.log(translatePigLatin("algorithm"));  // should return "algorithmway".
console.log(translatePigLatin("eight"));  // should return "eightway".
console.log(translatePigLatin("szy")); // should return "szyay"
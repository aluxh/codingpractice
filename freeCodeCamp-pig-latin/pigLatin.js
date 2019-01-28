/*
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    
    let index = str.split("")
                    .map(char => {
                        return vowels.indexOf(char);
                    }).findIndex(el => el >= 0);

    if (index < 0) {
        return str + "ay";
    } else if (index == 0) {
        return str + "way";
    } else {
        // return str.substring(index) + str.substring(0, index) + "ay";
        return str.slice(index) + str.slice(0, index) + "ay";
    }
}

module.exports = translatePigLatin;

// console.log(translatePigLatin("consonant"));
// console.log(translatePigLatin("szy"));
// console.log(translatePigLatin("california"));// should return "aliforniacay".
// console.log(translatePigLatin("paragraphs"));
// console.log(translatePigLatin("glass"));
// console.log(translatePigLatin("eight"));
// console.log(translatePigLatin("algorithm"));
/*
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let index;

    for (let i of str) {
        if (vowels.indexOf(i) !== -1) {
            index = str.indexOf(i);
            break;
        }
    }
    
    if (index === undefined) {
        return str + "ay";
    } else if ( index === 0) {
        return str + "way";
    } else {
        return str.slice(index) + str.slice(0, index) + "ay";
    }

}  

// Test

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));  // should return "aliforniacay".
console.log(translatePigLatin("paragraphs"));  // should return "aragraphspay".
console.log(translatePigLatin("glove"));  // should return "oveglay".
console.log(translatePigLatin("algorithm"));  // should return "algorithmway".
console.log(translatePigLatin("eight"));  // should return "eightway".
console.log(translatePigLatin("szy"));
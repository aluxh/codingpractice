function translatePigLatin(str) {
    
    let vowels = ["a", "e", "i", "o", "u"];

    let index = vowels.filter(x => {
        return str.indexOf(x) !== -1;
    })

    console.log(index);   



    return str;
}

module.exports = translatePigLatin;

translatePigLatin("consonant");

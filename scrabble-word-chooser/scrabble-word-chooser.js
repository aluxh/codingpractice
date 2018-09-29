#!/usr/bin/env node
const lib = {
    // points of each character
    e:1, a:1, i:1, o:1, n:1, r:1, t:1, l:1, s:1, u:1,
    d:2, g:2,
    b:3, c:3, m:3, p:3,
    f:4, h:4, v:4, w:4, y:4,
    k:5,
    j:8, x:8,
    q:10, z:10
}
function calcScore(text) {
    // Calculate the score of the text
    let score = 0;
    text = text.toLowerCase();
    for (let ch of text) {
        score += lib[ch];
    }
    return score;
}
function higScore(arr) {
    // Compare and return word with highest score
    let hScore = 0;
    let result;
    
    arr = arr.split(" ");  
    for (let item of arr) {
        if (calcScore(item) > hScore) {
            hScore = calcScore(item);
            result = item;
        }
    }
    return arr[arr.indexOf(result)];
}
function checkInput(text) {
    for (let i of text.split(" ")) {
        if (i.length > 10) {
            console.log(`${i} is too long`);
            return false;
        }
    }
    return true;
}

const [nodePath, scriptPath, input] = process.argv;
if (checkInput(input)) {
    console.log(`The word with highest points is ${higScore(input)}.`);
}

const assert = require('assert');
const myReplace = require('./myReplace');

it('case 1:', () => {
    assert.equal(myReplace("Let us go to the store", "store", "mall"), "Let us go to the mall");
});

it('case 2:', () => {
    assert.equal(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"), "A quick brown fox leaped over the lazy dog");
});

it('case 3:', () => {
    assert.equal(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"), "He is Sitting on the couch");
});

it('case 4:', () => {
    assert.equal(myReplace("This has a spellngi error", "spellngi", "spelling"), "This has a spelling error");
});

it('case 5:', () => {
    assert.equal(myReplace("His name is Tom", "Tom", "john"), "His name is John");
});

it('case 6:', () => {
    assert.equal(myReplace("Let us get back to more Coding", "Coding", "algorithms"), "Let us get back to more Algorithms");
});
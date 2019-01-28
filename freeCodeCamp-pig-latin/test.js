const assert = require('assert');
const translatePigLatin = require('./pigLatin');

it('case 1:', () => {
    assert.equal(translatePigLatin("california"), "aliforniacay");
});

it('case 2:', () => {
    assert.equal(translatePigLatin("paragraphs"), "aragraphspay");
});

it('case 3:', () => {
    assert.equal(translatePigLatin("glove"), "oveglay");
});

it('case 4:', () => {
    assert.equal(translatePigLatin("algorithm"), "algorithmway");
});

it('case 5:', () => {
    assert.equal(translatePigLatin("eight"), "eightway");
});

it('case 6:', () => {
    assert.equal(translatePigLatin("szy"), "szyay");
});
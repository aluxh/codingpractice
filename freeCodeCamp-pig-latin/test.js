const assert = require('assert');
const translatePigLatin = require('./pigLatin');

it('case 1:', () => {
    assert.equal(translatePigLatin("california"), "aliforniacay");
});
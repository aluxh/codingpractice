const assert = require('assert');
const pairelement = require('./pair-elements');

it('case 1:', () => {
    assert.equal(pairElement("ATCGA"), [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]);
});

it('case 2:', () => {
    assert.equal(pairElement("TTGAG"), [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]);
});

it('case 3:', () => {
    assert.equal(pairElement("CTCTA"), [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]);
});


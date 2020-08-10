const assert = require('assert');
const sumAll = require('./sumAll')

it('case 1:', () => {
        assert.equal(sumAll([1, 4]) , 10);
});

it('case 2:', () => {
        assert.equal(sumAll([1, 4]) , 10);
});

it('case 3:', () => {
        assert.equal(sumAll([4, 1]) , 10);
});

it('case 4:', () => {
        assert.equal(sumAll([5, 10]), 45);
});

it('case 5:', () => {
        assert.equal(sumAll([10, 5]), 45);
});
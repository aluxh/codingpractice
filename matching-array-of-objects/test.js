const assert = require('assert');
const whatIsInAName = require('./whatsinobject');

it('case 1:', () => {
    assert.deepEqual( whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }), 
    [{ first: "Tybalt", last: "Capulet" }]);
});

it("case 2:", () => {
    assert.deepEqual(
        whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }), 
        [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]
    );
});

it("case 3:", () => {
    assert.deepEqual(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }), 
    [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]);
});

it("case 4:", () => {
    assert.deepEqual(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }),
    [{ "apple": 1, "bat": 2, "cookie": 2 }]);
});

it("case 5:", () => {
    assert.deepEqual(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }),
    [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]);
});

it("case 6:", () => {
    assert.deepEqual(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}),
    []);
});
const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
  it("returns [2,3,4] for [1,2,3,4]", () => { 
    assert.deepEqual(tail([1,2,3,4]), [2,3,4])
  });
  it("returns 2 elements for [1,2,3]", () => {
    assert.deepEqual(tail([1,2,3]), [2,3])
  });
  it("returns [lighthouse, labs] for [hello, lighthouse, labs]", () => {
    assert.deepEqual(tail(['hello', 'lighthouse', 'labs']), ['lighthouse', 'labs'])
  })
})


// TEST CODE
//const result = tail(["Hello", "Lighthouse", "Labs"]);
//assertEqual(result.length, 2); // ensure we get back two elements
//assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
//assertEqual(result[1], "Labs");

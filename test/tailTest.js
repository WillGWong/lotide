const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
  assert.deepEqual(tail([1,2,3,4]), [2,3,4])
})

// TEST CODE
//const result = tail(["Hello", "Lighthouse", "Labs"]);
//assertEqual(result.length, 2); // ensure we get back two elements
//assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
//assertEqual(result[1], "Labs");

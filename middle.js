const eqArrays = function(firstArr, secondArr) {
  for(let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) {
      return false
    }
  }
    return true
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅Assertion passed: "${actual}" === "${expected}"`)
  } else {
    console.log(`🛑🛑🛑Assertion failed: "${actual}" !== "${expected}"`);
  }
}

const middle = function(array) {
  if (array.length < 2) {
    return []
  } else if (array.length % 2 !== 0) {
      let midIndex = Math.floor(array.length/2)
      return array[midIndex];
  } else {
      let evenArr = []
      let midOne = Math.floor((array.length-1)/2)
      let midTwo = midOne + 1
      evenArr.push(array[midOne])
      evenArr.push(array[midTwo])
      return evenArr
  }
}

assertArraysEqual(middle([1,2,3,4,5]),[3])
assertArraysEqual(middle([1,2,3,4,5,6]),[3,4])

const eqArrays = function(firstArr, secondArr) {
  for(i = 0; i < firstArr.length; i++) {
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

const without = function(source, itemsToRemove){
  for (i = 0; i < source.length; i++){
    for (j = 0; j < itemsToRemove.length; j++){
      if (itemsToRemove[j] === source[i]) {
        source.splice(i,1);
      }
    }
  }
return source
}

assertArraysEqual(without([1, 2, 3], [1]), [2,3])
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
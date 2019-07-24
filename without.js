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
  let newArr = []
  for (i = 0; i < source.length; i++){
    for (j = 0; j < itemsToRemove.length; j++){
      if (itemsToRemove[j] !== source[i]) {
        newArr.push(source[i]);
        break;
      }
    }
  }
return newArr
}

console.log(without([1, 2, 3], [1]))
console.log(without(["1", "2", "3"], [1, 2, "3"]))
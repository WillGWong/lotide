const eqArrays = function(firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) {
    return false;
  }
  for(i = 0; i < firstArr.length; i++) {
    if (firstArr[i] === secondArr[i] && !Array.isArray(firstArr[i])) {
      return true;
    } else if (firstArr[i] === secondArr[i] && Array.isArray(firstArr[i])) {
      return eqArrays(firstArr[i], secondArr[i]);
    } else { 
      return false;
    }
  }
}


module.exports = eqArrays
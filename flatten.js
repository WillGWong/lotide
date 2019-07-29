const flatten = function(outerArr) {
  let newArr = [];
  for (let i = 0; i < outerArr.length; i++) {
    if (Array.isArray(outerArr[i]) === true) {
      for (let j = 0; j < outerArr[i].length; j++) {
        newArr.push(outerArr[i][j]);
      }
    } else {
      newArr.push(outerArr[i]);
    }
  }
  return newArr;
};

module.exports = flatten

//assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);
const middle = function(array) {
  if (array.length < 2) {
    return []
  } else if (array.length % 2 !== 0) {
      let midIndex = Math.floor(array.length/2)
      return [array[midIndex]];
  } else {
      let evenArr = []
      let midOne = Math.floor((array.length-1)/2)
      let midTwo = midOne + 1
      evenArr.push(array[midOne])
      evenArr.push(array[midTwo])
      return evenArr
  }
}

module.exports = middle
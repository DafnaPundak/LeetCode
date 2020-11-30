/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let nArray = n.toString(2).split("");
  let counter = 0;
  for (i = 0; i < nArray.length; i++) {
    if (nArray[i] == 1) {
      counter++;
    }
  }
  return counter;
};

module.exports = hammingWeight;

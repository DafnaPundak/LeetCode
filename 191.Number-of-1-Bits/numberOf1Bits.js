/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let nArray = (""+n).split("");
  let count = 0;
  for (i = 0; i < nArray.length; i++) {
    if (nArray[i] == 1) {
      count++;
    }
  }
  return count;
};

module.exports = hammingWeight;

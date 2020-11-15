/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  for (let i = 0; i < s.length - 1; i++) {
    s.unshift(s.pop());
  }
  return s;
};

module.exports = reverseString;

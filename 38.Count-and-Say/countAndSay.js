/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let digit = "1";
  for (let i = 1; i < n; i++) {
    let digitArray = digit.split("");
    let count = 1;
    digit = "";
    for (j = 0; j < digitArray.length; j++) {
      if (digitArray[j] !== digitArray[j + 1]) {
        digit += count + digitArray[j];
      } else {
        count++;
      }
    }
  }
  return digit;
};

module.exports = countAndSay;

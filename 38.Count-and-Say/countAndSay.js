/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let say = "1";
  if ((n == 1)) {
    return say;
  } else {
    for (let i = 2; i <= n; i++) {
      let count = 1;
      return say.concat(count);
    }
  }
};

module.exports = countAndSay;

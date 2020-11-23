/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  let xArray = (x + "").split("");
  let newArray = [];
  for (let i = xArray.length - 1; i >= 0; i--) {
    newArray.push(xArray[i]);
  }

  return Number(newArray.join(""));
};

module.exports = reverse;

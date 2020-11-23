/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  let xArray = (x + "").split("");
  let newArray = [];

  if (x > 0) {
    for (let i = xArray.length - 1; i >= 0; i--) {
      newArray.push(xArray[i]);
    }
    return Number(newArray.join(""));
  } else if (x < 0) {
    for (let i = xArray.length - 1; i >= 1; i--) {
      newArray.push(xArray[i]);
    }
    return ~Number(newArray.join("")) + 1;
  } else {
    return 0;
  }
};

module.exports = reverse;

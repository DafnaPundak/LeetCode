/**
 * @param {number} x
 * @return {number}
 */

var reverseOld = function (x) {
  let xArray = (x + "").split("");
  let newArray = [];

  if (x > 0) {
    for (let i = xArray.length - 1; i >= 0; i--) {
      newArray.push(xArray[i]);
    }
    if (Number(newArray.join("")) > 2 ** 31 - 1) {
      return 0;
    } else {
      return Number(newArray.join(""));
    }
  } else if (x < 0 && x > -(2 ** 31)) {
    for (let i = xArray.length - 1; i >= 1; i--) {
      newArray.push(xArray[i]);
    }
    if (Number("-" + Number(newArray.join(""))) < -(2 ** 31)) {
      return 0;
    } else {
      return Number("-" + Number(newArray.join("")));
    }
  } else {
    return 0;
  }
};

var reverse = function (x) {
  let reversed = Number(Math.abs(x).toString().split("").reverse().join(""));
  if (x > 0 && reversed < 2 ** 31 - 1) {
    return reversed;
  } else if (x < 0 && Number("-" + reversed) > -(2 ** 31)) {
    return Number("-" + reversed);
  } else {
    return 0;
  }
};

module.exports = reverse;

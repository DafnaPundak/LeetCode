/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  let newArray = (x + "").split("");
  for (let i = newArray.length - 1; i > 0; i--) {
    let digitToPush = Number(newArray.splice(i, 1));
    newArray.unshift(digitToPush);
  }

  return Number(newArray.join(""));
};

module.exports = reverse;

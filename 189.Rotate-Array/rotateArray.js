// Given an array, rotate the array to the right by k steps, where k is non-negative.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// var rotate = function (nums, k) {
//   for (i = 1; i <= k; i++) {
//     nums.unshift(nums[nums.length - 1]);
//     nums.pop();
//   }
//   return nums;
// };

var rotate = function (nums, k) {
  while (k--) {
    nums.unshift(nums.pop());
  }
  return nums;
};

module.exports = rotate;

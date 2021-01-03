/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 1,排序
  // 2，验证2数和，动态规划
  nums.sort((a, b) => a - b);
  let arr = [];
  for (let k = 0; k < nums.length - 2; k++) {
    if (nums[k] > 0) {
      break;
    }
    if (k > 0 && nums[k] === nums[k - 1]) continue;
    let i = k + 1,
      j = nums.length - 1;
    while (i < j) {
      let sum = nums[k] + nums[i] + nums[j];
      if (sum < 0) {
        while (i < j && nums[i] === nums[++i]);
      } else if (sum > 0) {
        while (i < j && nums[j] === nums[--j]);
      } else {
        arr.push([nums[k], nums[i], nums[j]]);
        while (i < j && nums[i] === nums[++i]);
        while (i < j && nums[j] === nums[--j]);
      }
    }
  }
  return arr;
};

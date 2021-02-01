/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let len = nums.length;
  if (len < 3) return [];
  nums.sort((a, b) => a - b);
  if (nums[0] > 0 || nums[len - 1] < 0) return [];
  // 1,排序
  // 2，验证2数和，动态规划
  nums.sort((a, b) => a - b);
  let arr = [];
  for (let k = 0; k < len - 2; k++) {
    if (nums[k] > 0) {
      break;
    }
    if (k > 0 && nums[k] === nums[k - 1]) continue;
    let i = k + 1,
      j = len - 1;
    while (i < j) {
      let sum = nums[k] + nums[i] + nums[j];
      if (sum < 0) {
        while (i < j && nums[i] === nums[++i]);
        // while (i < j && nums[i] === nums[i + 1]) i++;
        // i++;
      } else if (sum > 0) {
        while (i < j && nums[j] === nums[--j]);
        // while (i < j && nums[j] === nums[j - 1]) j--;
        // j--;
      } else {
        arr.push([nums[k], nums[i], nums[j]]);
        while (i < j && nums[i] === nums[++i]);
        // while (i < j && nums[i] === nums[i + 1]) i++;
        // i++;
        while (i < j && nums[j] === nums[--j]);
        // while (i < j && nums[j] === nums[j - 1]) j--;
        // j--;
      }
    }
  }
  return arr;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let len = nums.length;
  if (len < 3) return [];

  let result = [];

  nums.sort((a, b) => a - b);

  for (let k = 0; k < len - 2; k++) {
    if (nums[k] > 0) break;

    if (k > 0 && nums[k] === nums[k - 1]) continue;

    let i = k + 1;
    let j = len - 1;

    while (i < j) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum > 0) {
        while (i < j && nums[j] === nums[--j]);
      } else if (sum < 0) {
        while (i < j && nums[i] === nums[++i]);
      } else {
        result.push([nums[k], nums[i], nums[j]]);
        while (i < j && nums[j] === nums[--j]);
        while (i < j && nums[i] === nums[++i]);
      }
    }
  }

  return result;
};

var threeSum = function (nums) {
  let result = [];
  let len = nums.length;
  if (len < 3) return result;

  nums.sort((a, b) => a - b);

  if (nums[0] > 0 || nums[len - 1] < 0) return result;

  for (let i = 0; i < len - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < len - 1; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      for (let k = len - 1; k > j; k--) {
        if (k < len - 1 && nums[k] === nums[k + 1]) continue;
        result.push([nums[i], nums[j], nums[k]]);
      }
    }
  }

  return result;
};

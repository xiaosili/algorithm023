/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let len = nums.length;
  if (len < 4) return [];
  if (len === 4) {
    if (nums[0] + nums[1] + nums[2] + nums[3] === target) return [nums];
    return [];
  }
  nums.sort((a, b) => a - b);
  let res = [];
  for (let a = 0; a < len - 3; a++) {
    if (nums[a] + nums[a + 1] + nums[a + 2] + nums[a + 3] > target) break;
    if (a > 0 && nums[a] === nums[a - 1]) continue;
    for (let b = a + 1; b < len - 2; b++) {
      //以下代码与三数之和一样的
      if (b > a + 1 && nums[b] === nums[b - 1]) continue;
      let i = b + 1;
      let j = len - 1;
      while (i < j) {
        let sum = nums[a] + nums[b] + nums[i] + nums[j];
        if (sum < target) while (i < j && nums[i] === nums[++i]);
        else if (sum > target) while (i < j && nums[j] === nums[--j]);
        else {
          res.push([nums[a], nums[b], nums[i], nums[j]]);
          while (i < j && nums[i] === nums[++i]);
          while (i < j && nums[j] === nums[--j]);
        }
      }
    }
  }
  return res;
};

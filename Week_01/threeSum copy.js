// 暴力求解
{
  let nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
  let threeSum = function (nums) {
    if (nums.length < 3) return false;
    nums.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < nums.length - 2; i++) {
      if (nums[i] > 0) break;
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      for (let j = i + 1; j < nums.length - 1; j++) {
        if (j > i + 1 && nums[j] === nums[j - 1]) continue;
        for (let z = j + 1; z < nums.length; z++) {
          if (z > j + 1 && nums[z] === nums[z - 1]) continue;
          if (nums[i] + nums[j] + nums[z] === 0) {
            res.push([nums[i], nums[j], nums[z]]);
          }
        }
      }
    }
    return res;
  };
  threeSum(nums);
}

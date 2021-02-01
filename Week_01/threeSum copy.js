// 暴力求解
{
  let nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
  var threeSum = function (nums) {
    if (nums.length < 3) return [];
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

// 暴力2---超出时间限制
{
  var threeSum = function (nums) {
    let len = nums.length;
    if (len < 3) return [];
    nums.sort((a, b) => a - b);
    if (nums[0] > 0 || nums[len - 1] < 0) return [];
    let map = new Map();
    for (i = 0; i < len; i++) {
      for (let j = i + 1; j < len - 2; j++) {
        for (let z = j + 1; z < len - 1; z++) {
          if (nums[i] + nums[j] + nums[z] === 0) {
            let key = [nums[i], nums[j], nums[z]].toString();
            if (!map.has(key)) {
              map.set(key, [nums[i], nums[j], nums[z]]);
            }
          }
        }
      }
    }
    return Array.from(map.values());
  };
}

// 参考题解
var threeSum = function (nums) {
  let ans = [];
  const len = nums.length;
  if (nums == null || len < 3) return ans;
  nums.sort((a, b) => a - b); // 排序
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    if (i > 0 && nums[i] == nums[i - 1]) continue; // 去重
    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum == 0) {
        ans.push([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L] == nums[L + 1]) L++; // 去重
        while (L < R && nums[R] == nums[R - 1]) R--; // 去重
        L++;
        R--;
      } else if (sum < 0) L++;
      else if (sum > 0) R--;
    }
  }
  return ans;
};

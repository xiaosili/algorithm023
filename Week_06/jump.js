// 方法一，顺序 到达边界时，更新边界和次数
var jump = function (nums) {
  let length = nums.length;
  let steps = 0;
  let end = 0;
  let maxPos = 0;
  for (let i = 0; i < length - 1; i++) {
    maxPos = Math.max(nums[i] + i, maxPos);
    if (i == end) {
      end = maxPos;
      steps++;
    }
  }
  return steps;
};

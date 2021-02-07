/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 贪心
// 方法一，顺序
var canJump = function (nums) {
  let n = nums.length;
  let rightmost = 0;
  for (let i = 0; i < n; i++) {
    if (i <= rightmost) {
      rightmost = Math.max(rightmost, i + nums[i]);
      if (rightmost >= n - 1) return true;
    }
  }
  return false;
};

// 方法二，倒序
var canJump = function (nums) {
  let len = nums.length;
  if (len === 1) return true;
  //last表示的是能不能到达last这个位置
  let last = len - 1;
  for (let i = len - 2; i >= 0; i--) {
    //从倒数第2个位置往前遍历，如果当前位置能够跳
    //到last这个位置，就更新last，如果从当前位置
    //不能到达last这个位置就继续往前遍历
    if (i + nums[i] >= last) last = i;
  }
  //如果last等于0，说明可以从第一个位置跳到最后
  return last === 0;
};

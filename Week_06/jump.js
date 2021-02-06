var jump = function (nums) {
  let ans = 0;
  let end = 0;
  let maxPos = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxPos = Math.max(nums[i] + i, maxPos);
    if (i == end) {
      end = maxPos;
      ans++;
    }
  }
  return ans;
};

var jump = function (nums) {
  if (nums.length < 2) return 0;
  let res = 0;
  let nowPos = 0;
  let maxPos = 1;
  while (maxPos < nums.length - 1) {
    res += 1;
    maxPos = INT_MIN;
    let count = nums[nowPos];
    let tempNowPos = nowPos;
    while (count > 0) {
      let temp1 = tempNowPos + count;
      if (temp1 >= nums.length - 1) return res;
      let pos = temp1 + nums[temp1];
      if (maxPos < pos) {
        maxPos = pos;
        nowPos = temp1;
      }
      count--;
    }
  }
  return res + 1;
};

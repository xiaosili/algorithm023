/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 老师讲的思路，和生成括号类似
var subsets = function (nums) {
  let res = [];
  let tmp = [];
  let len = nums.length;
  if (!len) return res;
  var dfs = (tmp, index) => {
    // terminator
    if (index === len) {
      res.push(tmp);
      return;
    }
    dfs(tmp, index + 1); //not pick the number at this index
    tmp.push(nums[index]);
    dfs(tmp.slice(), index + 1); // pick the number at the index
    // reverse the current state
    tmp.pop();
  };
  dfs(tmp, 0);
  return res;
};

// no reverse not good
var subsets = function (nums) {
  let res = [];
  let tmp = [];
  let len = nums.length;
  if (!len) return res;
  var dfs = (tmp, index) => {
    // terminator
    if (index === len) {
      res.push(tmp);
      return;
    }
    dfs(tmp.slice(), index + 1); //not pick the number at this index
    tmp.push(nums[index]);
    dfs(tmp.slice(), index + 1); // pick the number at the index
  };
  dfs(tmp, 0);
  return res;
};

// 题解参考
var subsets = function (nums) {
  const tmp = [];
  const res = [];
  const len = nums.length;
  const dfs = (cur) => {
    if (cur === len) {
      res.push(tmp.slice());
      return;
    }
    tmp.push(nums[cur]);
    dfs(cur + 1);
    tmp.pop();
    dfs(cur + 1);
  };
  dfs(0);
  return res;
};

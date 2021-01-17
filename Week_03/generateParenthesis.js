// +1
var generateParenthesis = function (n) {
  let res = [];
  const recur = (left, right, s) => {
    if (left === n && right === n) {
      res.push(s);
      return;
    }
    if (left < n) recur(left + 1, right, s + "(");
    if (right < left) recur(left, right + 1, s + ")");
  };
  recur(0, 0, "");
  return res;
};

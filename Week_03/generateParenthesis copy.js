// -1
var generateParenthesis = function (n) {
  let res = [];
  var recur = (l, r, s) => {
    if (l > r) return;
    if (l === 0 && r === 0) {
      res.push(s);
      return;
    }
    if (l > 0) recur(l - 1, r, s + "(");
    if (r > 0) recur(l, r - 1, s + ")");
  };
  recur(n, n, "");
  return res;
};

var generateParenthesis = function (n) {
  let left = 0;
  let right = 0;
  let s = "";
  let result = [];

  var func = function (left, right, n, s) {
    if (left === n && right === n) {
      result.push(s);
      return;
    }
    if (left < n) {
      func(left + 1, right, n, s + "(");
    }
    if (right < left) {
      func(left, right + 1, n, s + ")");
    }
  };
  func(left, right, n, s);
  return result;
};

function generateParenthesis(n) {
  const res = [];

  function go(l, r, s) {
    // l: left remaining, r: right remaining
    if (l > r) return; // The number of '(' should be always >= ')'

    if (l === 0 && r === 0) {
      res.push(s);
      return;
    }

    if (l > 0) go(l - 1, r, s + "(");
    if (r > 0) go(l, r - 1, s + ")");
  }

  go(n, n, "");
  return res;
}

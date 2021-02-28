/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = [];
  let dfs = (left, right, str) => {
    if (left === n && right === n) {
      result.push(str);
      return;
    }

    if (left < n) dfs(left + 1, right, str + "(");
    if (right < left) dfs(left, right + 1, str + ")");
  };
  dfs(0, 0, "");
  return result;
};

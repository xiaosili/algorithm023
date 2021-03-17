/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (!s.trim()) return true;

  const arr = s.match(/[A-Za-z0-9]/g);

  if (!arr) {
    return true;
  }

  return arr.join("").toLowerCase() === arr.reverse().join("").toLowerCase();
};

var isPalindrome = function (s) {
  if (!s.trim()) return true;

  s = s.replace(/\W|_/g, "").toLowerCase();

  if (!s.trim()) return true;

  let i = 0,
    j = s.length - 1;

  while (i < j) {
    if (s.charAt(i) !== s.charAt(j)) return false;
    i++, j--;
  }

  return true;
};

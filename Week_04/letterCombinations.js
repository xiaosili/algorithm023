/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];
  let arr = ["2", "3", "4", "5", "6", "7", "8", "9"];
  let brr = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], brr[i]);
  }
  let len = digits.length;
  let res = [];
  let search = (s, i) => {
    if (i === len) {
      res.push(s);
      return;
    }
    let letters = map.get(digits.charAt(i));
    for (let j = 0; j < letters.length; j++) {
      search(s + letters.charAt(j), i + 1);
    }
  };
  search("", 0);
  return res;
};

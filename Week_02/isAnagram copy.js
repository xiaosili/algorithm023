/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 方法一。暴力法，排序后比较
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  if (s.split('').sort().toString() === t.split('').sort().toString()) {
    return true;
  }
  return false;
};

// 方法二，map，统计每个字母出现的次数
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let map = new Map();
  for (let i of s) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  }

  for (let j of t) {
    if (map.has(j)) {
      map.set(j, map.get(j) - 1);
    } else {
      map.set(j, 1);
    }
  }

  for (let a of map.values()) {
    if (a !== 0) {
      return false;
    }
  }
  return true;
};

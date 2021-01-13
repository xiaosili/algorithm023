/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// 排序法
var groupAnagrams = function (strs) {
  if (!strs || strs.length === 0) return [];
  const map = new Map();
  for (let str of strs) {
    let key = Array.from(str).sort().toString();
    let list = map.get(key) ? map.get(key) : [];
    list.push(str);
    map.set(key, list);
  }
  return Array.from(map.values());
};

// 计数法
var groupAnagrams = function (strs) {
  if (!strs || strs.length === 0) return [];
  const map = new Object();
  for (let s of strs) {
    const count = new Array(26).fill(0);
    for (let c of s) {
      count[c.charCodeAt() - 'a'.charCodeAt()]++;
    }
    map[count] ? map[count].push(s) : (map[count] = [s]);
  }
  return Object.values(map);
};

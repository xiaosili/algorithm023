/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
// 方法一，排序
var getLeastNumbers = function (arr, k) {
  arr.sort((a, b) => a - b);
  if (k >= arr.length) return arr;
  return arr.slice(0, k);
};

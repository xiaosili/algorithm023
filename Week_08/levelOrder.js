/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let result = [];
  let queue = [root];
  while (queue.length) {
    let level = [];
    let n = queue.length;
    for (let i = 0; i < n; i++) {
      let node = queue.pop();
      if (node) {
        level.push(node.val);
        if (node.left) queue.unshift(node.left);
        if (node.right) queue.unshift(node.right);
      }
    }
    if (level.length) result.push(level);
  }
  return result;
};

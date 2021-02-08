/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let result = [],
    queue = [root];
  while (queue.length) {
    let level = [],
      n = queue.length;
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

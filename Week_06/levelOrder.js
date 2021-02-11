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
// 老师讲的bfs的模版
var levelOrder = function (root) {
  if (!root) return [];
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

// 老师讲的另外一种方案，其实本质一样，都是bfs，只是没完全按照模版来
var levelOrder = function (root) {
  if (!root) return [];
  let result = [],
    queue = [root];
  while (queue.length) {
    let child = [],
      node = [],
      n = queue.length;
    for (let item of queue) {
      child.push(item.val);
      if (item.left) node.push(item.left);
      if (item.right) node.push(item.right);
    }
    result.push(child);
    queue = node;
  }
  return result;
};

// 方法三，老师要求，还要写一个dfs的方法
var levelOrder = function (root) {
  //if (!root) return [];
  const visited = new Set();
  let result = [];
  const dfs = (node, level) => {
    if (!node) return;
    if (visited.has(node)) return;
    visited.add(node.val);
    if (result[level]) {
      result[level].push(node.val);
    } else {
      result[level] = [node.val];
    }
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };
  dfs(root, 0);
  return result;
};

// 二叉树模版
const visited = new Set();
const dfs = (node) => {
  if (visited.has(node)) return;
  visited.add(node);
  dfs(node.left);
  dfs(node.right);
};

// 多叉树模版
const visited = new Set();
const dfs = (node, visited) => {
  if (visited.has(node)) return;
  visited.add(node);
  for (next_node of node.children()) {
    if (!visited.has(next_node)) dfs(next_node, visited);
  }
};

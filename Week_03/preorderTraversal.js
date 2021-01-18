// 递归
var preorderTraversal = function (root) {
  let res = [];
  var preorder = (root) => {
    if (!root) {
      return;
    }
    res.push(root.val);
    preorder(root.left);
    preorder(root.right);
  };
  preorder(root);
  return res;
};
// 迭代
var preorderTraversal = function (root) {
  let res = [];
  let stk = [];
  while (root || stk.length) {
    while (root) {
      res.push(root.val);
      stk.push(root);
      root = root.left;
    }
    root = stk.pop();
    root = root.right;
  }
  return res;
};

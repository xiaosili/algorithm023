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

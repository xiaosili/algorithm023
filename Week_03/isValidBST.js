// 递归
var isValidBST = function (root) {
  let res = [];
  let inorder = (root) => {
    if (!root) return;
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  };
  inorder(root);
  if (
    res.toString() === res.sort((a, b) => a - b).toString() &&
    res.toString() === Array.from(new Set(res)).toString()
  ) {
    return true;
  }
  return false;
};

// 递归优化
let root = [5, 1, 4, null, null, 3, 6];

var isValidBST = function (root) {
  let res = [];
  let flag = true;
  let inorder = (root) => {
    if (!root) return;
    inorder(root.left);
    if (res.length && root.val <= res[res.length - 1]) flag = false;
    res.push(root.val);
    inorder(root.right);
  };
  inorder(root);
  return flag ? true : false;
};

// 迭代
var isValidBST = function (root) {
  let stack = [];
  let inorder = -Infinity;

  while (stack.length || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    // 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
    if (root.val <= inorder) {
      return false;
    }
    inorder = root.val;
    root = root.right;
  }
  return true;
};

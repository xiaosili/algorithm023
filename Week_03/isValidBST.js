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

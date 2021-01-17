// 递归模版
function recur(level, param) {
  // terminator
  if (level > max_level) {
    // process result
    return;
  }

  // process current logic
  process(level, param);

  // drill down
  recur(level + 1, newParam);

  // restore current status
}

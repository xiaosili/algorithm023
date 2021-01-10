// 最初不太好的方法
var isValid = function (s) {
  // 遍历，如果是左括号，同时下一个就是右括号的前提下，把这两个括号移除
  // 直到最终为空，则返回true，不为空返回false

  if (!s.length) return false;
  if (s.length % 2) return false;

  let arr = Array.from(s);
  let j = 0;
  let len = arr.length;
  for (let i = 0; i < len - j; i++) {
    let current = arr[i];
    if (
      (current === '(' && arr[i + 1] === ')') ||
      (current === '[' && arr[i + 1] === ']') ||
      (current === '{' && arr[i + 1] === '}')
    ) {
      arr.splice(i, 2);
      i = i - 2;
      j = j + 2;
    }
  }
  if (arr.length) {
    return false;
  }
  return true;
};

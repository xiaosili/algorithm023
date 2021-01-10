// 方法2
{
  let s = '{[]}';

  var isValid = function (s) {
    if (!s.length) return false;
    if (s.length % 2) return false;
    let stack = [];
    for (let c of s) {
      if (c == '(') stack.push(')');
      else if (c == '{') stack.push('}');
      else if (c == '[') stack.push(']');
      else if (stack.length === 0 || stack.pop() != c) return false;
    }
    return stack.length ? false : true;
  };
  console.log(isValid(s));
}

// 方法1
{
  let s = '{[]}';
  var isValid = function (s) {
    if (!s.length) return false;
    if (s.length % 2) return false;
    // 遍历字符串，如果是左括号，入栈，如果是对应的右括号，出栈
    let dic = { ')': '(', ']': '[', '}': '{' };
    let stack = [];
    for (let i of s) {
      if (stack.length) {
        if (stack[stack.length - 1] === dic[i]) {
          stack.pop();
        } else {
          stack.push(i);
        }
      } else {
        stack.push(i);
      }
    }
    return stack.length ? false : true;
  };
  console.log(isValid(s));
}

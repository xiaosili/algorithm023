function searchOnly(arr) {
  return arr.reduce((prev, next) => prev ^ next);
}

{
  let a = [1, 1, 2, 2, 3];

  function searchOnly() {
    return a.reduce((prev, next) => {
      return prev ^ next;
    });
  }
  //执行顺序显示
  //prev  next
  // 1  ^  1
  // 0  ^  2
  // 2  ^  2
  // 0  ^  3
  // 3
  console.log(searchOnly(a)); // 输出3
}

function searchOnly(arr) {
  // ……处理函数
  if (arr.length < 2) {
    return arr;
  }
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1] && i % 2 === 0) {
      arr.shift();
      arr.shift();
      i--;
    }
  }
  return arr;
}

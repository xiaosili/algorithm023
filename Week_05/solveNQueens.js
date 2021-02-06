/**
 * @param {number} n
 * @return {string[][]}
 */
// n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
// 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
// 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
var solveNQueens = function (n) {
  let result = [];
  function rec(row = 0, stringTemp = [], temp = []) {
    // row表示当前棋子放第几行
    // stringTemp用于记录轨迹
    // temp用于记录点的坐标
    if (row === n) {
      result.push([...stringTemp]);
      return result;
    }

    for (let i = 0; i < n; i++) {
      // 检测当前格子能否放置 是否与前几行冲突？
      let errTemp = false;
      // 默认是没有放棋子的，不存在冲突 默认值为false
      for (let j = 0; j < temp.length; j++) {
        let tempRow = temp[j].row;
        let tempColumn = temp[j].column;
        let currentRow = row;
        let currentColumn = i;
        if (
          tempColumn === currentColumn ||
          Math.pow(tempRow - currentRow, 2) ===
            Math.pow(tempColumn - currentColumn, 2)
        ) {
          errTemp = true;
          break;
        }
      }
      // 冲突则跳过
      if (errTemp) {
        continue;
      }
      let sTemp = ".".repeat(n);
      // 不冲突
      stringTemp.push(sTemp.slice(0, i) + "Q" + sTemp.slice(i + 1));
      temp.push({ row: row, column: i });
      rec(row + 1, stringTemp, temp);
      stringTemp.pop();
      temp.pop();
    }
  }
  rec();
  return result;
};

var solveNQueens = function (n) {
  let result = [];
  var dfs = (queens, xy_dif, xy_sum) => {
    let p = queens.length;
    if (p === n) {
      result.push(queens);
      return;
    }
    for (let q = 0; q < n; q++) {
      if (
        !queens.includes(q) &&
        !xy_dif.includes(p - q) &&
        !xy_sum.includes(p + q)
      ) {
        dfs(queens.concat([q]), xy_dif.concat([p - q]), xy_sum.concat([p + q]));
      }
    }
  };
  dfs([], [], []);
  for (let sol of result) {
    for (let i of sol) {
      "." * i + "Q" + "." * (n - i - 1);
    }
  }
  return result;
};

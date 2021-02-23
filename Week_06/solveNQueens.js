/**
 * @param {number} n
 * @return {string[][]}
 */
// n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
// 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
// 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
// 推荐方法
var solveNQueens = function (n) {
  if (n === 1) return [["Q"]];
  let result = [];
  function dfs(row = 0, stringTemp = [], temp = []) {
    // row表示当前棋子放第几行
    // stringTemp用于记录轨迹
    // temp用于记录点的坐标
    if (row === n) {
      result.push([...stringTemp]);
      return;
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
      // 不冲突
      stringTemp.push(".".repeat(i) + "Q" + ".".repeat(n - i - 1));
      temp.push({ row: row, column: i });
      dfs(row + 1, stringTemp, temp);
      stringTemp.pop();
      temp.pop();
    }
  }
  dfs(0, [], []);
  return result;
};
// 借鉴的方法
var solveNQueens = function (n) {
  if (n === 1) return [["Q"]];
  let result = [];
  var dfs = (queens, xy_dif, xy_sum) => {
    let p = queens.length;
    if (p === n) {
      let tempArr = [];
      for (let i of queens) {
        tempArr.push(".".repeat(i) + "Q" + ".".repeat(n - i - 1));
      }
      result.push(tempArr);
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
  return result;
};

// 老师讲课的代码思路
var solveNQueens = function (n) {
  if (n === 1) return [["Q"]];
  let result = [];
  let cols = new Set();
  let pie = new Set();
  let na = new Set();

  let DFS = (row = 0, cur_state = []) => {
    if (row === n) {
      let tempArr = [];
      for (let i of cur_state) {
        tempArr.push(".".repeat(i) + "Q" + ".".repeat(n - i - 1));
      }
      result.push(tempArr);
      return;
    }
    for (let col = 0; col < n; col++) {
      if (cols.has(col) || pie.has(row + col) || na.has(row - col)) {
        continue;
      }
      cols.add(col);
      pie.add(row + col);
      na.add(row - col);

      DFS(row + 1, cur_state.concat([col]));

      cols.delete(col);
      pie.delete(row + col);
      na.delete(row - col);
    }
  };
  DFS(0, []);
  return result;
};
// 借鉴方法，轨迹代码稍微荣誉
var solveNQueens = function (n) {
  if (n === 1) return [["Q"]];
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
  let tempArr = [];
  for (let sol of result) {
    for (let i of sol) {
      tempArr.push(".".repeat(i) + "Q" + ".".repeat(n - i - 1));
    }
  }
  let len = tempArr.length / n;
  let res = [];
  for (let i = 0; i < len; i++) {
    res.push(tempArr.slice(n * i, n * (i + 1)));
  }
  return res;
};
// 老师讲课的代码思路，轨迹代码稍微冗余
var solveNQueens = function (n) {
  if (n === 1) return [["Q"]];
  let result = [];
  let cols = new Set();
  let pie = new Set();
  let na = new Set();

  let DFS = (n, row = 0, cur_state = []) => {
    if (row === n) {
      result.push(cur_state);
      return;
    }
    for (let col = 0; col < n; col++) {
      if (cols.has(col) || pie.has(row + col) || na.has(row - col)) {
        continue;
      }
      cols.add(col);
      pie.add(row + col);
      na.add(row - col);

      DFS(n, row + 1, cur_state.concat([col]));

      cols.delete(col);
      pie.delete(row + col);
      na.delete(row - col);
    }
  };
  DFS(n, 0, []);

  let tempArr = [];
  for (let sol of result) {
    for (let i of sol) {
      tempArr.push(".".repeat(i) + "Q" + ".".repeat(n - i - 1));
    }
  }
  let len = tempArr.length / n;
  let res = [];
  for (let i = 0; i < len; i++) {
    res.push(tempArr.slice(n * i, n * (i + 1)));
  }
  return res;
};

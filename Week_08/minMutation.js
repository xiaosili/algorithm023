/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
// 优秀
var minMutation = function (start, end, bank) {
  let bankSet = new Set(bank);
  if (!bankSet.has(end)) return -1;
  let stack = [[start, 0]];
  let gen = ["A", "C", "T", "G"];
  while (stack.length) {
    let top = stack.shift();
    let value = top[0];
    let level = top[1];
    if (value === end) return level;
    for (let i = 0; i < value.length; i++) {
      for (let j of gen) {
        let newStart = value.substring(0, i) + j + value.substring(i + 1);
        if (bankSet.has(newStart)) {
          stack.push([newStart, level + 1]);
          bankSet.delete(newStart);
        }
      }
    }
  }
  return -1;
};
// var start = "AAAAACCC";
// var end = "AACCCCCC";
// var bank = ["AAAACCCC", "AAACCCCC", "AACCCCCC"];

// minMutation(start, end, bank);
// BFS
var minMutation = function (start, end, bank) {
  var set = new Set(bank);
  if (!set.has(end)) return -1;
  var visited = new Set();
  visited.add(start);

  var q = [];
  q.push(start);
  var count = 1;
  while (q.length !== 0) {
    var size = q.length;

    for (var i = 0; i < size; i++) {
      var a = q.shift();
      if (oneM(a, end)) return count;
      set.forEach((b) => {
        if (!visited.has(b) && oneM(a, b)) {
          q.push(b);
          visited.add(b);
        }
      });
    }

    count++;
  }
  return -1;
};
var oneM = function (a, b) {
  var count = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      count++;
    }
  }
  return count === 1;
};

// DFS
var minMutation = function (start, end, bank) {
  var set = new Set(bank);
  var visited = new Set();
  visited.add(start);
  if (!set.has(end)) return -1;
  var count = dfs(start);

  if (count === Number.MAX_VALUE) return -1;
  return count;

  //@ return min_path

  function dfs(a) {
    if (oneM(a, end)) return 1;

    var min = Number.MAX_VALUE;

    set.forEach((b) => {
      if (oneM(a, b) && !visited.has(b)) {
        visited.add(b);
        var c = dfs(b);
        if (c !== Number.MAX_VALUE) {
          min = Math.min(min, c + 1);
        }
        visited.delete(b);
      }
    });

    return min;
  }
};
var oneM = function (a, b) {
  var count = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      count++;
    }
  }
  return count === 1;
};

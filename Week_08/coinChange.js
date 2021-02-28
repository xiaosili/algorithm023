// 如果length为1
// 排序之后，倒着比较，找到一个比amount小的，然后取yu，看yushu是否在，如果在 计算输出
// 如果不在，继续找余树比较，延续上述逻辑，

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 优秀
var coinChange = function (coins, amount) {
  coins.sort((a, b) => b - a);
  let res = Infinity;
  helper(0, amount, 0);
  return res == Infinity ? -1 : res;

  function helper(index, amount, count) {
    if (amount == 0) return (res = Math.min(count, res));
    if (index == coins.length) return;
    for (let i = (amount / coins[index]) | 0; i + count < res && i >= 0; i--) {
      if (helper(index + 1, amount - i * coins[index], count + i)) return;
    }
  }
};
// 方法一
const coinChange = (coins, amount) => {
  coins.sort((a, b) => b - a);

  let res = Infinity;

  const find = (k, amount, count) => {
    const coin = coins[k];

    // last smallest coin
    if (k === coins.length - 1) {
      if (amount % coin === 0) {
        res = Math.min(res, count + ~~(amount / coin));
      }
    } else {
      for (let i = ~~(amount / coin); i >= 0 && count + i < res; i--) {
        // count + i < res is for pruning, avoid unnecessary calculation
        find(k + 1, amount - coin * i, count + i);
      }
    }
  };

  find(0, amount, 0);
  return res === Infinity ? -1 : res;
};

const coinChange = (coins, amount) => {
  // dp[i] represents the least amount of coins that can make the value equals to the i
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

// 方法一
var coinChange = function (coins, amount) {
  const map = { 0: 1 };
  for (let i = 1; i <= amount; i++) {
    let min = Infinity;
    for (let coin of coins) {
      if (i < coin) continue;
      min = Math.min(min, 1 + map[i - coin]);
    }
    map[i] = min;
  }
  return map[amount] == Infinity ? -1 : map[amount] - 1;
};

// 方法二
var coinChange = function (coins, amount) {
  const map = { 0: 1 };
  function dp(n) {
    if (map.hasOwnProperty(n)) return map[n];
    if (n == 0) return 1;
    if (n < 0) return -1;
    let min = Infinity;
    for (let coin of coins) {
      let res = dp(n - coin);
      if (res == -1) continue;
      min = Math.min(min, 1 + res);
    }
    map[n] = min;
    return min;
  }
  for (let i = 1; i <= amount; i++) {
    dp(i);
  }
  return map[amount] == Infinity ? -1 : map[amount] - 1;
};

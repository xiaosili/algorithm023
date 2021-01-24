/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// 方法一，暴力法，超时
var myPow = function (x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  if (n === 0) return 1;
  if (n === 1) return x;

  let res = x;
  for (let i = 2; i <= n; i++) {
    res = res * x;
  }
  return res;
};

// 方法二，暴力法优化一层，未超时，但需要8-9s，时间很长
var myPow = function (x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  if (n === 0) return 1;
  if (n === 1) return x;

  let res = x;
  if (n % 2 === 0) {
    for (let i = 2; i <= n / 2; i++) {
      res = res * x;
    }
    res = res * res;
  } else {
    for (let i = 2; i <= Math.floor(n / 2); i++) {
      res = res * x;
    }
    res = res * res * x;
  }
  return res;
};

// 方法三，分治优化1 best ?
var myPow = function (x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  if (n === 0 || x === 1) return 1;
  if (n === 1) return x;
  let res = myPow(x, Math.floor(n / 2));
  return n % 2 ? res * res * x : res * res;
};

// 方法三，分治优化2
var myPow = function (x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  if (n === 0 || x === 1) return 1;
  if (n === 1) return x;
  let res = myPow(x * x, Math.floor(n / 2));
  return n % 2 ? res * x : res;
};

// 方法三，分治
var myPow = function (x, n) {
  if (n === 0 || x === 1) return 1;
  if (n === 1) return x;
  let res;
  if (n < 0) {
    // res = 1 / myPow(x, -Math.floor(n / 2));
    res = 1 / myPow(x, Math.ceil(-n / 2));
  } else {
    res = myPow(x, Math.floor(n / 2));
  }
  return n % 2 ? res * res * x : res * res;
};

// not best
var myPow = function (x, n) {
  if (n === 0 || x === 1) return 1;
  if (n === 1) return x;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  return n % 2 == 0 ? myPow(x * x, n / 2) : x * myPow(x * x, Math.floor(n / 2));
};

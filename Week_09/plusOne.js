var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }
  return [1, ...digits];
};

var plusOne = function (digits) {
  let len = digits.length;
  let i = len - 1;

  while (i >= 0) {
    digits[i]++;

    if (digits[i] % 10) return digits;
    else digits[i] = 0;

    i--;
  }
  return [1, ...digits];
};

var plusOne = function (digits) {
  let len = digits.length;
  let i = len - 1;

  while (i >= 0) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  return [1, ...digits];
};

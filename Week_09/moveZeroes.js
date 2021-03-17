/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  return nums.sort((a, b) => (b == 0 ? -1 : 1));
};

var moveZeroes = function (nums) {
  nums.sort((a, b) => (a === 0 ? (b !== 0 ? 1 : 0) : b === 0 ? -1 : 0));
};

var moveZeroes = function (nums) {
  if (!nums.length) return [];

  for (let i = 0, zero_pointer = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[zero_pointer]] = [nums[zero_pointer], nums[i]];
      zero_pointer++;
    }
  }

  return nums;
};

var moveZeroes = function (nums) {
  if (!nums.length) return [];

  for (let i = 0, zero_pointer = 0; i < nums.length; i++) {
    let current = nums[i];
    if (current !== 0) {
      nums[i] = nums[zero_pointer];
      nums[zero_pointer] = current;
      zero_pointer++;
    }
  }

  return nums;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zero_count = 0;
  for (let i = 0; i < nums.length - zero_count; ) {
    let item = nums[i];
    if (item === 0) {
      nums.splice(i, 1);
      nums.push(item);
      zero_count++;
    } else {
      i++;
    }
  }
  return nums;
};

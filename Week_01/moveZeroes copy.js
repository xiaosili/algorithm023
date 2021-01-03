// 最开始有问题的代码
{
  // 遍历数组，如果是0，删除当前的，然后往尾部加一个0
  // let arr = [0, 1, 0, 3, 12];
  let arr = [0, 0, 1];
  arr.forEach((item, index) => {
    if (item === 0) {
      arr.splice(index, 1);
      arr.push(0);
    }
  });
  console.log(arr);
}

// 问题代码优化后
{
  let arr = [0, 0, 1];

  var moveZeroes = function (nums) {
    let zero_count = 0;
    for (let i = 0; i < nums.length - zero_count; ) {
      let item = nums[i];
      if (item === 0) {
        nums.splice(i, 1);
        nums.push(item);
        zero_count++;
        continue;
      }
      i++;
    }
    return nums;
  };
  console.log(arr);
}

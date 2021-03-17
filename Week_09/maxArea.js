var maxArea = function (height) {
  if (height.length === 2) return Math.min(height[0], height[1]);

  let maxArea = 0;
  let i = 0;
  let j = height.length - 1;

  while (i < j) {
    maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * (j - i));
    if (height[i] < height[j]) i++;
    else j--;
  }
  return maxArea;
};

var maxArea = function (height) {
  if (height.length === 2) return Math.min(height[0], height[1]);

  let maxArea = 0,
    i = 0,
    j = height.length - 1;

  while (i < j) {
    maxArea =
      height[i] < height[j]
        ? Math.max(maxArea, height[i++] * (j - i + 1))
        : Math.max(maxArea, height[j--] * (j - i + 1));
  }

  return maxArea;
};

var maxArea = function (height) {
  if (height.length === 2) return Math.min(height[0], height[1]);

  let maxArea = 0;
  let area = 0;
  let minHeight = 0;

  for (let i = 0; (j = height.length - 1); ) {
    minHeight = height[i] < height[j] ? height[i++] : height[j--];
    area = minHeight * (j - i + 1);
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
};

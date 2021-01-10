{
  // 不用额外数组的方法
  var MinStack = function () {
    this.x_stack = [];
  };

  MinStack.prototype.push = function (x) {
    let min = x;
    if (this.x_stack.length) {
      min = Math.min(this.x_stack[this.x_stack.length - 1][1], x);
    }
    this.x_stack.push([x, min]);
  };

  MinStack.prototype.pop = function () {
    this.x_stack.pop();
  };

  MinStack.prototype.top = function () {
    if (!this.x_stack.length) return;
    return this.x_stack[this.x_stack.length - 1][0];
  };

  MinStack.prototype.getMin = function () {
    return this.x_stack[this.x_stack.length - 1][1];
  };

  // 输入：
  // ["MinStack","push","push","push","getMin","pop","top","getMin"]
  // [[],[-2],[0],[-3],[],[],[],[]]

  var stack = new MinStack();
  stack.push(-2);
  stack.push(0);
  stack.push(-3);
  stack.getMin();
  stack.pop();
  stack.top();
  stack.getMin();
}

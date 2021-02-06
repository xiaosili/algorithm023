/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
// 方法一，排序
var getLeastNumbers = function (arr, k) {
  if (k === 0) return [];
  if (k >= arr.length) return arr;
  arr.sort((a, b) => a - b);
  return arr.slice(0, k);
};

// 方法二，大顶堆
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
function getLeastNumbers(arr, k) {
  if (k === 0) {
    return [];
  }
  if (k >= arr.length) {
    return arr;
  }
  let maxHeap = new BinaryHeap(k);
  let result = [];
  for (var i = 0; i < k; i++) {
    maxHeap.insert(arr[i]);
  }

  for (var i = k; i < arr.length; i++) {
    if (maxHeap.findMax() > arr[i]) {
      maxHeap.delete(0);
      maxHeap.insert(arr[i]);
    }
  }
  for (var i = 0; i < k; i++) {
    result[i] = maxHeap.delete(0);
  }
  return result;
}

/* 
大顶堆实现
*/
class BinaryHeap {
  constructor(size) {
    this.heap = new Array(size).fill(-1);
    this.heapSize = 0;
  }

  isEmpty() {
    return this.heapSize == 0;
  }

  isFull() {
    return this.heapSize == this.heap.length;
  }

  // 获取当前节点的父节点的 index
  parentIndexHandler(i) {
    return Math.floor((i - 1) / 2);
  }

  // 获取 index 为 i 的节点的第 k 个子节点
  kthChildIndexHandler(i, k) {
    return 2 * i + k;
  }

  /**
   * Inserts new element in to heap
   * Complexity: O(log N)
   * As worst case scenario, we need to traverse till the root
   */
  insert(x) {
    if (this.isFull()) {
      throw new Error("Heap is full, No space to insert new element");
    }
    this.heap[this.heapSize] = x;
    this.heapSize++;
    this.heapifyUp(this.heapSize - 1);
  }

  /**
   * Deletes element at index x
   * Complexity: O(log N)
   * 删除时，会用最后一个元素替换被删除的元素。
   */
  delete(x) {
    if (this.isEmpty()) {
      throw new Error("Heap is empty, No element to delete");
    }
    let maxElement = this.heap[x];
    this.heap[x] = this.heap[this.heapSize - 1];
    this.heapSize--;
    this.heapifyDown(x);
    return maxElement;
  }

  // insert时，如果一个节点比它的父节点大（最大堆）或者小（最小堆），那么需要将它同父节点交换位置。这样是这个节点在数组的位置上升。
  heapifyUp(i) {
    let insertValue = this.heap[i];
    while (i > 0 && insertValue > this.heap[this.parentIndexHandler(i)]) {
      this.heap[i] = this.heap[this.parentIndexHandler(i)];
      i = this.parentIndexHandler(i);
    }
    this.heap[i] = insertValue;
  }

  // delete时，因为用最后一个节点 L 替换了被删除的元素，
  // 所以如果 L 比它的子节点小（最大堆）或者大（最小堆），那么需要将它向下移动。这个操作也称作“堆化（heapify）”。
  heapifyDown(i) {
    let maxChildIndex;
    let temp = this.heap[i];
    // i 不是最后一个节点
    while (this.kthChildIndexHandler(i, 2) < this.heapSize) {
      maxChildIndex = this.maxChildIndexHandler(i);
      // L 大于子节点
      if (temp >= this.heap[maxChildIndex]) {
        break;
      }
      this.heap[i] = this.heap[maxChildIndex];
      i = maxChildIndex;
    }
    this.heap[i] = temp;
  }

  maxChildIndexHandler(i) {
    let leftChild = this.kthChildIndexHandler(i, 1);
    let rightChild = this.kthChildIndexHandler(i, 2);
    return this.heap[leftChild] > this.heap[rightChild]
      ? leftChild
      : rightChild;
  }

  /**
   * Prints all elements of the heap
   */
  printHeap() {
    console.log("nHeap = ");
    for (let i = 0; i < this.heapSize; i++) {
      console.log(this.heap[i] + " ");
    }
    return this.heap.slice(0, this.heapSize);
  }

  /**
   * This method returns the max element of the heap.
   * complexity: O(1)
   */
  findMax() {
    if (this.isEmpty()) {
      throw new Error("Heap is empty.");
    }
    return this.heap[0];
  }
}

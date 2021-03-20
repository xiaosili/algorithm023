/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let dummyHead = new ListNode(0, head);
  let temp = dummyHead;
  while (temp.next && temp.next.next) {
    let node1 = temp.next;
    let node2 = temp.next.next;
    temp.next = node2;
    node1.next = node2.next;
    node2.next = node1;
    temp = node1;
  }

  return dummyHead.next;
};

var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let newHead = head.next;
  head.next = swapPairs(newHead.next);
  newHead.next = head;
  return newHead;
};

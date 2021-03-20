var reverseList = function (head) {
  if (!head || !head.next) return head;

  let pre = null;
  let cur = head;
  let tmp = null;
  while (cur) {
    tmp = cur.next;
    cur.next = prev;
    pre = cur;
    cur = tmp;
  }

  return pre;
};

var reverseList = function (head) {
  if (!head || !head.next) return head;

  let pre = null;
  let cur = head;

  while (cur) {
    [cur.next, pre, cur] = [pre, cur, cur.next];
  }

  return pre;
};

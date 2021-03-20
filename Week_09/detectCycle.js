var detectCycle = function (head) {
  if (!head || !head.next) return null;

  while (head) {
    if (head.flag) return head;
    head.flag = true;
    head = head.next;
  }

  return null;
};

var detectCycle = function (head) {
  if (!head || !head.next) return null;

  let slow = head;
  let fast = head;

  while (true) {
    if (!fast || !fast.next) return null;
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) break;
  }

  fast = head;

  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }

  return fast;
};

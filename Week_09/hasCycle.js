var hasCycle = function (head) {
  if (!head || !head.next) return false;

  while (head) {
    if (head.flag) return true;
    head.flag = true;
    head = head.next;
  }

  return false;
};

var hasCycle = function (head) {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head;

  while (true) {
    if (!fast || !fast.next) return false;
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) return true;
  }
};

var hasCycle = function (head) {
  if (!head || !head.next) return false;

  let fast = head.next;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) return true;
  }

  return false;
};

var hasCycle = function (head) {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (!fast || !fast.next) return false;

    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
};

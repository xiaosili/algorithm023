var reverseList = function (head) {
  //申请节点，pre和 cur，pre指向null
  let pre = null;
  let cur = head;
  let tmp = null;
  while (cur != null) {
    //记录当前节点的下一个节点
    tmp = cur.next;
    //然后将当前节点指向pre
    cur.next = pre;
    //pre和cur节点都前进一位
    pre = cur;
    cur = tmp;
  }
  return pre;
};

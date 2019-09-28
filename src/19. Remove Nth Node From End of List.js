/*
Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.
After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:
Could you do this in one pass?
*/

//   Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let last = head,
    prev = null,
    curr = head;
  for (let i = 1; i <= n; i++) {
    last = last.next;
  }

  while (last) {
    last = last.next;
    prev = curr;
    curr = curr.next;
  }
  if (curr == head) {
    return head.next;
  }
  if (curr) {
    prev.next = curr.next;
  }
  return head;
};

const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);
console.log(JSON.stringify(removeNthFromEnd(list, 2), 2));

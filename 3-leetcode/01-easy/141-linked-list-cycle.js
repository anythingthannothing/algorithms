// Using fast & slow runner => T.C: O(n) | S.C: O(1)
const hasCycle = (head) => {
  if (!head) return false;
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true;
  }
  return false;
};

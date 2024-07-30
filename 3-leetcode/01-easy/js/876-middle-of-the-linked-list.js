// Using slow & fast Runner idea => T.C: O(n) | S.C: O(1)
const middleNode = (head) => {
  let slowRunner = head,
    fastRunner = head;
  while (fastRunner && fastRunner.next) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;
  }
  return slowRunner;
};

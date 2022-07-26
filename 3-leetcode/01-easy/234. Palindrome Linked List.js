// Solution Using Two-Pointes => T.C: O(n) | S.C: O(n)
let isPalindrome = (head) => {
    let arr = [];
    while (head) {
      arr.push(head.val);
      head = head.next;
    }
    for (let i = 0, j = arr.length - 1; j > i; i++, j--) {
      if (arr[i] != arr[j]) return false;
    }
    return true;
  };
  
  
  // Solution Using Recursive => T.C: O(n) | S.C: O(n)
  // const isPalindrome = (head) => {
  //   let frontPointer = head;
    
  //   const recursivelyCheck = (curr) => {
  //     if (curr) {
  //       if (!recursivelyCheck(curr.next)) return false;
  //       if (curr.val != frontPointer.val) return false;
  //       frontPointer = frontPointer.next;
  //     }
  //     return true;
  //   }
  //   return recursivelyCheck(head);
  // }
  
  
  
  // Solution Using Array Mothod => T.C: O(n) | S.C: O(n)
  // let isPalindrome = (head) => {
  //   let arr = [];
  //   while (head) {
  //     arr.push(head.val);
  //     head = head.next;
  //   }
  //   if (arr.join("") == arr.reverse().join("")) return true;
  //   return false;
  // };
// Using Iteration only => T.C: O(n) | S.C: O(1)
const flatten = (root) => {
    let curr = root;
    while (curr) {
      if (curr.left) {
        let modi = curr.left;
        while (modi.right) modi = modi.right;
        modi.right = curr.right;
        curr.right = curr.left;
        curr.left = null;
      }
      curr = curr.right;
    }
  };
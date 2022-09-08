// Soltuion with DFS
const inorderTraversal = function (root) {
  let result = [];

  function DFS(node) {
    if (!node) return;
    DFS(node.left);
    result.push(node.val);
    DFS(node.right);
  }

  DFS(root);
  return result;
};

// Solution with Stack
const inorderTraversalStack = function (root) {
  let result = [];
  let stack = [];
  let curr = root;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    result.push(curr.val);
    curr = curr.right;
  }
  return result;
};

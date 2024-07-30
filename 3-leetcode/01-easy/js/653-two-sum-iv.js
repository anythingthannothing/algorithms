const findTarget = function (root, k) {
  let result = false;
  let valMap = new Map();

  function DFS(node) {
    if (!node || result) return; // check result for optimization
    if (valMap.has(k - node.val)) {
      result = true;
      return;
    }
    valMap.set(node.val, true);
    DFS(node.left);
    DFS(node.right);
  }

  DFS(root);
  return result;
};

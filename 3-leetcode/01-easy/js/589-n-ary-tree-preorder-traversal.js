const preorder = function (root) {
  if (!root) return [];
  let result = [];

  function BFS(node) {
    result.push(node.val);
    if (node.children.length) {
      for (let child of node.children) {
        BFS(child);
      }
    }
  }

  BFS(root);
  return result;
};

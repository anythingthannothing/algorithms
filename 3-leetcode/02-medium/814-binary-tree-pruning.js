const pruneTree = (root) => {
  return DFS(root);
};

function DFS(node) {
  if (!node) return null;

  node.left = DFS(node.left);
  node.right = DFS(node.right);
  if (!node.left && !node.right && node.val === 0) return null;

  return node;
}

const pathSum = function (root, targetSum) {
  if (!root) return [];
  let result = [];
  let temp = [];

  function DFS(node, sum) {
    if (!node) return;
    sum += node.val;
    temp.push(node.val);
    if (!node.left && !node.right && sum === targetSum) {
      result.push(temp.slice());
    }
    DFS(node.left, sum);
    DFS(node.right, sum);
    temp.pop();
  }

  DFS(root, 0);
  return result;
};

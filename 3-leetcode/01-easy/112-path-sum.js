// Solution with Recursive
const hasPathSum = (root, targetSum) => {
  if (!root) return false;

  if (!root.left && !root.right) return targetSum === root.val;

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};

// Solution with DFS
// const hasPathSum = function (root, targetSum) {
//   let result = false;
//   let total = 0;

//   function DFS(node) {
//     if (!node) return;
//     total += node.val;
//     if (!node.left && !node.right) {
//       if (total === targetSum) result = true;
//     }
//     DFS(node.left);
//     DFS(node.right);
//     total -= node.val;
//   }

//   DFS(root);

//   return result;
// };

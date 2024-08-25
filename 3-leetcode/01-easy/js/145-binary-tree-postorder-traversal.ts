/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

const postorderTraversal = (root: TreeNode | null): number[] => {
  return traverse(root, []);
};

function traverse(node: TreeNode | null, result: number[]) {
  if (!node) {
    return result;
  }

  traverse(node.left, result);
  traverse(node.right, result);
  result.push(node.val);

  return result;
}

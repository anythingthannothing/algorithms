class TreeNode {
  int val;
  TreeNode? left;
  TreeNode? right;
  TreeNode([this.val = 0, this.left, this.right]);
}

class Solution {
  List<int> result = [];
  List<int> postorderTraversal(TreeNode? root) {
    traverse(root);
    return result;
  }

  void traverse(TreeNode? root) {
    if (root == null) {
      return;
    }
    traverse(root.left);
    traverse(root.right);
    result.add(root.val);
  }
}

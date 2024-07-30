class Solution {
  public:
  bool checkSymmetric(TreeNode* p,TreeNode* q)
  {
    if(p == NULL || q == NULL)
    {
      return p == q;
    }
    if(p->val != q->val)
    {
      return false;
    }
    return checkSymmetric(p->left, q->right) && checkSymmetric(p->right, q->left);
}
    bool isSymmetric(TreeNode* root) {
       return checkSymmetric(root->left, root->right);
    }
};

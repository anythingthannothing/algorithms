#include <bits/stdc++.h>

using namespace std;

struct TreeNode
{
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode() : val(0), left(nullptr), right(nullptr) {}
  TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
  TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution
{
public:
  long res = 0, total = 0, sub, MOD = 1e9 + 7;
  int maxProduct(TreeNode *root)
  {
    total = s(root), s(root);
    return res % (int)(MOD);
  }

  int s(TreeNode *root)
  {
    if (!root)
      return 0;
    sub = root->val + s(root->left) + s(root->right);
    res = max(res, sub * (total - sub));
    return sub;
  }
};
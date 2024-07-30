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
  int maxDepth(TreeNode *root)
  {
    // base case
    if (!root)
      return 0;
    int maxLeftHeight = maxDepth(root->left);
    int maxRightHeight = maxDepth(root->right);
    return max(maxLeftHeight, maxRightHeight) + 1;
  }
};
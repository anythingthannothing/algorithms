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
  vector<int> ret;

  void dfs(TreeNode *node)
  {
    if (node == nullptr)
    {
      return;
    }
    ret.push_back(node->val);
    dfs(node->left);
    dfs(node->right);
  }

  vector<int> preorderTraversal(TreeNode *root)
  {
    dfs(root);
    return ret;
  }
};
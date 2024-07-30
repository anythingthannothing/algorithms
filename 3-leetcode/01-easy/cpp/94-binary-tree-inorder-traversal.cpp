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
  vector<int> answer;
  void dfs(TreeNode *node)
  {
    if (!node)
      return;
    dfs(node->left);
    answer.push_back(node->val);
    dfs(node->right);
  }

  vector<int> inorderTraversal(TreeNode *root)
  {
    dfs(root);
    return answer;
  }

  vector<int> inorderTraversalIteratively(TreeNode *root)
  {
    vector<int> answer;
    stack<TreeNode *> stk;
    while (root || !stk.empty())
    {
      while (root)
      {
        stk.push(root);
        root = root->left;
      }
      root = stk.top();
      stk.pop();
      answer.push_back(root->val);
      root = root->right;
    }
    return answer;
  }
};
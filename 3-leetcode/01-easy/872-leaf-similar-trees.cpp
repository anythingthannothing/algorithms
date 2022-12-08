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

void traverse(TreeNode *root, vector<int> &arr)
{
  if (root->left)
    traverse(root->left, arr);
  if (root->right)
    traverse(root->right, arr);
  if (root->left == NULL && root->right == NULL)
    arr.push_back(root->val);
}

class Solution
{
public:
  bool leafSimilar(TreeNode *root1, TreeNode *root2)
  {
    vector<int> arr1, arr2;
    traverse(root1, arr1);
    traverse(root2, arr2);
    return arr1 == arr2;
  }
};
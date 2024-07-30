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
    int diff = INT_MAX;
    TreeNode *prev = NULL;

    void dfs(TreeNode *node)
    {
        if (node->left)
        {
            dfs(node->left);
        }

        if (prev)
        {
            diff = min(diff, abs(prev->val - node->val));
        }

        prev = node;

        if (node->right)
        {
            dfs(node->right);
        }
    }

    int getMinimumDifference(TreeNode *root)
    {
        dfs(root);
        return diff;
    }
};
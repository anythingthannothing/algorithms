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
    void postorderTraversalHelper(TreeNode *currentNode, vector<int> &result)
    {
        if (!currentNode)
        {
            return;
        }
        postorderTraversalHelper(currentNode->left, result);
        postorderTraversalHelper(currentNode->right, result);
        result.push_back(currentNode->val);
    }

    vector<int> postorderTraversal(TreeNode *root)
    {
        vector<int> result;
        postorderTraversalHelper(root, result);
        return result;
    }
};
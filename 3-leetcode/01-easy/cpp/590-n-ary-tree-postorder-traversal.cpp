#include <bits/stdc++.h>

using namespace std;

class Node
{
public:
    int val;
    vector<Node *> children;

    Node() {}

    Node(int _val)
    {
        val = _val;
    }

    Node(int _val, vector<Node *> _children)
    {
        val = _val;
        children = _children;
    }
};

class Solution
{
public:
    vector<int> postorder(Node *root)
    {
        traverse(root);

        return result;
    }

private:
    vector<int> result;

    void traverse(Node *node)
    {
        if (!node)
        {
            return;
        }

        for (Node *child : node->children)
        {
            traverse(child);
        }

        result.push_back(node->val);
    }
};
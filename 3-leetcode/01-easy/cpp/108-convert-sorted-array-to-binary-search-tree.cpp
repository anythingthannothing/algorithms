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
  TreeNode *recur(vector<int> &arr, int left, int right)
  {
    if (left > right)
    {
      return NULL;
    }
    int mid = (left + right) / 2;
    TreeNode *node = new TreeNode(arr[mid], recur(arr, left, mid - 1), recur(arr, mid + 1, right));

    return node;
  }

  TreeNode *sortedArrayToBST(vector<int> &nums)
  {
    int left = 0, right = nums.size() - 1;
    int mid = (left + right) / 2;
    TreeNode *head = new TreeNode(nums[mid], recur(nums, left, mid - 1),
                                  recur(nums, mid + 1, right));
    return head;
  }
};

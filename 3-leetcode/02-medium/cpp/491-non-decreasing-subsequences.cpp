#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  set<vector<int>> answer;
  int n;
  void dfs(int curr, int idx, vector<int> &nums, vector<int> &currNums)
  {
    if (currNums.size() > 1)
      answer.insert(currNums);
    for (int i = idx + 1; i < n; i++)
    {
      int next = nums[i];
      if (next < curr)
        continue;
      currNums.push_back(next);
      dfs(next, i, nums, currNums);
      currNums.pop_back();
    }
  }

  vector<vector<int>> findSubsequences(vector<int> &nums)
  {
    n = nums.size();
    for (int i = 0; i < n; i++)
    {
      vector<int> currArr;
      currArr.push_back(nums[i]);
      dfs(nums[i], i, nums, currArr);
    }
    return vector(answer.begin(), answer.end());
  }
};
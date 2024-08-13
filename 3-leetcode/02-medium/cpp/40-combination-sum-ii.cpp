#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  vector<vector<int>> combinationSum2(vector<int> &candidates, int target)
  {
    vector<vector<int>> result;

    sort(candidates.begin(), candidates.end());

    vector<int> temp;

    backtrack(result, temp, candidates, target, 0);

    return result;
  }

private:
  void backtrack(vector<vector<int>> &result, vector<int> &temp,
                 vector<int> &candidates, int target, int index)
  {
    if (target == 0)
    {
      result.push_back(temp);
      return;
    }
    for (int i = index; i < candidates.size() && target >= candidates[i];
         ++i)
    {
      if (i == index || candidates[i] != candidates[i - 1])
      {
        temp.push_back(candidates[i]);
        backtrack(result, temp, candidates,
                  target - candidates[i], i + 1);
        temp.pop_back();
      }
    }
  }
};
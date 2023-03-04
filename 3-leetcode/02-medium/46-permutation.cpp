#include <bits/stdc++.h>

using namespace std;

// Solution with Recursion
class Solution
{
public:
  vector<vector<int>> permute(vector<int> &num)
  {
    vector<vector<int>> result;

    permuteRecursive(num, 0, result);
    return result;
  }

  void permuteRecursive(vector<int> &num, int begin, vector<vector<int>> &result)
  {
    if (begin >= num.size())
    {
      result.push_back(num);
      return;
    }

    for (int i = begin; i < num.size(); i++)
    {
      swap(num[begin], num[i]);
      permuteRecursive(num, begin + 1, result);
      swap(num[begin], num[i]);
    }
  }
};

// Solution with next_permutation
// class Solution
// {
// public:
//   vector<vector<int>> permute(vector<int> &nums)
//   {
//     sort(nums.begin(), nums.end());
//     vector<vector<int>> ret;
//     do
//     {
//       ret.push_back(nums);
//     } while (next_permutation(nums.begin(), nums.end()));
//     return ret;
//   }
// };
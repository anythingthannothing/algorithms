#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  vector<vector<int>> findSubsequences(vector<int> &nums)
  {
    set<vector<int>> result;
    vector<int> sequence;
    function<void(int)> backtrack;
    backtrack = [&nums, &sequence, &result, &backtrack](int index) -> void
    {
      // if we have checked all elements
      if (index == nums.size())
      {
        if (sequence.size() >= 2)
        {
          result.insert(sequence);
        }
        return;
      }
      // if the sequence remains increasing after appending nums[index]
      if (sequence.empty() || sequence.back() <= nums[index])
      {
        // append nums[index] to the sequence
        sequence.push_back(nums[index]);
        // call recursively
        backtrack(index + 1);
        // delete nums[index] from the end of the sequence
        sequence.pop_back();
      }
      // call recursively not appending an element
      backtrack(index + 1);
    };
    backtrack(0);
    return vector(result.begin(), result.end());
  }
};

// class Solution
// {
// public:
//   set<vector<int>> answer;
//   int n;
//   void dfs(int curr, int idx, vector<int> &nums, vector<int> &currNums)
//   {
//     if (currNums.size() > 1)
//       answer.insert(currNums);
//     for (int i = idx + 1; i < n; i++)
//     {
//       int next = nums[i];
//       if (next < curr)
//         continue;
//       currNums.push_back(next);
//       dfs(next, i, nums, currNums);
//       currNums.pop_back();
//     }
//   }

//   vector<vector<int>> findSubsequences(vector<int> &nums)
//   {
//     n = nums.size();
//     for (int i = 0; i < n; i++)
//     {
//       vector<int> currArr;
//       currArr.push_back(nums[i]);
//       dfs(nums[i], i, nums, currArr);
//     }
//     return vector(answer.begin(), answer.end());
//   }
// };
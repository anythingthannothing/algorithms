#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  vector<int> twoSum(vector<int> &nums, int target)
  {
    vector<int> answer;
    int n = nums.size(), curr = 0, correctPair = 0;
    unordered_map<int, int> numMap;
    for (int index = 0; index < n; index++)
    {
      curr = nums[index];
      correctPair = target - curr;
      if (numMap.find(correctPair) != numMap.end())
      {
        answer.push_back(index);
        answer.push_back(numMap[correctPair]);
        break;
      }
      numMap[curr] = index;
    }
    return answer;
  }
};
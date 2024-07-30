#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  int maxSubArray(vector<int> &nums)
  {
    int _max = INT_MIN;
    int currSum = 0;

    for (int i = 0, n = nums.size(); i < n; i++)
    {
      currSum = max(nums[i], currSum + nums[i]);
      _max = max(_max, currSum);
    }

    return _max;
  }
};
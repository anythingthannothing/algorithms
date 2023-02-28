#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  void moveZeroes(vector<int> &nums)
  {
    int n = nums.size();
    int lastNonZeroIndex = 0;

    for (int i = 0; i < n; i++)
    {
      if (nums[i] != 0)
      {
        nums[lastNonZeroIndex++] = nums[i];
      }
    }

    for (int i = lastNonZeroIndex; i < n; i++)
    {
      nums[i] = 0;
    }
  }
};

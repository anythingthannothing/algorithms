#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  int minimumAverageDifference(vector<int> &nums)
  {

    int n = size(nums), min = INT_MAX, ret = -1;

    long long pSum(0), sSum(0);
    for (int num : nums)
      sSum += num;

    for (int i = 0; i < n; i++)
    {
      pSum += nums[i];
      sSum -= nums[i];
      int a = pSum / (i + 1);
      int b = (i == n - 1) ? 0 : sSum / (n - i - 1);

      if (abs(a - b) < min)
      {
        min = abs(a - b);
        ret = i;
      }
    }
    return ret;
  }
};
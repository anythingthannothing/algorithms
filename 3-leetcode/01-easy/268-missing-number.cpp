#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  int missingNumber(vector<int> &nums)
  {
    long long n = nums.size();
    int sum = n * (n + 1) / 2;
    int numSum = accumulate(nums.begin(), nums.end(), 0);
    return sum - numSum;
  }
};
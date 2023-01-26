#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  int removeDuplicates(vector<int> &nums)
  {
    int curr = 0, n = nums.size();

    for (int i = 1; i < n; i++)
      if (nums[i] != nums[curr])
        nums[++curr] = nums[i];

    return ++curr;
  }
};
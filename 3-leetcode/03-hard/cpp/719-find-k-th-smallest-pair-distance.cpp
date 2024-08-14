#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  int smallestDistancePair(vector<int> &nums, int k)
  {
    int arraySize = nums.size();

    int maxElement = *max_element(nums.begin(), nums.end());

    vector<int> distanceBucket(maxElement + 1, 0);

    for (int i = 0; i < arraySize; ++i)
    {
      for (int j = i + 1; j < arraySize; ++j)
      {
        int distance = abs(nums[i] - nums[j]);

        distanceBucket[distance]++;
      }
    }

    for (int dist = 0; dist <= maxElement; dist++)
    {
      k -= distanceBucket[dist];

      if (k <= 0)
      {
        return dist;
      }
    }
    return -1; // Return -1 if no distance found, should not reach here
  }
};
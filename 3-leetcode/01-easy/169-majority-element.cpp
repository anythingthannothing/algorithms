#include <bits/stdc++.h>

using namespace std;

// Solution with Sorting ➡ T.C: O(nlogn) | S.C O(1)
class Solution
{
public:
  int majorityElement(vector<int> &nums)
  {
    int target = nums.size() / 2;
    sort(nums.begin(), nums.end());
    return nums[target];
  }
};

// Solution with Map ➡ T.C: O(nlogn) | S.C O(1)
// class Solution
// {
// public:
//   int majorityElement(vector<int> &nums)
//   {
//     int ans = 0;
//     int n = nums.size();
//     unordered_map<int, int> map;
//     for (int i : nums)
//     {
//       if (map.find(i) == map.end())
//       {
//         map[i] = 0;
//       }
//       map[i]++;
//     }
//     for (auto pair : map)
//     {
//       if (pair.second > n / 2)
//       {
//         ans = pair.first;
//       }
//     }
//     return ans;
//   }
// };
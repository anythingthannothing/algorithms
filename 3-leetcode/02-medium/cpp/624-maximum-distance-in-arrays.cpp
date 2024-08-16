#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  int maxDistance(vector<vector<int>> &arrays)
  {
    int _min = arrays[0][0];
    int _max = arrays[0].back();
    int max_distance = INT_MIN;

    for (int i = 1; i < arrays.size(); i++)
    {
      max_distance = max(max_distance, arrays[i].back() - _min);
      max_distance = max(max_distance, _max - arrays[i][0]);
      _min = min(_min, arrays[i][0]);
      _max = max(_max, arrays[i].back());
    }

    return max_distance;
  }
};
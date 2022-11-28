#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  vector<vector<int>> findWinners(vector<vector<int>> &matches)
  {
    vector<vector<int>> ret(2, vector<int>());
    unordered_map<int, int> loses;
    for (auto &match : matches)
    {
      if (loses.find(match[0]) == loses.end())
        loses[match[0]] = 0;
      loses[match[1]]++;
    }

    for (auto [player, count] : loses)
    {
      if (count == 0)
        ret[0].push_back(player);
      if (count == 1)
        ret[1].push_back(player);
    }

    sort(ret[0].begin(), ret[0].end());
    sort(ret[1].begin(), ret[1].end());
    return ret;
  }
};
#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  int minDeletionSize(vector<string> &strs)
  {
    int ans = 0;
    int n = strs.size(), m = strs[0].size();

    for (int col = 0; col < m; col++)
      for (int row = 1; row < n; row++)
      {
        if (strs[row][col] < strs[row - 1][col])
        {
          ans++;
          break;
        }
      }
    return ans;
  }
};
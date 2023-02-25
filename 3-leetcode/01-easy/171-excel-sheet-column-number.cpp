#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  int titleToNumber(string columnTitle)
  {
    int ans = 0;
    for (char column : columnTitle)
    {
      int curr = column - 'A' + 1;
      ans = ans * 26 + curr;
    }
    return ans;
  }
};
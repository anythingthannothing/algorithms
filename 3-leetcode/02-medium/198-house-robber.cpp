#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  int rob(vector<int> &A)
  {
    int prev2 = 0, prev = 0, cur = 0;
    for (auto i : A)
    {
      cur = max(prev, i + prev2);
      prev2 = prev;
      prev = cur;
    }
    return cur;
  }
};
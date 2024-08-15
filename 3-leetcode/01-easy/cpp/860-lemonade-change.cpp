#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  bool lemonadeChange(vector<int> &bills)
  {
    int changes[21] = {0};

    for (int i = 0; i < bills.size(); i++)
    {
      int cur = bills[i];

      changes[cur]++;

      if (cur == 10)
      {
        if (changes[5])
        {
          changes[5]--;
          continue;
        }
        return false;
      }

      if (cur == 20)
      {
        if (changes[10] && changes[5])
        {
          changes[10]--;
          changes[5]--;
          continue;
        }
        if (changes[5] >= 3)
        {
          changes[5] -= 3;
          continue;
        }
        return false;
      }
    }

    return true;
  }
};
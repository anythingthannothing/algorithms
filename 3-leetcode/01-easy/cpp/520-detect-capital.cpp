#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  bool detectCapitalUse(string word)
  {
    int n = word.size();
    if (n == 1)
      return true;
    // 첫 번째 문자가 대문자라면,
    if (word[0] - 'A' <= 25)
    {
      //
      if (word[1] - 'A' <= 25)
      {
        for (int i = 2; i < n; i++)
        {
          if (word[i] - 'A' > 25)
          {
            return false;
          }
        }
      }
      else
      {
        for (int i = 2; i < n; i++)
        {
          if (word[i] - 'A' <= 25)
          {
            return false;
          }
        }
      }
      // 첫 번째 문자가 소문자라면,
    }
    else
    {
      for (int i = 1; i < n; i++)
      {
        if (word[i] - 'A' <= 25)
        {
          return false;
        }
      }
    }
    return true;
  }
};
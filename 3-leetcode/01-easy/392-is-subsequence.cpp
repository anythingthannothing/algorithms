#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  bool isSubsequence(string s, string t)
  {
    const int sLength = s.length();
    const int tLength = t.length();

    if (sLength > tLength)
    {
      return false;
    }

    int sIndex = 0;
    int tIndex = 0;

    while (sIndex < sLength && tIndex < tLength)
    {
      if (s[sIndex] == t[tIndex])
      {
        sIndex++;
        tIndex++;
        continue;
      }

      tIndex++;
    }

    return sIndex == sLength;
  }
};

#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  string longestCommonPrefix(vector<string> strs)
  {
    for (int i = 0; i < strs[0].size(); i++)
    {
      char c = strs[0][i];
      for (int j = 1; j < strs.size(); j++)
      {
        if (i == strs[j].length() || strs[j][i] != c)
          return strs[0].substr(0, i);
      }
    }
    return strs[0];
  }
  // int n = 987654321;

  // bool check(vector<string> sArr, int i)
  // {
  //   char c = sArr[0][i];

  //   for (string s : sArr)
  //   {
  //     if (s[i] != c)
  //       return false;
  //   }
  //   return true;
  // }

  // string longestCommonPrefix(vector<string> &strs)
  // {
  //   string s = "";
  //   for (string str : strs)
  //   {
  //     int len = str.size();
  //     n = min(n, len);
  //   }

  //   for (int i = 0; i < n; i++)
  //   {
  //     if (!check(strs, i))
  //       break;
  //     s += strs[0][i];
  //   }
  //   return s;
  // }
};
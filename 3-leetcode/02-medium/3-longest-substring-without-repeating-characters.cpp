#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  int lengthOfLongestSubstring(string s)
  {
    vector<int> cArray(256, -1);
    int answer = 0;
    int len = s.size();
    int start = 0;
    for (int i = 0; i < len; i++)
    {
      char c = s[i];
      if (cArray[c] >= start)
        start = cArray[c] + 1;
      cArray[c] = i;
      answer = max(answer, i - start + 1);
    }
    return answer;
  }
};
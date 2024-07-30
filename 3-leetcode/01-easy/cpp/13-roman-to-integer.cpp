#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  int romanToInt(string s)
  {
    if (s.empty())
      return 0;

    unordered_map<char, int> romanMap = {{'I', 1},
                                         {'V', 5},
                                         {'X', 10},
                                         {'L', 50},
                                         {'C', 100},
                                         {'D', 500},
                                         {'M', 1000}};

    int n = s.size();
    int answer = romanMap[s[n - 1]];
    for (int i = n - 2; i >= 0; i--)
    {
      if (romanMap[s[i]] < romanMap[s[i + 1]])
      {
        answer -= romanMap[s[i]];
      }
      else
        answer += romanMap[s[i]];
    }
    return answer;
  }
};
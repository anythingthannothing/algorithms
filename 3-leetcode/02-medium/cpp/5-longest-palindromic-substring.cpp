#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  string longestPalindrome(string s)
  {
    string answer = "";
    int n = s.size();
    bool dp[n][n];
    fill(&dp[0][0], &dp[0][0] + n * n, 0);
    for (int i = 0; i < n; i++)
      dp[i][i] = true;
    answer += s[0];

    for (int start = n - 1; start >= 0; start--)
      for (int end = start + 1; end < n; end++)
        if (s[start] == s[end])
        {
          if (end - start == 1 || dp[start + 1][end - 1])
          {
            dp[start][end] = true;
            if (answer.size() < end - start + 1)
              answer = s.substr(start, end - start + 1);
          }
        }
    return answer;
  }
};
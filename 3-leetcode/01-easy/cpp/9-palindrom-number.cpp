#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  bool isPalindrome(int x)
  {
    if (x < 0)
      return false;

    int temp = x;
    long long reverse = 0;
    while (temp > 0)
    {
      reverse = 10 * reverse + (temp % 10);
      temp /= 10;
    }
    return x == reverse ? true : false;
  }

  bool isPalindrome2(int x)
  {
    string s = to_string(x);
    int start = 0, end = s.size() - 1;
    while (start < end)
      if (s[start++] != s[end--])
        return false;
    return true;
  }
};
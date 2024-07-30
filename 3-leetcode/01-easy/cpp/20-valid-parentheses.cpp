#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  stack<char> stk;
  bool isValid(string s)
  {
    for (char c : s)
    {
      if (c == '(' || c == '{' || c == '[')
      {
        stk.push(c);
        continue;
      }
      if (stk.empty() || (stk.top() == '(' && c != ')') || (stk.top() == '{' && c != '}') || (stk.top() == '[' && c != ']'))
        return false;
      stk.pop();
    }
    return stk.empty();
  }
};
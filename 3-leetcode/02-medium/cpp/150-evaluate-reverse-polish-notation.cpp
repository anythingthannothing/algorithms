#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  bool isOperator(char token)
  {
    if (token == '+' || token == '/' || token == '-' || token == '*')
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  long long operation(char token, long long a, long long b)
  {
    if (token == '+')
      return a + b;
    if (token == '-')
      return a - b;
    if (token == '*')
      return a * b;
    if (token == '/')
    {
      if (a * b < 0)
      {
        return -1 * (abs(a) / abs(b));
      }
      else
      {
        return abs(a) / abs(b);
      }
    }
    return 0;
  }
  int evalRPN(vector<string> &tokens)
  {
    vector<long long> answer;
    for (int i = 0; i < tokens.size(); i++)
    {
      if (isOperator(tokens[i][0]) && tokens[i].size() == 1)
      {
        long long a = answer[answer.size() - 1];
        answer.pop_back();
        long long b = answer[answer.size() - 1];
        answer.pop_back();
        long long result = operation(tokens[i][0], b, a);
        answer.push_back(result);
      }
      else
      {
        long result = stol(tokens[i]);
        answer.push_back(result);
      }
    }
    return answer[0];
  }
};
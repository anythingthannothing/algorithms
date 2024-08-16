#include <bits/stdc++.h>

using namespace std;

string s;

bool check(string s)
{
  stack<char> stk;
  for (char c : s)
  {
    if (c == '(' || c == '[')
    {
      stk.push(c);
    }
    else if (c == ')')
    {
      if (stk.empty() || stk.top() == '[')
      {
        return false;
      }
      else
      {
        stk.pop();
      }
    }
    else if (c == ']')
    {
      if (stk.empty() || stk.top() == '(')
      {
        return false;
      }
      else
      {
        stk.pop();
      }
    }
  }

  return stk.empty();
}

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);

  while (true)
  {
    getline(cin, s);
    if (s == ".")
    {
      break;
    }
    if (check(s))
    {
      cout << "yes\n";
    }
    else if (!check(s))
    {
      cout << "no\n";
    }
  }

  return 0;
}
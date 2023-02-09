#include <bits/stdc++.h>

using namespace std;

string s, t, ret;
stack<char> stk;

int main()
{
  cin >> s >> t;
  int n = t.size();
  for (char c : s)
  {
    stk.push(c);
    if (stk.size() >= n && stk.top() == t[t.size() - 1])
    {
      string temp = "";
      for (char i : t)
      {
        temp += stk.top();
        stk.pop();
      }
      reverse(temp.begin(), temp.end());
      if (temp != t)
      {
        for (char c : temp)
        {
          stk.push(c);
        }
      }
    }
  }
  if (stk.empty())
  {
    cout << "FRULA";
  }
  else
  {
    while (stk.size())
    {
      ret += stk.top();
      stk.pop();
    }
    reverse(ret.begin(), ret.end());
    cout << ret;
  }

  return 0;
}

// int main()
// {
//   cin >> s >> t;
//   int n = t.size();
//   for (char c : s)
//   {
//     ret += c;
//     if (ret.size() >= n && ret.substr(ret.size() - n, n) == t)
//     {
//       ret.erase(ret.end() - n, ret.end());
//     }
//   }
//   if (!ret.size())
//     cout << "FRULA";
//   else
//     cout << ret;
//   return 0;
// }

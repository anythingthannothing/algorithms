#include <bits/stdc++.h>

using namespace std;

int n, ret;
string s;
stack<int> stk;

// Solution with Index
int main()
{
  cin >> n >> s;
  stk.push(-1);
  for (int i = 0; i < n; i++)
  {
    if (s[i] == '(')
    {
      stk.push(i);
    }
    if (s[i] == ')')
    {
      stk.pop();
      if (stk.size())
      {
        ret = max(ret, i - stk.top());
      }
      else
      {
        stk.push(i);
      }
    }
  }
  cout << ret;
  return 0;
}

// Solution with Array
// int n, a[200000], ret, cnt;
// string s;
// stack<int> stk;

// int main()
// {
//   cin >> n >> s;
//   for (int i = 0; i < n; i++)
//   {
//     if (s[i] == '(')
//       stk.push(i);
//     else if (!stk.empty())
//     {
//       a[i] = a[stk.top()] = 1;
//       stk.pop();
//     }
//   }
//   for (int i = 0; i < n; i++)
//   {
//     if (a[i])
//     {
//       cnt++;
//       ret = max(ret, cnt);
//     }
//     else
//       cnt = 0;
//   }
//   cout << ret;
//   return 0;
// }
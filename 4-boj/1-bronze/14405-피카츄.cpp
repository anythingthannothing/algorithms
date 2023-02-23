#include <bits/stdc++.h>

using namespace std;

bool ret = true;
string s;

int main()
{
  cin >> s;
  int n = s.size();
  for (int i = 0; i < n;)
    if (s.substr(i, 2) == "pi" || s.substr(i, 2) == "ka")
      i += 2;
    else if (s.substr(i, 3) == "chu")
      i += 3;
    else
    {
      ret = false;
      break;
    }
  if (ret)
    cout << "YES";
  else
    cout << "NO";

  return 0;
}
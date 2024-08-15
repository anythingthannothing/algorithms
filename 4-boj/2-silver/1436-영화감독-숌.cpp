#include <bits/stdc++.h>

using namespace std;

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);

  int n;
  cin >> n;

  int i = 666;

  for (;; i++)
  {
    if (to_string(i).find("666") != string::npos)
    {
      n--;
    }
    if (n == 0)
    {
      break;
    }
  }

  cout << i << "\n";

  return 0;
}
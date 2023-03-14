#include <bits/stdc++.h>

using namespace std;

int t, n, m, curr;
unordered_map<int, bool> nMap;

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);
  cin >> t;

  while (t--)
  {
    cin >> n;
    nMap.clear();
    for (int i = 0; i < n; i++)
    {
      cin >> curr;
      nMap[curr] = true;
    }
    cin >> m;
    for (int i = 0; i < m; i++)
    {
      cin >> curr;
      if (nMap.find(curr) == nMap.end())
      {
        cout << 0 << '\n';
      }
      else
      {
        cout << 1 << '\n';
      }
    }
  }

  return 0;
}
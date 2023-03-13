#include <bits/stdc++.h>

using namespace std;

int n, m, curr, cnt, ans;
unordered_map<int, bool> nMap;

int main()
{
  cin >> n >> m;

  for (int i = 0; i < n; i++)
  {
    cin >> curr;
    nMap[curr] = true;
  }

  for (int i = 0; i < m; i++)
  {
    cin >> curr;
    if (nMap.find(curr) != nMap.end())
    {
      cnt++;
    }
  }

  ans += n + m - cnt * 2;

  cout << ans;

  return 0;
}
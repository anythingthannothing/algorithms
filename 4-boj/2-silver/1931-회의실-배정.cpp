#include <bits/stdc++.h>

using namespace std;

int n, s, e, cnt;

vector<pair<int, int>> tArray;

int main()
{
  cin >> n;

  while (n--)
  {
    cin >> s >> e;
    tArray.push_back({e, s});
  }

  sort(tArray.begin(), tArray.end());

  e = 0;

  for (auto it : tArray)
  {

    if (e <= it.second)
    {
      cnt++;
      e = it.first;
    }
  }

  cout << cnt;

  return 0;
}

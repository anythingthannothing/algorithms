#include <bits/stdc++.h>

using namespace std;

int n, a, t, ret;
vector<pair<int, int>> tArray;

int main()
{
  cin >> n;
  while (n--)
  {
    cin >> a >> t;
    tArray.push_back({a, t});
  }
  sort(tArray.begin(), tArray.end());
  for (pair<int, int> it : tArray)
  {
    ret = max(ret, it.first);
    ret += it.second;
  }
  cout << ret;
  return 0;
}
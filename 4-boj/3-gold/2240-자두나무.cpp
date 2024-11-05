#include <bits/stdc++.h>

using namespace std;

int t, w, dp[1000][2][30], a[1000];

int go(int idx, int tree, int cnt)
{
  if (cnt < 0)
  {
    return -1e9;
  }

  if (idx == t)
  {
    return 0;
  }

  int &ret = dp[idx][tree][cnt];

  if (~ret)
  {
    return ret;
  }

  return ret = max(go(idx + 1, tree ^ 1, cnt - 1), go(idx + 1, tree, cnt)) + (tree == a[idx] - 1);
}

int main()
{
  cin >> t >> w;

  memset(dp, -1, sizeof(dp));

  for (int i = 0; i < t; i++)
  {
    cin >> a[i];
  }

  cout << max(go(0, 1, w - 1), go(0, 0, w)) << '\n';

  return 0;
}
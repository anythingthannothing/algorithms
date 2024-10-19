#include <bits/stdc++.h>

using namespace std;

int n, m, curr, cnt, a[100000], ans, _max, mid;

bool check(int mid)
{
  curr = mid, cnt = 1;
  for (int i = 0; i < n; i++)
  {
    if (a[i] > mid)
    {
      return false;
    }
    if (curr < a[i])
    {
      cnt++;
      curr = mid - a[i];
      continue;
    }
    curr -= a[i];
  }
  return cnt <= m;
}

int main()
{
  cin >> n >> m;

  for (int i = 0; i < n; i++)
  {
    cin >> a[i];
    _max = max(a[i], _max);
  }

  int lo = _max, hi = 1000000000;

  while (lo <= hi)
  {
    mid = lo + (hi - lo) / 2;
    if (check(mid))
    {
      ans = mid;
      hi = mid - 1;
    }
    else
    {
      lo = mid + 1;
    }
  }

  cout << ans;

  return 0;
}
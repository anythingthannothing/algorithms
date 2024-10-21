#include <bits/stdc++.h>

using namespace std;
typedef long long ll;

ll x, y, z, lo, hi, mid, curr, ans;

bool check(int mid)
{
  curr = (y + mid) * 100 / (x + mid);
  return z < curr;
}

int main()
{
  cin >> x >> y;
  z = y * 100 / x;

  if (y * 100 / x >= 99)
  {
    cout << -1;
    return 0;
  }

  lo = 0, hi = 1000000000;
  while (lo <= hi)
  {
    mid = lo + (hi - lo) / 2;
    if (check(mid))
    {
      ans = mid;
      hi = mid - 1;
      continue;
    }
    lo = mid + 1;
  }

  cout << ans;

  return 0;
}
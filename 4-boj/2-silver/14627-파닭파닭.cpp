#include <bits/stdc++.h>

using namespace std;

typedef long long ll;

ll s, c, l, ans, a[1000000], sum, _max = 0;

bool check(ll mid)
{
  ll cnt = 0;
  for (int i = 0; i < s; i++)
  {
    cnt += a[i] / mid;
  }
  return cnt >= c;
}

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);

  cin >> s >> c;

  for (int i = 0; i < s; i++)
  {
    cin >> a[i];
    _max = max(_max, a[i]);
    sum += a[i];
  }

  ll lo = 1, hi = _max, mid;

  while (lo <= hi)
  {
    mid = lo + (hi - lo) / 2;
    if (check(mid))
    {
      lo = mid + 1;
      ans = mid;
    }
    else
    {
      hi = mid - 1;
    }
  }

  cout << sum - ans * c;

  return 0;
}
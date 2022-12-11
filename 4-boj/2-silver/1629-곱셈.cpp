#include <bits/stdc++.h>

using namespace std;
typedef long long ll;

int a, b, c;

ll go(ll a, ll b)
{
  if (b == 1)
    return a % c;
  ll ret = go(a, b / 2);
  ret = (ret * ret) % c;
  if (b & 1)
    ret = (ret * a) % c;
  return ret;
}

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);

  cin >> a >> b >> c;
  cout << go(a, b);

  return 0;
}
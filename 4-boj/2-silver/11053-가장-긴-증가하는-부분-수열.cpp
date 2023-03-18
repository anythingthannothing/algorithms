#include <bits/stdc++.h>

using namespace std;

int n, a[1000], cnt[1000], ans;

int main()
{
  cin >> n;

  for (int i = 0; i < n; i++)
    cin >> a[i];

  for (int i = 0; i < n; i++)
  {
    int min = 0;
    for (int j = 0; j < i; j++)
    {
      if (a[j] < a[i] && min < cnt[j])
        min = cnt[j];
    }
    cnt[i] = min + 1;
    ans = max(ans, cnt[i]);
  }
  cout << ans;

  return 0;
}
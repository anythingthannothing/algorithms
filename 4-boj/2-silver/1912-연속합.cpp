#include <bits/stdc++.h>

using namespace std;

int n, sum, curr, ans = -1001;

int main()
{
  cin >> n;

  for (int i = 0; i < n; i++)
  {
    cin >> curr;
    sum += curr;
    ans = max(ans, sum);
    if (sum < 0)
    {
      sum = 0;
    }
  }

  cout << ans;
  return 0;
}

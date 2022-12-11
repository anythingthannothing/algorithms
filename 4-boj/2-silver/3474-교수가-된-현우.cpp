#include <bits/stdc++.h>

using namespace std;

int t, n;
int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);

  cin >> t;

  while (t--)
  {
    cin >> n;
    int fiveCount = 0;
    for (int j = 5; j <= n; j *= 5)
      fiveCount += n / j;
    cout << fiveCount << "\n";
  }
  return 0;
}
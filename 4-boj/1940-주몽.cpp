#include <bits/stdc++.h>

using namespace std;

int n, m, curr, res;
int candi[100001];

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);

  cin >> n >> m;
  if (m > 200000)
  {
    cout << 0;
    return 0;
  }

  for (int i = 0; i < n; i++)
  {
    cin >> curr;
    if (m - curr >= 0 && candi[m - curr])
    {
      res++;
      candi[m - curr]--;
    }
    else
      candi[curr]++;
  }
  cout << res;
  return 0;
}
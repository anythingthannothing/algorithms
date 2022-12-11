#include <bits/stdc++.h>

using namespace std;

int A, B, C, arr, dep, total;
int cnt[101];

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> A >> B >> C;

  for (int i = 0; i < 3; i++)
  {
    cin >> arr >> dep;
    for (int i = arr; i < dep; i++)
    {
      cnt[i]++;
    }
  }

  for (int j = 0; j < 102; j++)
  {
    if (cnt[j] == 1)
      total += cnt[j] * A;
    if (cnt[j] == 2)
      total += cnt[j] * B;
    if (cnt[j] == 3)
      total += cnt[j] * C;
  }
  cout << total;
  return 0;
}
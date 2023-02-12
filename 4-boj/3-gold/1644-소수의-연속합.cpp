#include <bits/stdc++.h>

using namespace std;

int ret, n, lo, hi, sum;
bool che[4000001];
vector<int> prime;

int main()
{
  cin >> n;

  for (int i = 2; i <= n; i++)
  {
    if (che[i])
      continue;
    for (int j = 2 * i; j <= n; j += i)
    {
      che[j] = 1;
    }
  }
  for (int i = 2; i <= n; i++)
  {
    if (!che[i])
      prime.push_back(i);
  }
  int p = prime.size();

  while (true)
  {
    if (sum >= n)
      sum -= prime[lo++];
    else if (hi == p)
      break;
    else
      sum += prime[hi++];
    if (sum == n)
      ret++;
  }
  cout << ret;
  return 0;
}

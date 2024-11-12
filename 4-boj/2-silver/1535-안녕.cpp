#include <bits/stdc++.h>

using namespace std;

int n, dp[101], cost[20], joy[20];

int main()
{
  cin >> n;

  for (int i = 0; i < n; i++)
  {
    cin >> cost[i];
  }

  for (int i = 0; i < n; i++)
  {
    cin >> joy[i];
  }

  for (int i = 0; i < n; i++)
  {
    for (int j = 100; j > cost[i]; j--)
    {
      dp[j] = max(dp[j], dp[j - cost[i]] + joy[i]);
    }
  }

  cout << dp[100];

  return 0;
}
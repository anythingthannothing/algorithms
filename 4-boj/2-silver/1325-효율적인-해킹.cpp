#include <bits/stdc++.h>

using namespace std;

vector<int> adj[10001];
int n, m, a, b, visited[10001], dp[10001];

int dfs(int here)
{
  visited[here] = 1;
  int ret = 1;
  for (int there : adj[here])
  {
    if (visited[there])
    {
      continue;
    }
    ret += dfs(there);
  }
  return ret;
}

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);

  int _max = INT_MIN;

  cin >> n >> m;

  while (m--)
  {
    cin >> a >> b;
    adj[b].push_back(a);
  }

  for (int i = 1; i <= n; i++)
  {
    memset(visited, 0, sizeof(visited));
    dp[i] = dfs(i);
    _max = max(dp[i], _max);
  }

  for (int i = 1; i <= n; i++)
    if (_max == dp[i])
    {
      cout << i << " ";
    }

  return 0;
}
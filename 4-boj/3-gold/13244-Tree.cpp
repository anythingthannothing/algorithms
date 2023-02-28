#include <bits/stdc++.h>

using namespace std;

int t, n, m, a, b, visited[1001], cnt;
vector<int> adj[1001];
string s;

void dfs(int here)
{
  visited[here] = 1;
  for (int there : adj[here])
  {
    if (!visited[there])
      dfs(there);
  }
  return;
}

int main()
{
  cin >> t;
  while (t--)
  {
    for (int i = 0; i < 1000; i++)
      adj[i].clear();
    fill(visited, visited + 1000, 0);
    cnt = 0;
    cin >> n >> m;
    for (int i = 0; i < m; i++)
    {
      cin >> a >> b;
      adj[a].push_back(b);
      adj[b].push_back(a);
    }
    for (int i = 1; i <= n; i++)
    {
      if (!visited[i])
      {
        dfs(i);
        cnt++;
      }
    }
    if (m == n - 1 && cnt == 1)
      cout << "tree" << '\n';
    else
    {
      cout << "graph" << '\n';
    }
  }
  return 0;
}
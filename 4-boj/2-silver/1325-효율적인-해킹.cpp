#include <bits/stdc++.h>

using namespace std;

vector<int> arr[10001];
int mx, n, m, a, b, visited[10001], dp[10001];

int dfs(int here)
{
  visited[here] = 1;
  int ret = 1;
  for (int there : arr[here])
  {
    if (visited[there])
      continue;
    ret += dfs(there);
  }
  return ret;
}

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);

  cin >> n >> m;

  while (m--)
  {
    cin >> a >> b;
    arr[b].push_back(a);
  }

  for (int i = 1; i <= n; i++)
  {
    memset(visited, 0, sizeof(visited));
    dp[i] = dfs(i);
    mx = max(dp[i], mx);
  }

  for (int i = 1; i <= n; i++)
    if (mx == dp[i])
      cout << i << " ";

  return 0;
}

// 실패한 풀이,,,
// int n, m, a, b, arr[100001][100001];
// vector<pair<int, int>> cnt;

// bool cmp(pair<int, int> a, pair<int, int> b)
// {
//   if (a.second == b.second)
//     return a.second < b.second;
//   return a.first > b.first;
// }

// int main()
// {
//   ios_base::sync_with_stdio(0);
//   cin.tie(0);
//   cout.tie(0);

//   cin >> n >> m;

//   while (m--)
//   {
//     cin >> a >> b;
//     arr[b][a] = 1;
//   }

//   for (int i = 1; i <= n; i++)
//   {
//     for (int j = 1; j <= n; j++)
//     {
//       if (arr[i][j] == 1)
//       {
//         for (int k = 1; k <= n; k++)
//         {
//           if (arr[k][j] == 1 && k != i)
//           {
//             arr[i][k] = 1;
//           }
//         }
//       }
//     }
//   }

//   for (int i = 1; i <= n; i++)
//   {
//     int total = 0;
//     for (int j = 1; j <= n; j++)
//     {
//       if (arr[i][j] == 1)
//         total++;
//     }
//     cnt.push_back({i, total});
//   }

//   sort(cnt.begin(), cnt.end(), cmp);

//   cout << cnt[0].first;

//   for (int i = 1; i < n; i++)
//   {
//     if (cnt[i].second == cnt[0].second)
//     {
//       cout << " " << cnt[i].first;
//       continue;
//     }
//     break;
//   }

//   return 0;
// }
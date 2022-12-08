#include <bits/stdc++.h>

using namespace std;

int n, r, temp, root;
vector<int> arr[54];

int dfs(int here)
{
  int ret = 0;
  int child = 0;
  for (int there : arr[here])
  {
    if (there == r)
      continue;
    ret += dfs(there);
    child++;
  }
  if (child == 0)
    return 1;
  return ret;
}

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);
  cin >> n;
  for (int i = 0; i < n; i++)
  {
    cin >> temp;
    if (temp == -1)
      root = i;
    else
      arr[temp].push_back(i);
  }
  cin >> r;
  if (r == root)
  {
    cout << 0 << "\n";
    return 0;
  }
  cout << dfs(root) << "\n";
  return 0;
}

// 실패한 풀이,,,
// int n, curr, target, arr[54];
// unordered_map<int, vector<int>> nMap;

// void bfs(int target)
// {
//   arr[target] = -1;
//   if (nMap.find(target) == nMap.end())
//     return;
//   for (int i : nMap[target])
//     bfs(i);
// }

// int main()
// {
//   ios_base::sync_with_stdio(0);
//   cin.tie(0);
//   cout.tie(0);

//   cin >> n;
//   for (int i = 1; i < n; i++)
//   {
//     arr[i] = i;
//     cin >> curr;
//     if (nMap.find(curr) == nMap.end())
//     {
//       nMap[curr] = {};
//     }
//     nMap[curr].push_back(i);
//   }

//   cin >> target;

//   bfs(target);

//   int leaf = 0;
//   for (int i = 0; i < n; i++)
//   {
//     if (arr[i] == -1)
//     {
//       if (nMap.find(i) != nMap.end())
//       {
//         nMap.erase(target);
//       }
//       continue;
//     }
//     if (nMap.find(i) == nMap.end())
//       leaf++;
//   }

//   cout << leaf;

//   return 0;
// }
#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  vector<int> dfs(vector<vector<int>> &adj, string &labels, int parent, vector<int> &result)
  {
    vector<int> ans(26, 0);
    result[parent] = 1;
    ans[labels[parent] - 'a'] = 1;

    for (int j = 0; j < adj[parent].size(); j++)
      if (!result[adj[parent][j]])
      {
        vector<int> tmp = dfs(adj, labels, adj[parent][j], result);
        for (int k = 0; k < 26; k++)
          ans[k] += tmp[k];
      }

    result[parent] = ans[labels[parent] - 'a'];

    return ans;
  }

  vector<int> countSubTrees(int n, vector<vector<int>> &edges, string labels)
  {
    vector<vector<int>> adj(n);
    vector<int> result(n, 0);
    for (int i = 0; i < edges.size(); i++)
    {
      adj[edges[i][0]].push_back(edges[i][1]);
      adj[edges[i][1]].push_back(edges[i][0]);
    }

    dfs(adj, labels, 0, result);
    return result;
  }
};
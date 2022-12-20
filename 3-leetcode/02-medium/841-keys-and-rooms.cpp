#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  bool canVisitAllRooms(vector<vector<int>> &rooms)
  {
    unordered_map<int, int> m;
    vector<int> v(rooms.size(), 0);
    queue<int> q;
    q.push(0);
    m[0] = 1;
    while (!q.empty())
    {
      int node = q.front();
      v[node] = 1;
      q.pop();
      for (int i = 0; i < rooms[node].size(); i++)
      {
        if (m.find(rooms[node][i]) == m.end())
        {
          m[rooms[node][i]] = 1;
          q.push(rooms[node][i]);
        }
      }
    }

    for (int i = 0; i < v.size(); i++)
    {
      if (v[i] == 0)
        return false;
    }
    return true;
  }
};
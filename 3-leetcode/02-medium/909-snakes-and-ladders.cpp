#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  int snakesAndLadders(vector<vector<int>> &board)
  {
    int n = board.size();
    vector<pair<int, int>> cells(n * n + 1);
    int label = 1;
    vector<int> columns(n);
    iota(columns.begin(), columns.end(), 0);
    for (int row = n - 1; row >= 0; row--)
    {
      for (int column : columns)
      {
        cells[label++] = {row, column};
      }
      reverse(columns.begin(), columns.end());
    }
    vector<int> dist(n * n + 1, -1);
    queue<int> q;
    dist[1] = 0;
    q.push(1);
    while (!q.empty())
    {
      int curr = q.front();
      q.pop();
      for (int next = curr + 1; next <= min(curr + 6, n * n); next++)
      {
        auto [row, column] = cells[next];
        int destination = board[row][column] != -1 ? board[row][column] : next;
        if (dist[destination] == -1)
        {
          dist[destination] = dist[curr] + 1;
          q.push(destination);
        }
      }
    }
    return dist[n * n];
  }
};

// class Solution
// {
// public:
//   int snakesAndLadders(vector<vector<int>> &board)
//   {
//     int n = board.size();
//     unordered_map<int, int> shortcutMap;

//     for (int i = 0; i < n; i++)
//       for (int j = 0; j < n; j++)
//         if (board[i][j] != -1)
//         {
//           int curr = n * n - (i * n) - (n - 1 - j);
//           shortcutMap[curr] = board[i][j];
//         }

//     int answer = 0;
//     int flag = true;
//     queue<int> q;
//     q.push(1);

//     while (flag && q.size())
//     {
//       answer++;
//       if (answer > 20)
//       {
//         return -1;
//       }
//       int m = q.size();
//       for (int i = 0; i < m && flag == true; i++)
//       {
//         int curr = q.front();
//         cout << answer << ' ' << curr << '\n';
//         if (curr == n * n)
//         {
//           flag = false;
//           break;
//         }
//         q.pop();
//         for (int j = 1; j <= 6; j++)
//         {
//           int nxt = curr + j;
//           if (shortcutMap.find(nxt) != shortcutMap.end() && shortcutMap.find(shortcutMap[nxt]) == shortcutMap.end())
//           {
//             q.push(shortcutMap[nxt]);
//             continue;
//           }
//           if (nxt <= n * n)
//             q.push(nxt);
//         }
//       }
//     }
//     return answer - 1;
//   }
// };
#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    int minimumTime(vector<vector<int>> &grid)
    {
        if (grid[0][1] > 1 && grid[1][0] > 1)
        {
            return -1;
        }

        vector<vector<int>> dirs = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};

        n = grid.size(), m = grid[0].size();

        vector<vector<bool>> visited(n, vector<bool>(m, false));
        priority_queue<vector<int>, vector<vector<int>>, greater<>> pq;

        pq.push({grid[0][0], 0, 0});

        while (!pq.empty())
        {
            auto curr = pq.top();
            pq.pop();
            int time = curr[0], row = curr[1], col = curr[2];

            if (row == n - 1 && col == m - 1)
            {
                return time;
            }

            if (visited[row][col])
            {
                continue;
            }

            visited[row][col] = true;

            for (auto &dir : dirs)
            {
                int ny = row + dir[0], nx = col + dir[1];
                if (!isValid(visited, ny, nx))
                {
                    continue;
                }

                int waitTime =
                    ((grid[ny][nx] - time) % 2 == 0) ? 1 : 0;
                int nextTime = max(grid[ny][nx] + waitTime, time + 1);
                pq.push({nextTime, ny, nx});
            }
        }
        return -1;
    }

private:
    int n, m;

    bool isValid(vector<vector<bool>> &visited, int y, int x)
    {
        return y >= 0 && x >= 0 && y < n &&
               x < m && !visited[y][x];
    }
};
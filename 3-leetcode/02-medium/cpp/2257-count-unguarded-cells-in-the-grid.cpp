#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    int countUnguarded(int m, int n, vector<vector<int>> &guards, vector<vector<int>> &walls)
    {
        int guarded = 0;
        vector<vector<int>> board = vector<vector<int>>(m, vector<int>(n, 0));
        vector<pair<int, int>> dirs = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};

        for (vector<int> &guard : guards)
        {
            board[guard[0]][guard[1]] = 1;
        }

        for (vector<int> &wall : walls)
        {
            board[wall[0]][wall[1]] = 1;
        }

        for (vector<int> &guard : guards)
        {
            for (pair<int, int> &dir : dirs)
            {
                int yDir = dir.first;
                int xDir = dir.second;
                int ny = guard[0] + yDir;
                int nx = guard[1] + xDir;
                while (ny >= 0 && nx >= 0 && ny < m && nx < n && board[ny][nx] != 1)
                {
                    if (board[ny][nx] != -1)
                    {
                        board[ny][nx] = -1;
                        guarded++;
                    }
                    ny += yDir;
                    nx += xDir;
                }
            }
        }

        return m * n - guards.size() - walls.size() - guarded;
    }
};
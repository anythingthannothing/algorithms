#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    int nearestExit(vector<vector<char>> &maze, vector<int> &entrance)
    {
        queue<pair<int, int>> queue;
        queue.push({entrance[0], entrance[1]});

        int steps = 1;
        int rows = maze.size();
        int cols = maze[0].size();

        vector<vector<int>> dir = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};

        maze[entrance[0]][entrance[1]] = '+';
        while (!queue.empty())
        {
            int l = queue.size();
            for (int k = 0; k < l; k++)
            {
                auto [i, j] = queue.front();
                queue.pop();

                for (int l = 0; l < 4; l++)
                {
                    int x = i + dir[l][0];
                    int y = j + dir[l][1];
                    if (x < 0 || y < 0 || x >= rows || y >= cols || maze[x][y] == '+') continue;
                    if (x == 0 || y == 0 || x == rows - 1 || y == cols - 1) return steps;
                    maze[x][y] = '+';
                    queue.push({x, y});
                }
            }
            steps++;
        }
        return -1;
    }
};
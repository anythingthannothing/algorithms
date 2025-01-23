#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    int countServers(const vector<vector<int>> &grid)
    {
        int res = 0;
        vector<int> rowCounts(size(grid[0]), 0), colCounts(size(grid), 0);

        for (int row = 0; row < size(grid); ++row)
        {
            for (int col = 0; col < size(grid[0]); ++col)
                if (grid[row][col])
                {
                    rowCounts[col]++;
                    colCounts[row]++;
                }
        }

        for (int row = 0; row < size(grid); ++row)
            for (int col = 0; col < size(grid[0]); ++col)
                if (grid[row][col])
                    res +=
                        rowCounts[col] > 1 || colCounts[row] > 1;

        return res;
    }
};
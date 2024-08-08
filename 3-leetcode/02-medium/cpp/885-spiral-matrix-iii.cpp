#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    vector<vector<int>> spiralMatrixIII(int rows, int cols, int rStart,
                                        int cStart)
    {
        vector<pair<int, int>> dir{{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        vector<vector<int>> traversed;

        for (int step = 1, direction = 0; traversed.size() < rows * cols;)
        {
            for (int i = 0; i < 2; i++)
            {
                for (int j = 0; j < step; ++j)
                {
                    if (rStart >= 0 && rStart < rows && cStart >= 0 &&
                        cStart < cols)
                    {
                        traversed.push_back({rStart, cStart});
                    }
                    rStart += dir[direction].first;
                    cStart += dir[direction].second;
                }

                direction = (direction + 1) % 4;
            }
            step++;
        }
        return traversed;
    }
};
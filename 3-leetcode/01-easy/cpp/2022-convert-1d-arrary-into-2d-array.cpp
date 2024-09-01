#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    vector<vector<int>> construct2DArray(vector<int> &original, int m, int n)
    {
        int length = original.size();

        if (length != m * n)
        {
            return {};
        }

        vector<vector<int>> result(m, vector<int>(n, 0));

        for (int i = 0; i < length; i++)
        {
            result[i / n][i % n] = original[i];
        }

        return result;
    }
};
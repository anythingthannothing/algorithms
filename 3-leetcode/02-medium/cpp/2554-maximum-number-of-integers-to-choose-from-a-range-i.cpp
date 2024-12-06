#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    int maxCount(vector<int> &banned, int n, int maxSum)
    {
        int res = 0;
        unordered_set<int> banSet(banned.begin(), banned.end());

        for (int i = 1; i <= n; i++)
        {
            if (banSet.count(i))
            {
                continue;
            }

            if (maxSum - i < 0)
            {
                return res;
            }

            maxSum -= i;
            res++;
        }

        return res;
    }
};
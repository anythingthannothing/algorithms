#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    int minimizedMaximum(int n, vector<int> &quantities)
    {
        int res = INT_MAX;

        int lt = 0, rt = *max_element(quantities.begin(), quantities.end());

        while (lt <= rt)
        {
            int count = 0;
            int mid = lt + (rt - lt) / 2;

            for (int i : quantities)
            {
                count += i / mid;

                if (i % mid)
                {
                    count++;
                }
            }

            if (count <= n)
            {
                res = min(res, mid);
                rt = mid - 1;
            }
            else
            {
                lt = mid + 1;
            }
        }

        return res;
    }
};
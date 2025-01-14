#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    vector<int> findThePrefixCommonArray(vector<int> &A, vector<int> &B)
    {
        int n = A.size();
        vector<int> res(n), freq(n + 1, 0);
        int commonCount = 0;

        for (int i = 0; i < n; i++)
        {
            if (++freq[A[i]] == 2)
            {
                commonCount++;
            }

            if (++freq[B[i]] == 2)
            {
                commonCount++;
            }

            res[i] = commonCount;
        }

        return res;
    }
};
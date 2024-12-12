#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    long pickGifts(vector<int> &gifts, int k)
    {
        long res = 0;

        priority_queue<int, vector<int>, less<int>> q(gifts.begin(), gifts.end());

        while (k--)
        {
            int rest = sqrt(q.top());
            q.pop();
            q.push(rest);
        }

        while (!q.empty())
        {
            res += q.top();
            q.pop();
        }

        return res;
    }
};
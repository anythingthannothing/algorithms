#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    long long maxKelements(vector<int> &nums, int k)
    {
        int score = 0;
        priority_queue<int, vector<int>, less<int>> pq;

        for (int i : nums)
        {
            pq.push(i);
        }

        while (k--)
        {
            int cur = pq.top();
            pq.pop();
            score += cur;

            pq.push((int)ceil(cur / 3));
        }

        return score;
    }
};
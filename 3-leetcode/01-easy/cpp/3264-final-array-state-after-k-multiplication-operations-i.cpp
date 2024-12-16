#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    vector<int> getFinalState(vector<int> &nums, int k, int multiplier)
    {
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> q;

        for (int i = 0; i < nums.size(); i++)
        {
            q.push({nums[i], i});
        }

        while (k--)
        {
            pair<int, int> cur = q.top();
            q.pop();
            nums[cur.second] = cur.first * multiplier;

            q.push({nums[cur.second], cur.second});
        }

        return nums;
    }
};
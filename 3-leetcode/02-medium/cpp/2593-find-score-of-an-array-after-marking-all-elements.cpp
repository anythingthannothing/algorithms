#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    long findScore(vector<int> &nums)
    {
        long score = 0;
        vector<bool> marked(nums.size());

        auto cmp = [](pair<int, int> &pair1, pair<int, int> &pair2)
        {
            if (pair1.first != pair2.first)
            {
                return pair1.first > pair2.first;
            }

            return pair1.second > pair2.second;
        };

        priority_queue<pair<int, int>, vector<pair<int, int>>, decltype(cmp)>
            q(cmp);

        for (int i = 0; i < nums.size(); i++)
        {
            q.push({nums[i], i});
        }

        while (!q.empty())
        {
            pair<int, int> cur = q.top();
            q.pop();

            if (!marked[cur.second])
            {
                score += cur.first;

                marked[cur.second] = true;

                if (cur.second > 0)
                {
                    marked[cur.second - 1] = true;
                }

                if (cur.second < nums.size() - 1)
                {
                    marked[cur.second + 1] = true;
                }
            }
        }

        return score;
    }
};
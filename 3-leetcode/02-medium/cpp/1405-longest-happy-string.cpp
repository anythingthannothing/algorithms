#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    string longestDiverseString(int a, int b, int c)
    {
        string ans = "";
        priority_queue<pair<int, char>> pq;

        if (a > 0)
        {
            pq.push({a, 'a'});
        }

        if (b > 0)
        {
            pq.push({b, 'b'});
        }

        if (c > 0)
        {
            pq.push({c, 'c'});
        }

        while (!pq.empty())
        {
            pair<int, char> cur = pq.top();
            pq.pop();
            int count = cur.first;
            char character = cur.second;

            if (ans.length() >= 2 && ans[ans.length() - 1] == character &&
                ans[ans.length() - 2] == character)
            {
                if (pq.empty())
                {
                    break;
                }

                pair<int, char> temp = pq.top();
                pq.pop();
                ans += temp.second;
                if (temp.first - 1 > 0)
                {
                    pq.push({temp.first - 1, temp.second});
                }
            }
            else
            {
                count--;
                ans = ans + character;
            }

            if (count > 0)
            {
                pq.push({count, character});
            }
        }
        return ans;
    }
};
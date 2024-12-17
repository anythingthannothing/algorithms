#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    string repeatLimitedString(string s, int repeatLimit)
    {
        unordered_map<char, int> freq;
        for (char c : s)
        {
            freq[c]++;
        }

        priority_queue<char> maxHeap;
        for (auto &[c, count] : freq)
        {
            maxHeap.push(c);
        }

        string result;

        while (!maxHeap.empty())
        {
            char c = maxHeap.top();
            maxHeap.pop();
            int count = freq[c];

            int use = min(count, repeatLimit);
            result.append(use, c);

            freq[c] -= use;

            if (freq[c] > 0 && !maxHeap.empty())
            {
                char nextChar = maxHeap.top();
                maxHeap.pop();

                result.push_back(nextChar);
                freq[nextChar]--;

                if (freq[nextChar] > 0)
                {
                    maxHeap.push(nextChar);
                }

                maxHeap.push(c);
            }
        }

        return result;
    }
};
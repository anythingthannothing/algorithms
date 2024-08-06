#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    int minimumPushes(string word)
    {
        int result = 0;
        vector<int> frequency(26, 0);

        for (char &c : word)
        {
            frequency[c - 'a']++;
        }

        sort(frequency.rbegin(), frequency.rend());

        for (int i = 0; i < 26; ++i)
        {
            if (frequency[i] == 0)
                break;
            result += (i / 8 + 1) * frequency[i];
        }

        return result;
    }
};
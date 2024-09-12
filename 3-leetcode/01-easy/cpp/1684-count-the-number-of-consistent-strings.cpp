#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    int countConsistentStrings(string allowed, vector<string> &words)
    {
        int result = 0;
        vector<bool> a(26, false);

        for (char c : allowed)
        {
            a[c - 'a'] = true;
        }

        for (string s : words)
        {
            bool flag = true;
            for (char c : s)
            {
                if (a[c - 'a'] == false)
                {
                    flag = false;
                    break;
                }
            }

            if (flag)
            {
                result++;
            }
        }

        return result;
    }
};
#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    int maximumLength(string s)
    {
        int freq[26][51];
        memset(freq, 0, sizeof(freq));
        int n = s.length(), res = -1;
        for (int i = 0; i < n;)
        {
            int j = i, count = 0;
            while (j < n && s[j] == s[i])
            {
                count++, j++;
            }
            int c = s[i] - 'a';
            if (++freq[c][count] == 3)
            {
                res = max(res, count);
            }
            else
            {
                if (count > 1)
                {
                    int m = count - 1;
                    freq[c][m] += 2;
                    if (freq[c][m] >= 3)
                    {
                        res = max(res, m);
                    }
                }
                if (count > 2)
                {
                    int m = count - 2;
                    freq[c][m] += 3;
                    res = max(res, m);
                }
            }
            i = j;
        }

        return res;
    }
};
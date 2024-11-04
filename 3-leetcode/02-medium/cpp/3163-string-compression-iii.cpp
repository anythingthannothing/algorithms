#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    string compressedString(string word)
    {
        string res = "";
        char cur = word[0];
        int len = 1;

        for (int i = 1; i < word.size(); i++)
        {
            if (cur == word[i])
            {
                len++;
                continue;
            }

            while (len >= 9)
            {
                res += to_string(9) + cur;
                len -= 9;
            }

            if (len > 0)
            {
                res += to_string(len) + cur;
            }

            cur = word[i];
            len = 1;
        }

        while (len >= 9)
        {
            res += to_string(9) + cur;
            len -= 9;
        }
        if (len > 0)
        {
            res += to_string(len) + cur;
        }

        return res;
    }
};
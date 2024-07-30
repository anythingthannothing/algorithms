#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    bool isIsomorphic(string s, string t)
    {
        vector<int> sArr(128, -1);
        vector<int> tArr(128, -1);

        int length = s.length();

        for (int i = 0; i < length; i++)
        {
            if (sArr[s[i]] != tArr[t[i]])
            {
                return false;
            }

            sArr[s[i]] = i;
            tArr[t[i]] = i;
        }

        return true;
    }
};

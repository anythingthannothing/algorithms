#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    int lengthOfLastWord(string s)
    {
        if (s.length() == 1)
            return 1;

        int endIndex = s.length() - 1;

        while (endIndex > 0 && s[endIndex] == ' ')
        {
            endIndex--;
        }

        int startIndex = endIndex;

        while (startIndex > 0 && s[startIndex - 1] != ' ')
        {
            startIndex--;
        }

        return endIndex - startIndex + 1;
    }
};
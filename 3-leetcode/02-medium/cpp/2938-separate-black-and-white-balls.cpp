#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    long minimumSteps(string s)
    {
        long result = 0;
        int blackBallCount = 0;

        for (char c : s)
        {
            if (c == '0')
            {
                result += blackBallCount;
            }
            else
            {
                blackBallCount++;
            }
        }

        return result;
    }
};
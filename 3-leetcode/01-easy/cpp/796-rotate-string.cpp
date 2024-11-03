#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    bool rotateString(string s, string goal)
    {
        if (s.size() != goal.size())
        {
            return false;
        }

        goal += goal;

        return goal.find(s) == s.npos ? false : true;
    }
};
#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    vector<string> uncommonFromSentences(string s1, string s2)
    {
        unordered_map<string, int> count;
        for (string word : split(s1, " "))
        {
            count[word]++;
        }

        for (string word : split(s2, " "))
        {
            count[word]++;
        }

        vector<string> ans;
        for (pair<string, int> p : count)
        {

            if (p.second == 1)
            {
                ans.push_back(p.first);
            }
        }

        return ans;
    }

private:
    vector<string> split(const string &input, string delimiter)
    {
        vector<string> result;
        auto begin = 0;
        auto end = input.find(delimiter);
        while (end != string::npos)
        {
            result.push_back(input.substr(begin, end - begin));
            begin = end + delimiter.size();
            end = input.find(delimiter, begin);
        }
        result.push_back(input.substr(begin));
        return result;
    }
}
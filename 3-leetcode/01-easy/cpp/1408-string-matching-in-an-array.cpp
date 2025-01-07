#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    vector<string> stringMatching(vector<string> &words)
    {
        vector<string> matchingWords;

        for (int currentWordIndex = 0; currentWordIndex < words.size();
             currentWordIndex++)
        {

            for (int otherWordIndex = 0; otherWordIndex < words.size();
                 otherWordIndex++)
            {
                if (currentWordIndex == otherWordIndex)
                {
                    continue;
                }

                if (isSubstringOf(words[currentWordIndex],
                                  words[otherWordIndex]))
                {
                    matchingWords.push_back(words[currentWordIndex]);
                    break;
                }
            }
        }

        return matchingWords;
    }

private:
    bool isSubstringOf(string &sub, string &main)
    {
        return main.find(sub) != string::npos;
    }
};
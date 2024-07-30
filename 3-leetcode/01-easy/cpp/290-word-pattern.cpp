using namespace std;

class Solution
{
private:
    vector<string> split(string input, string delimiter)
    {
        vector<string> ret;
        long long pos = 0;
        string token = "";
        while ((pos = input.find(delimiter)) != string::npos)
        {
            token = input.substr(0, pos);
            ret.push_back(token);
            input.erase(0, pos + delimiter.length());
        }
        ret.push_back(input);
        return ret;
    }

public:
    bool wordPattern(string pattern, string s)
    {
        vector<string> sArr = split(s, " ");
        unordered_map<char, string> cMap;
        unordered_map<string, char> sMap;

        if (pattern.size() != sArr.size())
            return false;

        for (int i = 0; i < pattern.size(); i++)
        {
            if (cMap.find(pattern[i]) == cMap.end())
            {
                cMap[pattern[i]] = sArr[i];
                if (sMap.find(sArr[i]) != sMap.end())
                {
                    return false;
                }
                sMap[sArr[i]] = pattern[i];
            }
            else
            {
                if (cMap[pattern[i]] != sArr[i])
                {
                    return false;
                }
            }
        }

        return true;
    }
};
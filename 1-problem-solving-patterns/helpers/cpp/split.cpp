#include <bits/stdc++.h>

using namespace std;

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

int main()
{
    string a = "aaa bbb ccc";
    vector<string> b = split(a, " ");

    for (auto v : b)
    {
        cout << v << "\n";
    }
    return 0;
}